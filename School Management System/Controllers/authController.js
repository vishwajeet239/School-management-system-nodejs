// controllers/authController.js

import passport from 'passport';

const login = (role) => (req, res, next) => {
    passport.authenticate(`${role}-local`, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(403).json({ message: info.message });
        }

        req.login(user, (err) => {
            if (err) return next(err);
            res.json({ message: 'Login successful', user });
        });
    })(req, res, next);
};

const logout = (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.json({ message: 'Logout successful' });
    });
};

export default { login, logout };
