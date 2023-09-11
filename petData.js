const commonPets = [
  //COMMON PETS
  {
    name: "Alejandro",
    rarity: "Common",
    stats: {
      int: 15,
      mana_per_second: 1,
    },
  },
  {
    name: "Amy",
    rarity: "Common",
    stats: {
      dex: 20,
      mana: 10,
      mana_per_second: 3,
    },
  },
  {
    name: "August",
    rarity: "Common",
    stats: {
      dodge: "10%",
    },
  },
  {
    name: "Camilla",
    rarity: "Common",
    stats: {
      str: 12,
      damage_reduction: "2%",
    },
  },
  {
    name: "Cinder",
    rarity: "Common",
    stats: {
      damage: "5%",
    },
  },
  {
    name: "Dauphin",
    rarity: "Common",
    stats: {
      hp_per_second: 2,
    },
  },
  {
    name: "Flounder",
    rarity: "Common",
    stats: {
      hp_per_second: 3,
      damage: "5%",
    },
  },
  {
    name: "Frost",
    rarity: "Common",
    stats: {
      int: 15,
      movement_speed: "5%",
    },
  },
  {
    name: "Guapo",
    rarity: "Common",
    stats: {
      str: 10,
      movement_speed: "5%",
    },
  },
  {
    name: "Harley",
    rarity: "Common",
    stats: {
      dex: 10,
      crit: "3%",
    },
  },
  {
    name: "Malgo",
    rarity: "Common",
    stats: {
      int: 12,
      crit: "3%",
    },
  },
  {
    name: "Mercury",
    rarity: "Common",
    stats: {
      str: 10,
      dodge: "3%",
    },
  },
  {
    name: "Precious",
    rarity: "Common",
    stats: {
      dex: 10,
      dodge: "5%",
    },
  },
  {
    name: "Rocky",
    rarity: "Common",
    stats: {
      str: 15,
    },
  },
  {
    name: "Timber",
    rarity: "Common",
    stats: {
      damage: "5%",
    },
  },
  {
    name: "Guapo (Honor PvP)",
    rarity: "Common",
    stats: {
      str: 3,
      movement_speed: "5%",
    },
  },
  {
    name: "Precious (Honor PvP)",
    rarity: "Common",
    stats: {
      dex: 10,
      dodge: "5%",
    },
  },
  {
    name: "Timber (Honor PvP)",
    rarity: "Common",
    stats: {
      damage: "5%",
    },
  },
];

const rarePets = [
  //RARE PETS
  {
    name: "Abigail",
    rarity: "Rare",
    stats: {
      armor: 35,
      crit: "4%",
    },
  },
  {
    name: "Barney",
    rarity: "Rare",
    stats: {
      hp_per_second: 3,
      damage: "5%",
    },
  },
  {
    name: "Bismark",
    rarity: "Rare",
    stats: {
      int: 10,
      mana_per_second: 3,
    },
  },
  {
    name: "Chase",
    rarity: "Rare",
    stats: {
      damage_reduction: "1%",
    },
  },
  {
    name: "Dart",
    rarity: "Rare",
    stats: {
      mana_per_second: 3,
    },
  },
  {
    name: "Deary",
    rarity: "Rare",
    stats: {
      str: 10,
      dex: 10,
    },
  },
  {
    name: "Deston",
    rarity: "Rare",
    stats: {
      movement_speed: "10%",
    },
  },
  {
    name: "George",
    rarity: "Rare",
    stats: {
      dodge: "5%",
      damage: "5%",
    },
  },
  {
    name: "Jack",
    rarity: "Rare",
    stats: {
      str: 5,
      int: 5,
      damage_reduction: "1%",
    },
  },
  {
    name: "Jahooty",
    rarity: "Rare",
    stats: {
      mana_per_second: 2,
    },
  },
  {
    name: "Kelvin",
    rarity: "Rare",
    stats: {
      dex: 10,
      int: 10,
    },
  },
  {
    name: "Nemesio",
    rarity: "Rare",
    stats: {
      primary_stat: 10,
      bonus_damage: "3%",
    },
  },
  {
    name: "Pinfeathers",
    rarity: "Rare",
    stats: {
      armor: 60,
      movement_speed: "10%",
    },
  },
];
const petData = [...commonPets, ...rarePets];
