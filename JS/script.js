// Players data 
let players = [
    {
      name: "Lionel Messi",
      photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
      position: "RW",
      nationality: "Argentina",
      flag: "https://cdn.sofifa.net/flags/ar.png",
      club: "Inter Miami",
      logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
      rating: 93,
      pace: 85,
      shooting: 92,
      passing: 91,
      dribbling: 95,
      defending: 35,
      physical: 65,
    },
    {
      name: "Cristiano Ronaldo",
      photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
      position: "ST",
      nationality: "Portugal",
      flag: "https://cdn.sofifa.net/flags/pt.png",
      club: "Al Nassr",
      logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
      rating: 91,
      pace: 84,
      shooting: 94,
      passing: 82,
      dribbling: 87,
      defending: 34,
      physical: 77,
    },
    {
      name: "Kevin De Bruyne",
      photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
      position: "CM",
      nationality: "Belgium",
      flag: "https://cdn.sofifa.net/flags/be.png",
      club: "Manchester City",
      logo: "https://cdn.sofifa.net/flags/be.png",
      rating: 91,
      pace: 74,
      shooting: 86,
      passing: 93,
      dribbling: 88,
      defending: 64,
      physical: 78,
    },
    {
      name: "Kylian Mbappé",
      photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
      position: "ST",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 92,
      pace: 97,
      shooting: 89,
      passing: 80,
      dribbling: 92,
      defending: 39,
      physical: 77,
    },
    {
      name: "Virgil van Dijk",
      photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
      position: "CB",
      nationality: "Netherlands",
      flag: "https://cdn.sofifa.net/flags/nl.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 90,
      pace: 75,
      shooting: 60,
      passing: 70,
      dribbling: 72,
      defending: 92,
      physical: 86,
    },
    {
      name: "Antonio Rudiger",
      photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
      position: "CB",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 88,
      pace: 82,
      shooting: 55,
      passing: 73,
      dribbling: 70,
      defending: 86,
      physical: 86,
    },
    {
      name: "Neymar Jr",
      photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
      position: "LW",
      nationality: "Brazil",
      flag: "https://cdn.sofifa.net/flags/br.png",
      club: "Al-Hilal",
      logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
      rating: 90,
      pace: 91,
      shooting: 83,
      passing: 86,
      dribbling: 94,
      defending: 37,
      physical: 61,
    },
    {
      name: "Mohamed Salah",
      photo:
        "https://imgs.search.brave.com/U0GsfmLmrCkU8yqQPMFuf1D_oOExTbrczeot-Oo-Aws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0d2l6LmNvbS9h/c3NldHMvaW1nL2Zp/ZmEyMS9mYWNlcy8y/MDkzMzEucG5n",
      position: "RW",
      nationality: "Egypt",
      flag: "https://cdn.sofifa.net/flags/eg.png",
      club: "Liverpool",
      logo: "https://cdn.sofifa.net/meta/team/8/120.png",
      rating: 89,
      pace: 93,
      shooting: 87,
      passing: 81,
      dribbling: 90,
      defending: 45,
      physical: 75,
    },
    {
      name: "Joshua Kimmich",
      photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
      position: "CM",
      nationality: "Germany",
      flag: "https://cdn.sofifa.net/flags/de.png",
      club: "Bayern Munich",
      logo: "https://cdn.sofifa.net/meta/team/503/120.png",
      rating: 89,
      pace: 70,
      shooting: 75,
      passing: 88,
      dribbling: 84,
      defending: 84,
      physical: 81,
    },
    {
      name: "Jan Oblak",
      photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
      position: "GK",
      nationality: "Slovenia",
      flag: "https://cdn.sofifa.net/flags/si.png",
      club: "Atletico Madrid",
      logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
      rating: 91,
      diving: 89,
      handling: 90,
      kicking: 78,
      reflexes: 92,
      speed: 50,
      positioning: 88,
    },
    {
      name: "Luka Modrić",
      photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
      position: "CM",
      nationality: "Croatia",
      flag: "https://cdn.sofifa.net/flags/hr.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 88,
      pace: 74,
      shooting: 78,
      passing: 89,
      dribbling: 90,
      defending: 72,
      physical: 65,
    },
    {
      name: "Vinicius Junior",
      photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
      position: "LW",
      nationality: "Brazil",
      flag: "https://cdn.sofifa.net/flags/br.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 89,
      pace: 91,
      shooting: 88,
      passing: 85,
      dribbling: 94,
      defending: 39,
      physical: 61,
    },
    {
      name: "Brahim Diáz",
      photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
      position: "LW",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Real Madrid",
      logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
      rating: 82,
      pace: 85,
      shooting: 74,
      passing: 78,
      dribbling: 85,
      defending: 31,
      physical: 56,
    },
    {
      name: "Karim Benzema",
      photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
      position: "ST",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Al-Ittihad",
      logo: "https://cdn.sofifa.net/meta/team/476/120.png",
      rating: 90,
      pace: 77,
      shooting: 90,
      passing: 83,
      dribbling: 88,
      defending: 40,
      physical: 78,
    },
    {
      name: "Erling Haaland",
      photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      position: "ST",
      nationality: "Norway",
      flag: "https://cdn.sofifa.net/flags/no.png",
      club: "Manchester City",
      logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
      rating: 91,
      pace: 89,
      shooting: 94,
      passing: 65,
      dribbling: 80,
      defending: 45,
      physical: 88,
    },
    {
      name: "N'Golo Kanté",
      photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
      position: "CDM",
      nationality: "France",
      flag: "https://cdn.sofifa.net/flags/fr.png",
      club: "Al-Ittihad",
      logo: "https://cdn.sofifa.net/meta/team/476/120.png",
      rating: 87,
      pace: 77,
      shooting: 66,
      passing: 75,
      dribbling: 82,
      defending: 88,
      physical: 82,
    },
    {
      name: "Alphonso Davies",
      photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
      position: "LB",
      nationality: "Canada",
      flag: "https://cdn.sofifa.net/flags/ca.png",
      club: "Bayern Munich",
      logo: "https://cdn.sofifa.net/meta/team/503/120.png",
      rating: 84,
      pace: 96,
      shooting: 68,
      passing: 77,
      dribbling: 82,
      defending: 76,
      physical: 77,
    },
    {
      name: "Yassine Bounou",
      photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
      position: "GK",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Al-Hilal",
      logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
      rating: 84,
      diving: 81,
      handling: 82,
      kicking: 77,
      reflexes: 86,
      speed: 38,
      positioning: 83,
    },
    {
      name: "Bruno Fernandes",
      photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
      position: "CM",
      nationality: "Portugal",
      flag: "https://cdn.sofifa.net/flags/pt.png",
      club: "Manchester United",
      logo: "https://cdn.sofifa.net/meta/team/14/120.png",
      rating: 88,
      pace: 75,
      shooting: 85,
      passing: 89,
      dribbling: 84,
      defending: 69,
      physical: 77,
    },
    {
      name: "Jadon Sancho",
      photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
      position: "LW",
      nationality: "England",
      flag: "https://cdn.sofifa.net/flags/gb-eng.png",
      club: "Manchester United",
      logo: "https://cdn.sofifa.net/meta/team/14/120.png",
      rating: 84,
      pace: 85,
      shooting: 74,
      passing: 78,
      dribbling: 88,
      defending: 34,
      physical: 63,
    },
    {
      name: "Trent Alexander-Arnold",
      photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
      position: "RB",
      nationality: "England",
      flag: "https://cdn.sofifa.net/flags/gb-eng.png",
      logo: "https://cdn.sofifa.net/flags/gb-eng.png",
      club: "Liverpool",
      rating: 87,
      pace: 76,
      shooting: 66,
      passing: 89,
      dribbling: 80,
      defending: 79,
      physical: 71,
    },
    {
      name: "Achraf Hakimi",
      photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
      position: "RB",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Paris Saint-Germain",
      logo: "https://cdn.sofifa.net/meta/team/591/120.png",
      rating: 84,
      pace: 91,
      shooting: 76,
      passing: 80,
      dribbling: 80,
      defending: 75,
      physical: 78,
    },
    {
      name: "Youssef En-Nesyri",
      photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
      position: "ST",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Fenerbahçe",
      logo: "https://cdn.sofifa.net/meta/team/88/120.png",
      rating: 83,
      pace: 82,
      shooting: 82,
      passing: 63,
      dribbling: 77,
      defending: 36,
      physical: 80,
    },
    {
      name: "Noussair Mazraoui",
      photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
      position: "LB",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "Manchester United",
      logo: "https://cdn.sofifa.net/meta/team/14/120.png",
      rating: 81,
      pace: 78,
      shooting: 66,
      passing: 77,
      dribbling: 83,
      defending: 77,
      physical: 71,
    },
    {
      name: "Ismael Saibari",
      photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
      position: "CM",
      nationality: "Morocco",
      flag: "https://cdn.sofifa.net/flags/ma.png",
      club: "PSV",
      logo: "https://cdn.sofifa.net/meta/team/682/120.png",
      rating: 83,
      pace: 89,
      shooting: 78,
      passing: 80,
      dribbling: 86,
      defending: 55,
      physical: 84,
    },
    {
      name: "Gianluigi Donnarumma",
      photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
      position: "GK",
      nationality: "Italy",
      flag: "https://cdn.sofifa.net/flags/it.png",
      club: "Paris Saint-Germain",
      logo: "https://cdn.sofifa.net/meta/team/591/120.png",
      rating: 89,
      diving: 88,
      handling: 84,
      kicking: 75,
      reflexes: 90,
      speed: 50,
      positioning: 85,
    },
  ];

  let currentSquad = [];

  let filteredPlayers = players;

