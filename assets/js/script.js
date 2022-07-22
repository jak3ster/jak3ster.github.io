// Portfolio data
const projects = [
    {
        project_name: "Price Compare",
        description:
            "Project 1: Price compare grab the results of searched product using Amazon and Walmart Scrapper API.",
        features:
            "HTML, CSS, JavaScript, jQuery, Bootstrap, Git branching, Agile Development, Server-side APIs",
        link: "https://jak3ster.github.io/Price-Search/",
        github: "https://github.com/jak3ster/Price-Search",
        image: "assets/images/price-compare-demo.png",
        image_hover: "assets//demo//price-compare-demo.gif",
        alt_image: "Screenshot of Price Compare",
        id: "price_compare",
    },
    {
        project_name: "Password Generator",
        description: "JavaScript Password Generator.",
        features: "HTML, CSS",
        link: "https://jak3ster.github.io/My-Password-Generator/",
        github: "https://github.com/jak3ster/My-Password-Generator",
        image: "assets/images/my-password-generator-demo.png",
        image_hover: "assets//demo//my-password-generator-demo.gif",
        alt_image: "Screenshot of Password Generator",
        id: "password_generator",
    },
    {
        project_name: "Timed Code Quiz",
        description: "A timed quiz on HTML/JavaScript that stores high scores.",
        features: "HTML, CSS, JavaScript, jQuery, Bootstrap",
        link: "https://jak3ster.github.io/My-Timed-Code-Quiz/",
        github: "https://github.com/jak3ster/My-Timed-Code-Quiz",
        image: "assets/images/my-timed-code-quiz-demo.png",
        image_hover: "assets//demo//my-timed-code-quiz-demo.gif",
        alt_image: "Screenshot of Code Quiz",
        id: "code_quiz",
    },
    {
        project_name: "Work Day Scheduler",
        description:
            "A simple calendar application that allows a user to save events for each hour of the day.",
        features: "HTML, CSS, jQuery, Bootstrap, Moment.js",
        link: "https://jak3ster.github.io/My-Work-Day-Scheduler/",
        github: "https://github.com/jak3ster/My-Work-Day-Scheduler",
        image: "assets/images/my-work-day-scheduler-demo.png",
        image_hover: "assets//demo//my-work-day-scheduler-demo.gif",
        alt_image: "Screenshot of Work Day Scheduler",
        id: "word_day_scheduler",
    },
    {
        project_name: "Weather Dashboard",
        description: "Weather dashboard that uses an API to retrieve weather data.",
        features:
            "HTML, CSS, Server-side API, JavaScript, jQuery, Bootstrap, Moment.js",
        link: "https://jak3ster.github.io/My-Weather-Dashboard/",
        github: "https://github.com/jak3ster/My-Weather-Dashboard",
        image: "assets/images/my-weather-dashboard-demo.png",
        image_hover: "assets//demo//my-weather-dashboard-demo.gif",
        alt_image: "Screenshot of Weather Dashboard",
        id: "weather_dashboard",
    },
];

var portfolio_row = document.querySelector("#portfolio-row");
var element = "";

projects.forEach((proj) => {
    element += `<div class="col-xs-12 col-sm-12 col-lg-4 mb-4">
                    <div class="card text-center h-100">
                        <img src="${proj.image}" class="card-img-top border-bottom" alt="${proj.alt_image}" />
                        <div class="card-body mb-5 pl-0">
                            <h3>${proj.project_name}</h3>
                            <p class="card-text">${proj.description}</p>
                            <p class="card-text">
                                <small>
                                    Features: ${proj.features}
                                </small>
                            </p>
                            <div class="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
                                <a href="${proj.link}" target="_blank" class="btn mr-2">
                                    <i class="fas fa-laptop-code"></i> Demo</a>
                                <a href="${proj.github}" target="_blank" class="btn">
                                    <i class="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                </div>`;
});

portfolio_row.innerHTML = element;

function hover(element, url) {
    element.setAttribute("src", url);
}

function unhover(element) {
    element.setAttribute("src", url);
}
