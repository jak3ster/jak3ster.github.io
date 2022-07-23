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
        image: "assets/images/medical-portal.png",
        image_hover: "assets/demo/medical-portal.gif",
        alt_image: "Screenshot of Medical Portal",
        id: "medical_portal",
    },
    {
        project_name: "My Tech Blog",
        description: `A CMS-style blog site similar to a Wordpress site, where developers 
                    can publish their blog posts and comment on other developers’ posts as 
                    well. Site is built completely from scratch and deployed on Heroku and 
                    follows the MVC paradigm in its architectural structure, using Handlebars.js 
                    as the templating language, Sequelize as the ORM, and the express-session 
                    npm package for authentication.`,
        features: `JavaScript, Node.js, MySQL, npm packages: bcrypt, connect-session-sequelize, 
                dotenv, express, express-handlebars, express-session, mysql2, sequelize`,
        link: "https://github.com/jak3ster/My-Tech-Blog/",
        github: "https://jak3ster-techblog.herokuapp.com/",
        image: "assets/images/my-tech-blog.png",
        image_hover: "assets/demo/my-tech-blog.gif",
        alt_image: "Screenshot of My Tech Blog",
        id: "tech_blog",
    },
    {
        project_name: "My ORM Back End",
        description: `A back-end for an e-commerce site using a modifying starter code 
                    and configure a working Express.js API that uses Sequelize to interact 
                    with a MySQL database.`,
        features: `JavaScript, Node.js, MySQL, npm packages: express, sequelize, mysql2, dotenv`,
        link: "https://drive.google.com/file/d/147SxgXKnWxBOA2dynKkdv-qzDa37urxc/view?usp=sharing/",
        github: "https://github.com/jak3ster/My-ORM-Back-End",
        image: "assets/images/my-orm-back-end.png",
        image_hover: "assets/demo/my-orm-back-end.gif",
        alt_image: "Screenshot of My ORM Back End",
        id: "my_orm_back_end",
    },
    {
        project_name: "My Employee Management System",
        description: `A console application Content Management Systems for 
                    managing a company's employees where it can view and 
                    manage the departments, roles, and employees.`,
        features: "JavaScript, Node.js, MySQL, npm packages: Inquirer, Figlet, mysql",
        link: "https://drive.google.com/file/d/1aEthJy32mQkgJQb6WPvvUp8xnub3h3DK/view?usp=sharing/",
        github: "https://github.com/jak3ster/my-employee-management-system/",
        image: "assets/images/my-employee-management-system.png",
        image_hover: "assets/demo/my-employee-management-system.gif",
        alt_image: "Screenshot of My Employee Management System",
        id: "employee_management_system",
    },
    {
        project_name: "My Note Taker",
        description: `This is for users that need to keep track of a lot of information, 
                    it’s easy to forget or be unable to recall something important. Being 
                    able to take persistent notes allows users to have written information 
                    available when needed. The application can be used to write, save, and 
                    delete notes using an express backend and save and retrieve notes data 
                    from a JSON file.`,
        features: "JavaScript, Node.js, Express",
        link: "https://warm-mountain-90845.herokuapp.com/",
        github: "https://github.com/jak3ster/My-Note-Taker/",
        image: "assets/images/my-note-taker.png",
        image_hover: "assets/demo/my-note-taker.gif",
        alt_image: "Screenshot of Note Taker",
        id: "note_taker",
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
    
    // {
    //     project_name: "Weather Dashboard",
    //     description: "Weather dashboard that uses an API to retrieve weather data.",
    //     features:
    //         "HTML, CSS, Server-side API, JavaScript, jQuery, Bootstrap, Moment.js",
    //     link: "https://jak3ster.github.io/My-Weather-Dashboard/",
    //     github: "https://github.com/jak3ster/My-Weather-Dashboard",
    //     image: "assets/images/my-weather-dashboard-demo.png",
    //     image_hover: "assets//demo//my-weather-dashboard-demo.gif",
    //     alt_image: "Screenshot of Weather Dashboard",
    //     id: "weather_dashboard",
    // },
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
