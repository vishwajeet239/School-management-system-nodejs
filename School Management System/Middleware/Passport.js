import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import Admin from './models/Admin.js';
import Teacher from './models/Teacher.js';
import Student from './models/Student.js';

passport.use('local', new LocalStrategy(
  { usernameField: 'email' }, // Assuming email as the username
  async (email, password, done) => {
    try {
      let user = await Admin.findOne({ 'contact.email': email });
      
      if (!user) {
        user = await Teacher.findOne({ 'contact.email': email });
      }

      if (!user) {
        user = await Student.findOne({ 'contact.email': email });
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, { id: user.id, role: user.role });
});

passport.deserializeUser(async (obj, done) => {
  const { id, role } = obj;
  let user;
  try {
    if (role === 'admin') {
      user = await Admin.findById(id);
    } else if (role === 'teacher') {
      user = await Teacher.findById(id);
    } else if (role === 'student') {
      user = await Student.findById(id);
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
