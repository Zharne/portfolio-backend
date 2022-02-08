const express = require('express');
const { NotFound } = require('http-errors');
const app = express.Router()

let testimonials = [
   {name: "Alex Sexwale", 
    id: 1, 
    details: "lorem",
    position: "Lecturer at Life Choices",
    img:"https://i.postimg.cc/Nfzq0qRB/Alex.jpg"
},

    {name: "Kyle McBryne", 
    id: 2,
    details: "Zharne is a dedicated,hard-working individual striving for greatness",
    position: "Colleague at Life Choices",
    img:"https://i.postimg.cc/Znxr3DNc/Kyle3.jpg"
 },

    {name: "Amaarah January",
    id: 3, 
    details: "Zharne is a very hard-working individual. She is willing to help others and she is a good team member. Her personality will be a great asset to any work envornment.",
    position: "Colleague at Life Choices",
    img:"https://i.postimg.cc/XJ8JgM2p/Amaarah3.jpg"
},

    {name: "Bongani",
    id: 4,
    details: "lorem",
    position: "Colleague at Life Choices",
    img:"https://i.postimg.cc/NMgGFJgY/Bongani3.jpg"
 },

    {name: "Hannah Dalwai",
    id: 5,
    details: "lorem",
    position: "Colleague at Life Choices",
    img:"https://i.postimg.cc/CLBMx8wd/hannah.jpg"
},

    {name: "Mugammad Breda",
    id: 6,
    details: "lorem",
    position: "Colleague at Life Choices",
    img: "https://i.postimg.cc/RFsCtxrZ/pexels-andrea-piacquadio-3892920.jpg"
}
    
];

// GET ALL TESTIMONIALS
app.get('/', (req, res) => {
    res.send(testimonials);
});

// GET ONE TESTIMONIALS
app.get('/:id', (req, res) => {
    const testimonial = testimonials.find((testimonial) => testimonials.id == req.params.id);
    if (!testimonial) res.status(404).send({ msg: "Testimonial not found" });
    res.send(testimonial);
});

// CREATE A TESTIMONIALS
app.post("/", (req, res) => {
    let { title, desc, stack, img, img_alt, github, live } = req.body;
    if (!title || !desc || !stack || !img || !img_alt || !github || !live)
    res.status(4000).send({ msg: "Not all information sent" }); 
    let newTestimonial = {
        id: testimonial.length + 1,
        title,
        descstack,
        img,
        img_alt,
        github,
        live,
    };
    testimonial.push(newTestimonial);
    res.send(newTestimonial);
});

// UPDATE A TESTIMONIAL
app.put("/:id", (req, res) => {
    // FIND TESTIMONIALS INDEX IN TESTIMONIALS
    let testimonial = testimonials.find((project) => testimonial.id == req.params.id);
    // IF NO TESTIMONIALS NotFound,SEND ERROR
    if (!testimonial) res.status(404).send({ msg: "Testimonial not found" });
    // GET DATA FROM REQUEST BODY
    let { title, desc, stack, img, img_alt, github, live } = req.body

        // write details to testimonials
        if (title) testimonial.title = title;
        if (github) testimonial.github = github;
        if (live) testimonial.live = live;
        if (img) testimonial.img = img;
    
        // Send update testimonials
    
        res.send(testimonial)
    });


// DELETE A TESTIMONIAL
app.delete("/:id", (req, res) => {
    testimonials = testimonials.filter((testimonial) => testimonial.id != req.params.id);
    fixArrayId(testimonials);
    res.send({ msg: "item removed" });
});


module.exports = app;