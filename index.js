const ejs = require("ejs");
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.use((req, res, next) => {
  console.log("no page found");
  next()
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/services", (req,res)=>{
 const data={
   services:[
   {name:"Group training",Description:"Engage your workforce with dynamic group training sessions designed to foster collaboration, teamwork, and collective growth. Our expert trainers tailor each session to address the specific needs of your organization, delivering interactive and impactful learning experiences that inspire productivity and drive results. Join forces with your colleagues and unlock the full potential of your team through our comprehensive group training programs.",},
   {name:"individual training 4 hours ",Description:"Elevate your skills and expertise with our personalized individual training sessions, meticulously crafted to meet your unique professional development goals. In just four hours, our dedicated trainers will provide focused guidance and hands-on support, empowering you to excel in your role and achieve peak performance. Whether you're looking to master new techniques, enhance your knowledge, or refine your capabilities, our individual training sessions offer a tailored approach to unlock your full potential."},
   {name:" showing and corrective training. Individual or small group of 3 or less",Description:"Experience targeted showing and corrective training designed to address specific areas for improvement and maximize your learning outcomes. Whether you prefer one-on-one attention or thrive in a small group setting, our trainers offer personalized guidance and actionable feedback to refine your skills and overcome challenges. Through a combination of practical demonstrations, constructive critiques, and customized exercises, our showing and corrective training empowers you to overcome obstacles, enhance performance, and achieve lasting success in your professional endeavors.",},
      {name:"mindful mastery",Description:"this course spifically focuses on making your words and how you say things in a professional workplace and presenting yourself with this course we will teach you how to deal with negative interations in the workplace and how to professionally handle the words in response to others in the workspace",},
     ],
   };
   
     res.render("services.ejs",data);
  
});


app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});
app.listen(3000, () => {
  console.log(`AHHHHHH IM BACK IN`);
});