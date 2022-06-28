"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Recruiters", [
      {
        email: "john@hola.com",
        password: "1234",
        name: "John",
        lastName: "Doe",
        country: "Pakistan",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Gastronomía",
        rating: 5,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "renato@hola.com",
        password: "1234",
        name: "Renato",
        lastName: "Booth",
        country: "Swaziland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Marketing",
        rating: 8,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "salvatore@hola.com",
        password: "1234",
        name: "Salvatore",
        lastName: "Moses",
        country: "Iran",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Administración",
        rating: 6,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "kasey@hola.com",
        password: "1234",
        name: "Kasey",
        lastName: "Roberson",
        country: "Austria",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Comercial",
        rating: 5,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "lula@hola.com",
        password: "1234",
        name: "Lula",
        lastName: "Vega",
        country: "Switzerland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Producción",
        rating: 7,
        activeSearchs: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "bradly@hola.com",
        password: "1234",
        name: "Bradly",
        lastName: "Cummings",
        country: "Canada",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Tecnología",
        rating: 1,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "susan@hola.com",
        password: "1234",
        name: "Susan",
        lastName: "Walsh",
        country: "Finland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Logística",
        rating: 8,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "janis@hola.com",
        password: "1234",
        name: "Janis",
        lastName: "Weber",
        country: "Ethiopia",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Gastronomía",
        rating: 5,
        activeSearchs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "susan@hola.com",
        password: "1234",
        name: "Tabatha",
        lastName: "Horne",
        country: "France",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Recursos Humanos",
        rating: 6,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "scot@hola.com",
        password: "1234",
        name: "Scot",
        lastName: "Olsen",
        country: "Honduras",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Salud",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "raquel@hola.com",
        password: "1234",
        name: "Raquel",
        lastName: "Flores",
        country: "Perú",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Ingenierías",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "renaldo@hola.com",
        password: "1234",
        name: "Renaldo",
        lastName: "Rios",
        country: "Colombia",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Atención al Cliente",
        rating: 6,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "cortez@hola.com",
        password: "1234",
        name: "Cortez",
        lastName: "Moore",
        country: "Mxico",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Marketing",
        rating: 8,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "tiffany@hola.com",
        password: "1234",
        name: "Tiffany",
        lastName: "Malone",
        country: "Argentina",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Construcción",
        rating: 7,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jack@hola.com",
        password: "1234",
        name: "Jack",
        lastName: "Yates",
        country: "Gemany",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Comercio Exterior",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "maynard@hola.com",
        password: "1234",
        name: "Maynard",
        lastName: "Doe",
        country: "Pakistan",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Gastronomía",
        rating: 5,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "courtney@hola.com",
        password: "1234",
        name: "Courtney",
        lastName: "Mueller",
        country: "Swaziland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Marketing",
        rating: 8,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "cruz@hola.com",
        password: "1234",
        name: "Cruz",
        lastName: "Powers",
        country: "Iran",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Administración",
        rating: 6,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alisa@hola.com",
        password: "1234",
        name: "Henry",
        lastName: "Roberson",
        country: "Austria",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Comercial",
        rating: 5,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "jarrod@hola.com",
        password: "1234",
        name: "Jarrod",
        lastName: "Ramirez",
        country: "Switzerland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Producción",
        rating: 7,
        activeSearchs: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "bradly@hola.com",
        password: "1234",
        name: "Bradly",
        lastName: "Cummings",
        country: "Canada",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Tecnología",
        rating: 1,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "francesco@hola.com",
        password: "1234",
        name: "Francesco",
        lastName: "Leach",
        country: "Finland",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Logística",
        rating: 8,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alberto@hola.com",
        password: "1234",
        name: "Alberto",
        lastName: "Guerrero",
        country: "Ethiopia",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Gastronomía",
        rating: 5,
        activeSearchs: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "luigi@hola.com",
        password: "1234",
        name: "Luigi",
        lastName: "Robertson",
        country: "France",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Recursos Humanos",
        rating: 6,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "myra@hola.com",
        password: "1234",
        name: "Myra",
        lastName: "Pope",
        country: "Honduras",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Salud",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "celeste@hola.com",
        password: "1234",
        name: "Celeste",
        lastName: "Massey",
        country: "Perú",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Ingenierías",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "felipe@hola.com",
        password: "1234",
        name: "Felipe",
        lastName: "Rush",
        country: "Colombia",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Atención al Cliente",
        rating: 6,
        activeSearchs: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "dylan@hola.com",
        password: "1234",
        name: "Dylan",
        lastName: "Burke",
        country: "Mxico",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Marketing",
        rating: 8,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "logan@hola.com",
        password: "1234",
        name: "Logan",
        lastName: "Brewer",
        country: "Argentina",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Construcción",
        rating: 7,
        activeSearchs: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alfreda@hola.com",
        password: "1234",
        name: "Alfreda",
        lastName: "Bishop",
        country: "Gemany",
        description:
          "Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.",
        experienceField: "Comercio Exterior",
        rating: 3,
        activeSearchs: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Recruiters", null, {});
  },
};
