const express = require('express');
const projectRoutes = require("./routes/projectRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const contactRoutes = require('./routes/contactRoutes')

const app = express();
app.use(express.json());

app.use(express.json());

app.get('/',(req, res) => {
    res.send({msg: "Welcome to Zharne's Backend"});
});

app.use("/projects" , projectRoutes);
app.use("/testimonials" , testimonialRoutes);
app.use("/contact" , contactRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening to ${port}`));