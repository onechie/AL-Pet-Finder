//COMMON PETS
const commonPets = [
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
      mana_raw: 10,
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
      damage_percent: "5%",
    },
  },
  {
    name: "Dauphin",
    rarity: "Common",
    stats: {
      health_per_second: 2,
    },
  },
  {
    name: "Flounder",
    rarity: "Common",
    stats: {
      health_per_second: 3,
      damage_percent: "5%",
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
      damage_percent: "5%",
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
      damage_percent: "5%",
    },
  },
];
//RARE PETS
const rarePets = [
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
      health_per_second: 3,
      damage_percent: "5%",
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
      damage_percent: "5%",
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
      bonus_damage_percent: "3%",
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
//EPIC PETS
const epicPets = [
  {
    name: "Aspen",
    rarity: "Epic",
    stats: {
      int: 35,
      crit: "10%",
      health_per_second: 3,
    },
  },
  {
    name: "Blight",
    rarity: "Epic",
    stats: {
      crit: "5%",
      mana_per_second: 5,
      damage_percent: "10%",
    },
  },
  {
    name: "Cerella",
    rarity: "Epic",
    stats: {
      health_per_second: 4,
      armor: "60",
    },
  },
  {
    name: "Entomis",
    rarity: "Epic",
    stats: {
      primary_stat: 15,
      mana_raw: 80,
      damage_percent: "10%",
    },
  },
  {
    name: "Esteban",
    rarity: "Epic",
    stats: {
      dodge: "10%",
      crit: "5%",
      damage_percent: "10%",
    },
  },
  {
    name: "Ethyl",
    rarity: "Epic",
    stats: {
      str: 15,
      int: 15,
      crit: "6%",
      damage_percent: "10%",
    },
  },
  {
    name: "Frosteye",
    rarity: "Epic",
    stats: {
      primary_stat: 12,
      damage_reduction: "1%",
    },
  },
  {
    name: "Gaze",
    rarity: "Epic",
    stats: {
      primary_stat: 12,
      str_dex_int: 12,
      damage_percent: "7%",
    },
  },
  {
    name: "Grave",
    rarity: "Epic",
    stats: {
      int: 15,
      dodge: "5%",
      crit: "5%",
    },
  },
  {
    name: "Hazel",
    rarity: "Epic",
    stats: {
      str: 30,
      health_per_second: 3,
      movement_speed: "7%",
    },
  },
  {
    name: "Koko",
    rarity: "Epic",
    stats: {
      int: 15,
      dodge: "5%",
      armor: 80,
    },
  },
  {
    name: "Konga",
    rarity: "Epic",
    stats: {
      dodge: "10%",
      damage_percent: "10%",
    },
  },
  {
    name: "Meep-Moop",
    rarity: "Epic",
    stats: {
      dex: 20,
      crit: "8%",
      mana_per_second: 3,
    },
  },
  {
    name: "Nexus",
    rarity: "Epic",
    stats: {
      str: 15,
      dex: 10,
      mana_per_second: 2,
      damage_reduction: "1%",
    },
  },
  {
    name: "Porkchop",
    rarity: "Epic",
    stats: {
      primary_stat: 10,
      health_raw: 100,
      damage_percent: "5%",
    },
  },
  {
    name: "Lucky",
    rarity: "Epic",
    stats: {
      primary_stat: 10,
      armor: 200,
      gold_loot: "20%",
    },
  },
  {
    name: "Snowy",
    rarity: "Epic",
    stats: {
      primary_stat: 15,
      crit: "10%",
    },
  },
  {
    name: "Spitfire",
    rarity: "Epic",
    stats: {
      primary_stat: 10,
      str: 15,
      movement_speed: "7%",
    },
  },
  {
    name: "Squash",
    rarity: "Epic",
    stats: {
      dodge: "10%",
      damage_percent: "10%",
    },
  },
  {
    name: "Tankton",
    rarity: "Epic",
    stats: {
      dex: 15,
      health_per_second: 3,
    },
  },
  {
    name: "Uries",
    rarity: "Epic",
    stats: {
      dex: 15,
      health_per_second: 3,
      mana_per_second: 5,
      damage_percent: "10%",
    },
  },
  {
    name: "Vixen",
    rarity: "Epic",
    stats: {
      str: 15,
      crit: "5%",
      damage_percent: "10%",
    },
  },
  {
    name: "Wurmtongue",
    rarity: "Epic",
    stats: {
      dex: 25,
      crit: "6%",
      mana_per_second: 4,
    },
  },
  {
    name: "Wyatt",
    rarity: "Epic",
    stats: {
      str: 20,
      health_per_second: 5,
      damage_percent: "10%",
    },
  },
];
//LEGENDARY PETS
const legendaryPets = [
  {
    name: "Anky",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 20,
      armor_stacking: "25%",
      damage_stacking: "25%",
    },
  },
  {
    name: "Arie",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 5,
      luck: "15%",
    },
  },
  {
    name: "Arthur",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 7,
      crit: "5%",
      damage_percent: "15%",
    },
  },
  {
    name: "Bemine",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 25,
      damage_stacking: "15%",
      damage_reduction: "15%",
    },
  },
  {
    name: "Bevo",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      damage_stacking: "15%",
      damage_reduction_stacking: "15%",
    },
  },
  {
    name: "Blacklight",
    rarity: "Legendary",
    stats: {
      primary_stat: 10,
      str_dex_int: 25,
      damage_stacking: "5%",
      mitigation_armor: "5%",
    },
  },
  {
    name: "Blinky",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 5,
      crit: "6.5%",
      damage_reduction: "3%",
      damage_percent: "10%",
    },
  },
  {
    name: "Blitzer",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 12,
      crit: "5%",
    },
  },
  {
    name: "Boris",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str: 10,
      health_per_second: 5,
      damage_reduction: "3%",
    },
  },
  {
    name: "Breezaga",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      mana_raw: 200,
    },
  },
  {
    name: "Churro",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 5,
      haste: "5%",
      damage_percent: "12%",
    },
  },
  {
    name: "Clyde",
    rarity: "Legendary",
    stats: {
      str: 10,
      int: 30,
      crit: "7%",
    },
  },
  {
    name: "Colton",
    rarity: "Legendary",
    stats: {
      int: 30,
      mana_per_second: 5,
      damage_percent: "10%",
    },
  },
  {
    name: "Comet",
    rarity: "Legendary",
    stats: {
      primary_stat: 12,
      str_dex_int: 15,
      damage_raw: 1.5,
    },
  },
  {
    name: "Cotis",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 10,
      armor_stacking: "15%",
      gold_loot: "15%",
    },
  },
  {
    name: "Cottonkill",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      health_raw: 100,
      mana_raw: 125,
      damage_raw: 5,
      speed_stacking: "5%",
    },
  },
  {
    name: "Courage",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      dodge: "7%",
      health_raw: 150,
      damage_percent: "8%",
    },
  },
  {
    name: "Crawly",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      crit: "7%",
      health_raw: 100,
      health_per_second: 6,
    },
  },
  {
    name: "Cupcake",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      health_raw: 130,
      damage_raw: 2.25,
      luck: "2.5%",
    },
  },
  {
    name: "Dovabear",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      mana_raw: 100,
      mana_per_second: 8,
      damage_percent: "12%",
    },
  },
  {
    name: "Eterno",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 15,
      health_percent: "15%",
      xp: "15%",
    },
  },
  {
    name: "Ewen",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      health_raw: 150,
      mana_raw: 100,
    },
  },
  {
    name: "Fantasma",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      health_per_second: 5,
      movement_speed: "10%",
      damage_percent: "12%",
    },
  },
  {
    name: "Fenris",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      armor_stacking: "5%",
      damage_percent: "10%",
      movement_speed: "15%",
    },
  },
  {
    name: "Flap jack",
    rarity: "Legendary",
    stats: {
      health_per_second: 8,
      mana_per_second: 8,
      damage_percent: "15%",
    },
  },
  {
    name: "Foxy",
    rarity: "Legendary",
    stats: {
      str_dex_int: 15,
      mana_raw: 175,
      mana_per_second: 10,
      damage_percent: "10%",
    },
  },
  {
    name: "Breeze",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      crit: "6%",
      mana_per_second: 12,
      damage_percent: "10%",
    },
  },
  {
    name: "Frist",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      armor: 100,
    },
  },
  {
    name: "Fritters",
    rarity: "Legendary",
    stats: {
      str_dex_int: 15,
      armor: 175,
      damage_percent: "15%",
    },
  },
  {
    name: "Frostarion",
    rarity: "Legendary",
    stats: {
      crit: "5%",
      speed_stacking: "10%",
      damage_percent: "25%",
    },
  },
  {
    name: "Glokus",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 15,
      armor_stacking: "20%",
      gold_loot: "10%",
    },
  },
  {
    name: "Gloom",
    rarity: "Legendary",
    stats: {
      str_dex_int: 12,
      health_raw: 75,
      mana_raw: 75,
      damage_percent: "10%",
    },
  },
  {
    name: "Gobbles",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 25,
      damage_percent: "15%",
    },
  },
  {
    name: "Gold Slobber",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      damage_reduction: "3%",
      damage_percent: "10%",
      movement_speed: "10%",
    },
  },
  {
    name: "Gourdon",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 5,
      mana_raw: 200,
      damage_reduction: "2%",
    },
  },
  {
    name: "Gourdy",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 5,
      dodge: "5%",
      damage_percent: "10%",
    },
  },
  {
    name: "Granite",
    rarity: "Legendary",
    stats: {
      dex: 25,
      dodge: "5%",
      mana_per_second: 4,
    },
  },
  {
    name: "Gyrm",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      mana_per_second: 4,
      damage_percent: "12%",
      movement_speed: "10%",
    },
  },
  {
    name: "Harpo",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 15,
      damage_stacking: "15%",
      speed_stacking: "15%",
    },
  },
  {
    name: "Harry",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 15,
      mana_raw: 150,
      elite_damage: "10%",
      speed_stacking: "10%",
    },
  },
  {
    name: "Haxonite",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      int: 10,
      mana_raw: 65,
      damage_percent: "12%",
      mana_per_second: 10,
    },
  },
  {
    name: "Haze",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      mana_per_second: 8,
      damage_percent: "10%",
      movement_speed: "12%",
    },
  },
  {
    name: "Horton",
    rarity: "Legendary",
    stats: {
      dex: 20,
      crit: "10%",
      mana_per_second: 5,
    },
  },
  {
    name: "Iceball",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      health_raw: 100,
      damage_percent: "12%",
      damage_reduction: "2%",
    },
  },
  {
    name: "Ironbite",
    rarity: "Legendary",
    stats: {
      str_dex_int: 10,
      mana_raw: 125,
      damage_reduction: "2.5%",
    },
  },
  {
    name: "Kettle",
    rarity: "Legendary",
    stats: {
      str_dex_int: 15,
      damage_percent: "10%",
    },
  },
  {
    name: "Korruption",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 15,
      dodge: "3.25%",
      crit: "6%",
      damage_percent: "10%",
    },
  },
  {
    name: "Lammy",
    rarity: "Legendary",
    stats: {
      primary_stat: 35,
      str_dex_int: 30,
      crit: "15%",
      damage_stacking: "25%",
      elite_damage: "20%",
      aura: "3% H/s",
    },
  },
  {
    name: "Little Bear",
    rarity: "Legendary",
    stats: {
      primary_stat: 12,
      str_dex_int: 10,
      crit: "8%",
      armor: 80,
      damage_reduction: "2%",
    },
  },
  {
    name: "Loco",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 5,
      speed_stacking: "5%",
      damage_percent: "15%",
    },
  },
  {
    name: "Loki",
    rarity: "Legendary",
    stats: {
      str: 15,
      mana_per_second: 5,
      damage_percent: "15%",
    },
  },
  {
    name: "Loveling",
    rarity: "Legendary",
    stats: {
      str_dex_int: 20,
      crit: "5%",
      damage_stacking: "15%",
      damage_reduction_stacking: "15%",
      mana_ignore_chance: "15%",
    },
  },
  {
    name: "Lupe",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      boss_damage: "20%",
      speed_stacking: "10%",
    },
  },
  {
    name: "Malison",
    rarity: "Legendary",
    stats: {
      str_dex_int: 20,
      crit: "5%",
    },
  },
  {
    name: "McCraw",
    rarity: "Legendary",
    stats: {
      dex: 15,
      dodge: "10%",
      crit: "10%",
      movement_speed: "7%",
    },
  },
  {
    name: "Misty",
    rarity: "Legendary",
    stats: {
      health_raw: 300,
      damage_percent: "10%",
    },
  },
  {
    name: "Nightshade",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 15,
      crit: "6%",
      damage_percent: "17%",
      damage_reduction: "2%",
    },
  },
  {
    name: "Nilbog",
    rarity: "Legendary",
    stats: {
      primary_stat: 10,
      str_dex_int: 20,
      crit: "6%",
      damage_percent: "10%",
      movement_speed: "5%",
    },
  },
  {
    name: "Orion",
    rarity: "Legendary",
    stats: {
      str: 10,
      int: 20,
      health_raw: 160,
      damage_reduction: "2%",
    },
  },
  {
    name: "Oswald",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 15,
      health_raw: 100,
      mana_raw: 100,
      damage_raw: 10,
      speed_stacking: "10%",
    },
  },
  {
    name: "Patches",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      crit: "4%",
      health_raw: 180,
      movement_speed: "10%",
    },
  },
  {
    name: "Prance",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str: 15,
      armor: 60,
    },
  },
  {
    name: "Prower",
    rarity: "Legendary",
    stats: {
      primary_stat: 35,
      crit: "6.5%",
      mana_raw: 125,
      damage_raw: 1,
      damage_percent: "10%",
    },
  },
  {
    name: "Quentin",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      armor_stacking: "10%",
      damage_percent: "15%",
      movement_speed: "20%",
    },
  },
  {
    name: "Rammington",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 5,
      dodge: "5%",
      damage_percent: "10%",
    },
  },
  {
    name: "Ribbit",
    rarity: "Legendary",
    stats: {
      str: 25,
      crit: "7%",
      health_per_second: 8,
    },
  },
  {
    name: "Robbin",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      dex: 10,
      gold_loot: "10%",
      luck: "10%",
    },
  },
  {
    name: "Romero",
    rarity: "Legendary",
    stats: {
      primary_stat: 45,
      str_dex_int: 25,
      crit: "15%",
      boss_damage: "20%",
    },
  },
  {
    name: "Rudolph",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      damage_raw: 1.5,
    },
  },
  {
    name: "Ryker",
    rarity: "Legendary",
    stats: {
      crit: "10%",
      damage_stacking: "15%",
      speed_stacking: "15%",
    },
  },
  {
    name: "Samson",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 15,
      health_raw: 500,
      damage_stacking: "15%",
      speed_stacking: "15%",
    },
  },
  {
    name: "Sassy",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 5,
      mana_raw: 100,
      damage_percent: "10%",
      damage_reduction: "2.5%",
    },
  },
  {
    name: "Scorn",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      int: 15,
      crit: "8%",
      health_per_second: 3,
    },
  },
  {
    name: "Toxy",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 15,
      damage_raw: 1.5,
      armor: 210,
      damage_percent: "12%",
    },
  },
  {
    name: "Sentinel",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      crit: "4.5%",
      damage_percent: "10%",
      damage_reduction: "2%",
    },
  },
  {
    name: "Shade",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      crit: "6%",
      mana_raw: 100,
      damage_percent: "10%",
    },
  },
  {
    name: "Shadowfang",
    rarity: "Legendary",
    stats: {
      str_dex_int: 5,
    },
  },
  {
    name: "Shadowlurk",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      mana_raw: 100,
      damage_reduction: "2%",
      damage_percent: "10%",
    },
  },
  {
    name: "Shiloh",
    rarity: "Legendary",
    stats: {
      damage_reduction: "4%",
      movement_speed: "12%",
    },
  },
  {
    name: "Silver",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      crit: "7.5%",
      damage_percent: "10%",
      movement_speed: "6%",
    },
  },
  {
    name: "Oswald",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      crit: "7.5%",
      mana_raw: 125,
      damage_reduction: "2.5%",
    },
  },
  {
    name: "Slink",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      damage_reduction: "3%",
      damage_percent: "10%",
      movement_speed: "10%",
    },
  },
  {
    name: "Slobber",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      damage_reduction: "3%",
      damage_percent: "10%",
      movement_speed: "10%",
    },
  },
  {
    name: "Snaggletooth",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      mana_per_second: 4,
      damage_reduction: "2%",
    },
  },
  {
    name: "Snappy",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      damage_reduction: "2%",
      movement_speed: "10%",
      damage_percent: "8%",
    },
  },
  {
    name: "Snowball",
    rarity: "Legendary",
    stats: {
      crit: "5%",
      damage_percent: "5%",
    },
  },
  {
    name: "Squealems 'n Squish",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      armor: 100,
      unique: "6% of STR as Health per Second",
    },
  },
  {
    name: "Stanlee",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      health_raw: 100,
      armor: 150,
      damage_percent: "8%",
    },
  },
  {
    name: "Swift",
    rarity: "Legendary",
    stats: {
      primary_stat: 35,
      crit: "6.5%",
      health_raw: 125,
      armor: 85,
      damage_percent: "12%",
    },
  },
  {
    name: "Symia",
    rarity: "Legendary",
    stats: {
      primary_stat: 10,
      str_dex_int: 12,
      health_raw: 100,
      damage_percent: "10%",
    },
  },
  {
    name: "Talon",
    rarity: "Legendary",
    stats: {
      dex: 30,
      mana_raw: 40,
      mana_per_second: 5,
      damage_percent: "10%",
    },
  },
  {
    name: "Thog",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 12,
      health_raw: 125,
      mana_raw: 100,
      damage_percent: "10%",
    },
  },
  {
    name: "Titan",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      str_dex_int: 5,
      crit: "5.5%",
      damage_percent: "10%",
    },
  },
  {
    name: "Tsunami",
    rarity: "Legendary",
    stats: {
      crit: "15%",
      health_percent: "10%",
      damage_stacking: "20%",
    },
  },
  {
    name: "Valkin",
    rarity: "Legendary",
    stats: {
      primary_stat: 10,
      str: 20,
      dodge: "2%",
      crit: "8%",
    },
  },
  {
    name: "Venim",
    rarity: "Legendary",
    stats: {
      primary_stat: 10,
      str_dex_int: 20,
      crit: "4%",
      damage_percent: "12%",
    },
  },
  {
    name: "Violet",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      health_per_second: 6,
      mana_per_second: 6,
      damage_percent: "10%",
    },
  },
  {
    name: "Vlad",
    rarity: "Legendary",
    stats: {
      health_per_second: 8,
      mana_per_second: 8,
      damage_percent: "15%",
    },
  },
  {
    name: "Whiskers",
    rarity: "Legendary",
    stats: {
      primary_stat: 15,
      elite_damage: "10%",
      mitigation_armor: "10%",
      luck: "10%",
    },
  },
  {
    name: "Wilbur",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str: 10,
      gold_loot: "10%",
      luck: "10%",
    },
  },
  {
    name: "Wrathjaw",
    rarity: "Legendary",
    stats: {
      dex: 20,
      int: 20,
      crit: "6%",
      health_per_second: 4,
      damage_percent: "10%",
    },
  },
  {
    name: "Yowie",
    rarity: "Legendary",
    stats: {
      primary_stat: 35,
      dodge: "6.5%",
      health_raw: 165,
      mana_raw: 65,
      damage_percent: "12%",
    },
  },
  {
    name: "Agent Timber",
    rarity: "Legendary",
    stats: {
      primary_stat: 35,
      str_dex_int: 10,
      mana_percent: "15%",
      xp: "25%",
    },
  },
  {
    name: "Barky Boo",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 15,
      gold_loot: "20%",
      speed_stacking: "25%",
    },
  },
  {
    name: "Batalho",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 20,
      damage_stacking: "15%",
      mitigation_armor: "25%",
    },
  },
  {
    name: "Eggsorcist",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str: 25,
      dex: 15,
      int: 15,
      armor_stacking: "10%",
      damage_stacking: "10%",
      speed_stacking: "10%",
      unique: "1% str for every monster killed (lasts 10s)",
    },
  },
  {
    name: "Elbert",
    rarity: "Legendary",
    stats: {
      primary_stat: 50,
      crit_damage: "10%",
      damage_reduction_stacking: "20%",
      mana_ignore_chance: "15%",
    },
  },
  {
    name: "Grom",
    rarity: "Legendary",
    stats: {
      primary_stat: 40,
      boss_damage: "20%",
      damage_percent: "20%",
      unique: "Up to +400 Health at Max Pet Level",
    },
  },
  {
    name: "Hamad",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 15,
      boss_damage: "15%",
      speed_stacking: "20%",
    },
  },
  {
    name: "Huunestra",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 30,
      haste: "10%",
      armor_stacking: "20%",
    },
  },
  {
    name: "Kuai",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 20,
      health_raw: 200,
      mana_raw: 250,
      damage_percent: "10%",
      speed_stacking: "10%",
    },
  },
  {
    name: "Love Pupper",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 30,
      haste: "10%",
      gold_loot: "35%",
    },
  },
  {
    name: "Maltus",
    rarity: "Legendary",
    stats: {
      primary_stat: 40,
      str_dex_int: 10,
      haste: "15%",
      damage_stacking: "25%",
    },
  },
  {
    name: "Pere",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 25,
      boss_damage: "15%",
      damage_reduction_stacking: "15%",
    },
  },
  {
    name: "Poksau",
    rarity: "Legendary",
    stats: {
      primary_stat: 30,
      str_dex_int: 20,
      damage_stacking: "20%",
      gold_loot: "5%",
    },
  },
  {
    name: "Redd",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 25,
      gold_loot: "25%",
      speed_stacking: "20%",
    },
  },
  {
    name: "Reppy",
    rarity: "Legendary",
    stats: {
      primary_stat: 25,
      str_dex_int: 10,
      crit: "5%",
      health_raw: 200,
      damage_percent: "15%",
    },
  },
  {
    name: "Sabra",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      damage_stacking: "20%",
    },
  },
  {
    name: "Shoggoth",
    rarity: "Legendary",
    stats: {
      str_dex_int: 20,
      crit: "5%",
      mana_raw: 400,
      damage_percent: "15%",
      damage_reduction: "15%",
    },
  },
  {
    name: "Speckles",
    rarity: "Legendary",
    stats: {
      primary_stat: 20,
      str_dex_int: 10,
      boss_damage: "20%",
      speed_stacking: "10%",
    },
  },
  {
    name: "Taika",
    rarity: "Legendary",
    stats: {
      health_percent: "15%",
      damage_stacking: "15%",
      mana_ignore_chance: "10%",
    },
  },
];
const petData = [...commonPets, ...rarePets, ...epicPets, ...legendaryPets];
