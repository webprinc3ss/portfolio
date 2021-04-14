//Projects Data Template
const projectsData = [
    {
        id: 1,
        name: "Mustfit Pets",
        shortDescription: "MERN SPA, React, MongoDB, Graphql, Node.js",
        type: "Fullstack Group Project",
        description: "Don't let Fido or Fluffy languish at the shelter! Full stack application to match harder-to-adopt pets with potential owners. Shelter staff can submit pets for adoption. Adopters can search for pets and save pets to their dashboard. Pets can be removed from your dashboard.",
        technologies: ["React", "MongoDB", "Graphql", "Nodejs", "Mongoose", "Apollo Client", "PWA", "BCrypt", "JWT Token", "Heroku", "Atlas"],
        deployed: "https://quiet-refuge-60774.herokuapp.com/",
        github: "https://github.com/calistamayer/pet-adoption",
        photo: "mustfit.jpg"
    },
    {
        id: 2,
        name: "The Tech Blog",
        shortDescription: "MVC CMS, Handlebars, Node, Express, ORM, CSS",
        type: "Fullstack Self-Made Project",
        description: "Need a personal place to blog about tech? A full stack CMS blog designed in the MVC paradigm. Users sign up and log in. Post, update and delete blog posts. Comment on posts. Password encrypted. SQL storage.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "Express", "Handlebars", "MySql2", "BCrypt", "Dotenv", "Heroku"],
        deployed: "https://morning-inlet-04483.herokuapp.com/",
        github: "https://github.com/webprinc3ss/tech-blog",
        photo: "tech_blog_ss.jpg"
    },
    {
        id: 3,
        name: "The Adventure Series",
        shortDescription: "MVC CMS, Handlebars, Node, OAuth, Express, ORM, CSS",
        type: "Fullstack Group Project",
        description: "Set off on a bike adventure! Full Stack MVC project. An MVP of a bike adventure site where competitors can submit their rides and the admin can post to a leaderboard. Log in with Strava.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "Express", "Handlebars", "MySql2", "Passport", "Passport-Strava", "Cookie Parser", "Connect-Session-Sequelize", "Connect-Ensure-Login", "Dotenv", "Heroku"],
        deployed: "https://damp-anchorage-73357.herokuapp.com/",
        github: "https://github.com/webprinc3ss/the-adventure-series",
        photo: "adventure_series.jpg"
    },
    {
        id: 4,
        name: "Weather App",
        shortDescription: "Server Side API's, JavaScript, Bootstrap, CSS, HTML",
        type: "Frontend Personal Project",
        description: "Planning a trip? Compare weather in your destination cities! Save up to seven cities - alphabetically descending in Local Storage and displayed on the page.",
        technologies: ["JavaScript", "CSS", "HTML", "Bootstrap", "Open Weather Map API"],
        deployed: "https://webprinc3ss.github.io/weather-dashboard/",
        github: "https://github.com/webprinc3ss/weather-dashboard",
        photo: "redrock.jpg"
    },
    {
        id: 5,
        name: "The Living Room",
        shortDescription: "JQuery, Materialize, Server-side API's, HTML",
        type: "Frontend Group Project",
        description: "Stuck in Covid lockdown with nothing fun to do? Family activities including reading a book from the Gutenberg Library, laughing at Dad jokes or playing trivia.",
        technologies: ["JavaScript", "CSS", "HTML", "JQuery", "Materialize CSS", "Three Server-side API's"],
        deployed: "https://yooperjb.github.io/Living-Room/",
        github: "https://github.com/yooperjb/Living-Room",
        photo: "couch.jpg"
    },
    {
        id: 6,
        name: "The Social Network",
        shortDescription: "RESTful API, Node.js, Express, Mongoose",
        type: "Backend-only API Personal Project",
        description: "Backend only - API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friends list.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "Express", "Handlebars", "MySql2", "Passport", "Passport-Strava", "Cookie Parser", "Connect-Session-Sequelize", "Connect-Ensure-Login", "Dotenv", "Heroku"],
        deployed: "",
        github: "https://github.com/webprinc3ss/social-network",
        photo: "social_screenshot.jpg"
    },
    {
        id: 7,
        name: "Code Quiz",
        shortDescription: "HTML, CSS, JavaScript",
        type: "Frontend Personal Project",
        description: "Test your knowledge of JavaScript! The quiz uses a timer that will subtract or add points based on correct/wrong answers. High Scores saved to local storage. Clear leaderboard as needed.",
        technologies: ["JavaScript", "CSS", "HTML"],
        deployed: "https://webprinc3ss.github.io/code-quiz/",
        github: "https://github.com/webprinc3ss/code-quiz",
        photo: "codequiz_screenshot.png"
    },
    {
        id: 8,
        name: "Budget Tracker",
        shortDescription: "HTML, CSS, JavaScript",
        type: "Fullstack Refactor Project",
        description: "A budget tracker for the traveler to keep track of expenses with or without a data connection. Refactored saved as a PWA to one's device with web manifest.",
        technologies: ["JavaScript", "CSS", "HTML", "Nodejs", "webpack", "Express", "MongoDB", "Mongoose", "Heroku", "Service Worker", "PWA"],
        deployed: "https://secure-wave-10455.herokuapp.com/",
        github: "https://github.com/webprinc3ss/budget-tracker",
        photo: "budget_tracker.png"
    },
    {
        id: 9,
        name: "Carolyn Bryant CPA",
        shortDescription: "Custom WordPress",
        type: "Paid Freelance Project",
        description: "A new accountant in her town desperately needed a web presence before tax season.  Already she has gained clients thanks to the form!",
        technologies: ["Mobile-responsive", "CSS", "HTML", "WordPress", "SMTP", "PhotoShop"],
        deployed: "https://www.carolynbryantcpa.com/",
        github: "",
        photo: "cpa.jpg"
    },
];

