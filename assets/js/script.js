// Portfolio data
const projects = [
    {
        project_name: "Medical Portal",
        description:
            `Project 2: A CMS-style user login portal, where patients can secure access 
            to view personal health information from anywhere with an Internet connection. 
            Using a secure username and password, patients can view health information 
            such as: Recent doctor visits. Discharge summaries including chat message.`,
        features:
            `JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, dotenv
            express, express-handlebars, express-session, mysql2, sequelize, moment, socket.io`,
        link: "https://medicalportalgroup2.herokuapp.com/",
        github: "https://github.com/jak3ster/Medical-Portal/",
        image: "assets/images/medical-portal-demo.png",
        image_hover: "assets/demo/medical-portal-demo.gif",
        alt_image: "Screenshot of Medical Portal",
        id: "medical_portal",
    },
    {
        project_name: "My ORM Back End",
        description: `A back-end for an e-commerce site using a modifying starter code 
                    and configure a working Express.js API that uses Sequelize to interact 
                    with a MySQL database.`,
        features: `JavaScript, Node.js, MySQL, npm packages: express, sequelize, mysql2, dotenv`,
        link: "https://drive.google.com/file/d/147SxgXKnWxBOA2dynKkdv-qzDa37urxc/view?usp=sharing/",
        github: "https://github.com/jak3ster/My-ORM-Back-End",
        image: "assets/images/my-orm-back-end-demo.png",
        image_hover: "assets/demo/my-orm-back-end-demo.gif",
        alt_image: "Screenshot of My ORM Back End",
        id: "my_orm_back_end",
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
        project_name: "Updated Portfolio #1",
        description: "This is an updated portfolio as part of building toward being employer-competitive.",
        features: "HTML, CSS, Bootstrap, JavaScript",
        link: "https://jak3ster.github.io/My-Updated-Porfolio-Page/",
        github: "https://github.com/jak3ster/My-Updated-Porfolio-Page/",
        image: "assets/images/my-updated-portfolio-page.png",
        image_hover: "assets/demo/my-updated-portfolio-page.gif",
        alt_image: "Screenshot of Updated Portfolio #1",
        id: "updated_portfolio",
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
