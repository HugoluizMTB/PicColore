import User from "../model/user.model.js";

async function loginUser(req, res) {
    try {
      const body = req.body
      const login = await User.findOne({ where: {
        user_login: body.user_login,
        user_password: body.user_password 
    }})
      if (!login) {
        res.send({ msg: "Usuário ou senha incorreta" })
      } else {
        res.status(401).json(login)
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Não foi possível fazer o login. Tente novamente mais tarde" })
    }
  }

export default loginUser