function techs(techs) {
    let techString = techs.map(tech => `${tech}, `).join("");
    cleanString = techString.replace(/,\s*$/, "");
    return `<b>Technologies:</b> ${cleanString}`;
};

function projectsTemplate(project) {
    return `
                        <div class="work-grid-item" id="work-grid-item--${project.id}">
                            <div class="ani-container">
                                <img src="assets/images/${project.photo}" alt="${project.name}" class="ani-image work-img">
                                <div class="ani-text middle modal-button" href="#myModal${project.id}">
                                    ${project.name}<br />
                                    <span class="ani-mini-text" href="#myModal${project.id}">  
                                    ${project.shortDescription}
                                    </span>
                                </div>
                            </div>
                        </div>  
                        <!-- Modal content -->
                <div id="myModal${project.id}" class="modal">
                    <div class="modal-content">
                            <div class="modal-header">
                                <span class="closeBtn">&times;</span>
                                <h2>${project.name}</h2>
                            </div>
                            <div class="modal-body">
                                <p><b>Description:</b><br />${project.description}</p><br />
                                <p>${techs(project.technologies)}</p>
                            </div>
                            <div class="modal-footer">
                                <h6>
                                 ${project.deployed ? ("<a class='linked' href=" + project.deployed + " target=' _new'>View Site</a>") : ""}
                                 ${project.deployed && project.github ? (" | ") : ""}
                                 ${project.github ? ("<a class='linked' href=" + project.github + " target=' _new'>See Github</a>") : ""}
                                </h6 >
                            </div >
                     </div >
                </div >
        `;
}

document.getElementById("app").innerHTML = `
    ${projectsData.map(projectsTemplate).join("")}
    `;
//End Projects Data Template

// Get the button that opens the modal
var btn = document.querySelectorAll("div.modal-button", "span.ani-mini-text");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("closeBtn");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (var index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
//End Modal Popup Code