let exists = null;

let playerList = document.querySelector(".players_list");

let modal_title = document.getElementById("modal_title");

let playerForm = document.getElementById("playerForm");

let createPlayerPopUp = document.getElementById("createPopUp");

const openListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", true);
};

const closeListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", false);
};

const onOpenCreatePlayer = () => {
  createPlayerPopUp.toggleAttribute("open", true);
};

const onCloseCreatePlayer = () => {
  createPlayerPopUp.toggleAttribute("open", false);
};

const checkPlaceholders = () => {
  document.querySelectorAll(".placeholder_player").forEach((ele) => {
    ele.onclick = () => {
      const targetPosition = ele;
      modal_title.textContent = "Remplacement";
      filteredPlayers = players.filter(
        (player) =>
          player.position === targetPosition.id &&
          !currentSquad.some((active) => active.name === player.name)
      );
      openListPlayers();
      renderListPlayers(targetPosition);
    };
  });
};

checkPlaceholders();

const seeDetails = (playerName) => {
  let player_details = document.getElementById("player_details");
  player_details.toggleAttribute("open");

  modal_title.textContent = "Player Details";

  const detailsPlayer = players.filter(
    (pl) => pl.name.split(" ")[0] === playerName.split(" ")[0]
  );

  let badge = "badge_gold.webp";

  const cardDetails = `
    <div class="cursor-pointer bg-slate-800 rounded-lg p-4">
        <div class="flex justify-between items-center pe-5 mb-2">
            <img src="./Assets/plus-512.webp" class="rotate-45 w-6" onclick="closeDetails()" >
        </div>
        <div class="flex items-center">
            <img src=${detailsPlayer[0].photo} alt="" class="me-4 w-24 lg:w-32 rounded-lg" />
            <div class="flex-grow">
                <div class="flex justify-between items-center pe-5 mb-2">
                    <h3 class="font-bold text-xl text-white">${detailsPlayer[0].name}</h3>
                    <div class="flex gap-x-2">
                        ${detailsPlayer[0].flag ? `<img src=${detailsPlayer[0].flag} class="w-7 rounded-full" >` : ""}
                        ${detailsPlayer[0].logo ? `<img src=${detailsPlayer[0].logo} class="w-7 rounded-full" >` : ""}
                    </div>
                </div>
                <div class="mb-2">
                    <span class="font-bold text-slate-300">${detailsPlayer[0].position}</span>
                </div>
                <div class="grid grid-cols-3 gap-2 text-[70%] lg:text-[100%]">
                ${
                  detailsPlayer[0].pace
                      ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PAC: <span class="text-white">${detailsPlayer[0].pace}</span></p>`
                      : ""
              }
              ${
                detailsPlayer[0].shooting
                    ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">SHO: <span class="text-white">${detailsPlayer[0].shooting}</span></p>`
                    : ""
            }
            ${
              detailsPlayer[0].passing
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PAS: <span class="text-white">${detailsPlayer[0].passing}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].dribbling
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DRB: <span class="text-white">${detailsPlayer[0].dribbling}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].defending
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DEF: <span class="text-white">${detailsPlayer[0].defending}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].physical
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PHY: <span class="text-white">${detailsPlayer[0].physical}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].diving
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DIV: <span class="text-white">${detailsPlayer[0].diving}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].handling
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">HDL: <span class="text-white">${detailsPlayer[0].handling}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].kicking
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">KICK: <span class="text-white">${detailsPlayer[0].kicking}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].reflexes
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">RFL: <span class="text-white">${detailsPlayer[0].reflexes}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].speed
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">SPD: <span class="text-white">${detailsPlayer[0].speed}</span></p>`
                  : ""
          }
          ${
              detailsPlayer[0].positioning
                  ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">POS: <span class="text-white">${detailsPlayer[0].positioning}</span></p>`
                  : ""
          }
          </div>
            </div>
        </div>
    </div>
`;
  player_details.innerHTML = cardDetails;

  renderListPlayers();
};

  