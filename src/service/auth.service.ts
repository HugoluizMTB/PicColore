import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

//https://www.codeproject.com/Questions/5311111/Error-jwt-malformed-when-I-make-a-post-call-to-a-r

// export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token: any = req.header("Authorization")?.replace("Bearer ", "");
//     if (token == null) {
//       res
//         .status(401)
//         .send({ msg: "Usuário não possui um token. Faça o login primeiro" });
//     } else {
//       const decoded = jwt.verify(token, process.env.JWT_KEY as string);
//       (req as CustomRequest).token = decoded;
//       next()
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
//mudança no codigo
  try {

      let token: any;
      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
          token = req.headers.authorization.split(" ")[1]
      }

      if(!token){
          return res.status(401).json({errorMessage : "Autenticação inválida"})
      }

      try {
          const decoded = jwt.verify(token, process.env.JWT_KEY as string);  
          next()
          
      } catch (error) {
          return res.status(500).json({errorMessage: error.message})

          
      }
 
   
      
  }catch (error) {
      return res.status(500).json({errorMessage: "Not authorized"})
      
  }
  
}