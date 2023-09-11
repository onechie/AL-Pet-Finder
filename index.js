const petContainer = document.getElementById("pet-container");
const petStat = document.getElementById("pet-stat");
const petRarity = document.getElementById("pet-rarity");

let dataFilteredByStat = petData;
let dataFilteredByRarity = petData;

const rarityToColorClass = {
  Common: "white",
  Rare: "green",
  Epic: "blue",
  Legendary: "purple",
  Mythic: "orange",
  Arcane: "red",
  Heroic: "cyan",
};

petStat.addEventListener("change", (e) => {
  const stat = e.target.value;
  if (stat === "") {
    dataFilteredByStat = petData;
    displayPets(dataFilteredByRarity);
  } else {
    dataFilteredByStat = petData.filter((pet) => {
      return pet.stats[stat] !== undefined;
    });
    const dataToDisplay = dataFilteredByRarity.filter((pet) => {
      return pet.stats[stat] !== undefined;
    });

    displayPets(dataToDisplay);
  }
});
petRarity.addEventListener("change", (e) => {
  const rarity = e.target.value;
  if (rarity === "") {
    dataFilteredByRarity = petData;
    displayPets(dataFilteredByStat);
  } else {
    dataFilteredByRarity = petData.filter((pet) => {
      return pet.rarity === rarity;
    });
    const dataToDisplay = dataFilteredByStat.filter((pet) => {
      return pet.rarity === rarity;
    });

    displayPets(dataToDisplay);
  }
});
const initializeStatsDropdown = () => {
  const stats = [];
  for (const pet of petData) {
    for (const stat in pet.stats) {
      if (!stats.includes(stat)) {
        stats.push(stat);
      }
    }
  }
  stats.sort();
  for (const stat of stats) {
    const option = document.createElement("option");
    option.value = stat;
    option.classList = "text-slate-950";
    option.textContent = stat.replace(/_/g, " ").toLocaleUpperCase();
    petStat.appendChild(option);
  }
};
const displayPets = (pets) => {
  petContainer.innerHTML = "";
  for (const pet of pets) {
    const color = rarityToColorClass[pet.rarity];
    const container = document.createElement("div");
    const petName = document.createElement("p");
    const petStats = document.createElement("ul");
    if (color === "white") {
      container.className = `ring-2 ring-${color}/50 w-full rounded-md h-[200px]`;
      petName.className = `text-2xl text-center py-2 text-slate-900 bg-${color}`;
    } else {
      container.className = `ring-2 ring-${color}-600/50 w-full rounded-md h-[200px]`;
      petName.className = `text-2xl text-center py-2 text-white bg-${color}-600`;
    }
    Object.entries(pet.stats).map(([key, value]) => {
      const li = document.createElement("li");
      li.innerHTML = `${key.replace(
        /_/g,
        " "
      )}: <span class='text-amber-500'>${value}</span>`;
      petStats.appendChild(li);
    });
    petStats.className = `py-1 px-2 text-white text-sm`;
    petName.textContent = pet.name;
    container.appendChild(petName);
    container.appendChild(petStats);
    petContainer.appendChild(container);
  }
};

initializeStatsDropdown();
displayPets(petData);
