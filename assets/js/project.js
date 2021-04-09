//Begin Modal Popup Code
//Get modal Element
var modal = document.getElementById('simpleModal');
//Get open Modal Button
var modalBtn = document.getElementById('modalBtn');
//Get close Btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open Modal
function openModal() {
    modal.style.display = 'block';
};
//Function to close Modal
function closeModal() {
    modal.style.display = 'none';
};
//Function to close Modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};
//End Modal Popup Code

const projectsData = [
    {
        id: 1,
        name: "Mustfit Pets",
        shortDescription: "MERN SPA",
        type: "Fullstack Group Project",
        description: "Full stack application to match harder-to-adopt pets with potential owners. Shelter staff can submit pets for adoption. Adopters can search for pets and save pets to their dashboard. Pets can be removed from your dashboard.",
        technologies: ["React", "MongoDB", "Graphql", "Nodejs", "Mongoose", "Apollo Client", "PWA", "BCrypt", "JWT Token", "Heroku", "Atlas"],
        deployed: "https://quiet-refuge-60774.herokuapp.com/",
        github: "https://github.com/calistamayer/pet-adoption",
        photo: "mustfit.jpg"
    },
    {
        id: 2,
        name: "The Tech Blog",
        shortDescription: "MVC CMS",
        type: "Fullstack Self-Made Project",
        description: "A full stack CMS blog designed in the MVC paradigm. Users sign up and log in. Post, update and delete blog posts. Comment on posts. Password encrypted. SQL storage.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "Express", "Handlebars", "MySql2", "BCrypt", "Dotenv", "Heroku"],
        deployed: "https://morning-inlet-04483.herokuapp.com/",
        github: "https://github.com/webprinc3ss/tech-blog",
        photo: "tech_blog_ss.jpg"
    },
    {
        id: 3,
        name: "The Adventure Series",
        shortDescription: "MVC CMS",
        type: "Fullstack Group Project",
        description: "Full Stack MVC project. An MVP of a bike adventure site where competitors can submit their rides and the admin can post to a leaderboard. Log in with Strava.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "Express", "Handlebars", "MySql2", "Passport", "Passport-Strava", "Cookie Parser", "Connect-Session-Sequelize", "Connect-Ensure-Login", "Dotenv", "Heroku"],
        deployed: "https://damp-anchorage-73357.herokuapp.com/",
        github: "https://github.com/webprinc3ss/the-adventure-series",
        photo: "adventure_series.jpg"
    },
];

function techs(techs) {
    return `
<b>Technologies:</b> ${techs.map(tech => `${tech},`).join(", ")}
  `;
}

function projectsTemplate(project) {
    return `
      <div class="animal">
      <img class="pet-photo" src="${pet.photo}">
      <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
      <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
      ${pet.favFoods ? foods(pet.favFoods) : ""}
      </div>
    `;
}

document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    ${petsData.map(petTemplate).join("")}
    <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
  `;
