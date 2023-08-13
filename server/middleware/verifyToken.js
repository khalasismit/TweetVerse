import jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) =>{
    try {
        const token = req.header("token");
        
        if(!token){
            return res.status(403).send("Access Denied")
        }

        if(token.startsWith("Bearer ")){
            token = token.slice(7,token.length).trimLeft();
        }

        const verified = jwt.verify(token,process.env.JWT_SECRET);
        req.user = verified;    
        res.status(202).send(verified);
        next();
    } catch (error) {
        res.status(500).send(error)
    }
}