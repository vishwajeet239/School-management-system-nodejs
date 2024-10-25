
const ensureAuthenticated = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: 'You are not authenticated' });
};

export default ensureAuthenticated;