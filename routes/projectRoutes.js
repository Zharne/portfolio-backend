const express = require('express');
const { NotFound } = require('http-errors');
const app = express.Router()

let projects = [
    { "title": "Calculator", 
    "id": 1, 
    "details": "lorem", 
    "netlify":"https://objective-morse-89cad5.netlify.app",
    "github":"https://github.com/Zharne/Vue.js-Calculator",
    "img":"https://i.postimg.cc/XN2m5Y7V/calculator-sticker.jpg",
},

    {"title": "E-Commerce website", 
    "id": 2,
    "details": "lorem", 
    "netlify":"https://sad-mahavira-c1592a.netlify.app/",
    "github":"https://github.com/Zharne/new-frontend",
    "img":"",
},

    {"title": "Reaction-timer",
    "id": 3, 
    "details": "lorem", 
    "netlify":"",
    "github":"https://github.com/Zharne/Reaction-timer",
    "img":"",
},

    {"title": "Temperature converter",
    "id": 4,
    "details": "lorem",
    "netlify":"https://romantic-wilson-a4e4c7.netlify.app",
    "github":"https://github.com/Zharne/Temperature-converter",
    "img":"https://i.postimg.cc/T3xsMLtJ/png-transparent-emoji-temperature-celsius-kelvin-fahrenheit-temperature-text-logo-sticker.png",
     },

    {"title": "Bookstore",
    "id": 5,
    "details": "lorem", 
    "netlify":"",
    "github":"https://github.com/Zharne/Book-store",
    "img":"",
},

    {"title": "crud system",
    "id": 6,
    "details": "lorem", 
    "netlify":"https://product-crud-system.netlify.app",
    "github":"https://github.com/Zharne/crud-system-BOOKSTORE-",
    "img":"",
}
    
];
// GET ALL PROJECTS
app.get('/', (req, res) => {
    res.send(projects);
});

// GET ONE PROJECT
app.get('/:id', (req, res) => {
    const project = projects.find((project) => project.id == req.params.id);
    if (!project) res.status(404).send({ msg: "Project not found" });
    res.send(project);
});

// CREATE A PROJECT
app.post("/", (req, res) => {
    let { title, desc, stack, img, img_alt, github, live } = req.body;
    if (!title || !desc || !stack || !img || !img_alt || !github || !live)
    res.status(4000).send({ msg: "Not all information sent" }); 
    let newProject = {
        id: project.length + 1,
        title,
        descstack,
        img,
        img_alt,
        github,
        live,
    };
    project.push(newProject);
    res.send(newProject);
});

// UPDATE A PROJECT
app.put("/:id", (req, res) => {
    // FIND PROJECT INDEX IN PROJECTS
    let project = projects.find((project) => project.id == req.params.id);
    // IF NO PROJECT NotFound,SEND ERROR
    if (!project) res.status(404).send({ msg: "Project not found" });
    // GET DATA FROM REQUEST BODY
    let { title, desc, stack, img, img_alt, github, live } = req.body

        // write details to project
        if (title) project.title = title;
        if (github) project.github = github;
        if (live) project.live = live;
        if (img) project.img = img;
    
        // Send update projects
    
        res.send(project)
    });


// DELETE A PROJECT
app.delete("/:id", (req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({ msg: "item removed" });
});


module.exports = app;