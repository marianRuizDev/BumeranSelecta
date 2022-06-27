const ServicesRecruiters = require("../services/RecruiterService");

class RoutersRecruiters {


  static async register(req, res) {
    const { error, data } = await ServicesRecruiters.createUser(req.body);
    
    if (data[1]) res.status(201).send(data[0]);
    else res.status(400).send(data[1]);

    if (error) res.status(404).send(data);
  }

  static async login(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  static logout(req, res) {
    req.logout(req.user, (err) => {
      if (err) return next(err);
      res.send("Deslogueado");
    });
  }
}

module.exports = RoutersRecruiters;
