const roleMiddleware=(requiredRole)=> {
    return function(req,res,next) {
        console.log(req);
        if(!req.isAuthenticated() || req.user.role !== requiredRole) {
            return res.status(403).json({message:'Forbidden'});
        }
        next();
    };
}


export default roleMiddleware;