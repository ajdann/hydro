import jwt from 'jsonwebtoken';


const auth = async(req, res, next) =>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;

        decodedData = jwt.verify(token, 'secret');
        req.userId = decodedData?.id;

        decodedData = jwt.decode(token);
        req.userId = decodedData?.sub;

        next();
        
    } catch(error){
        console.log(error);
    }
}