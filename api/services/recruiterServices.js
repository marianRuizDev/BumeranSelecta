const { Recruiter } = require('../models');

class recruiterServices {
  static async createRecruiter(body) {
    const { name, lastName, email, password } = body;

    try {
      const newUser = await Recruiter.findOrCreate({
        where: { email },
        defaults: {
          name,
          lastName,
          password,
        },
      });

      return { error: false, data: newUser };
    } catch (error) {
      console.log(error);

      return { error: true, data: error };
    }
  }
}

module.exports = recruiterServices;
