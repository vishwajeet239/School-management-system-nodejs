import bcrypt from 'bcryptjs';

const hashPassword = async function (next) {
    if(!this.isModified('password')) {
        return next();
    }

    try {
        this.password= await bcrypt.hash(this.password,10);
        next();
    } catch (error) {
        next(error);
    }
}

export default hashPassword;