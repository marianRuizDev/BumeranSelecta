const Search = require("../models/Search");

class searchServices {
  /////////// RUTAS ARIEL/////////
  static async getAll() {
    try {
      const allSearch = await Search.findAll();
      return { error: false, data: allSearch };
    } catch (error) {
      return { error: true, data: "Publicaciones no encontradas" };
    }
  }

  static async create(body) {
    const {
      country,
      area,
      description,
      vacancies,
      status,
      jobSchedules,
      salary,
      title,
      category,
    } = body;
    try {
      const newSearch = Search.create({
        country,
        area,
        description,
        vacancies,
        status,
        jobSchedules,
        salary,
        title,
        category,
      });

      return { error: false, data: newSearch };
    } catch (error) {
      return { error: true, data: "No se puedo crear una nueva Publicacion" };
    }
  }

  static async getOne(id) {
    try {
      const data = await Search.findAll(id);
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found",
      };
    }
  }

  static async delete(id) {
    try {
      const data = await Search.destroy(id);
      return data;
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: product not found",
      };
    }
  }

  /////////// FIN RUTAS ARIEL/////////
}

module.exports = searchServices;
