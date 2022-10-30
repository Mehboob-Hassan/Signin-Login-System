const express = require("express")
const path = require('path')
const hbs = require('hbs')
const Employee = require("./models/register")
const e = require("express")
const async = require("hbs/lib/async")
require('./db/connect')
const app =  express()
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Use static path to show index.html
app.use(express.static(path.join(__dirname, 'public')))
// Use Views folder 
app.set('view engine', 'hbs')

// Set tempelates path
const viewsPath = path.join(__dirname, 'tempelates/views');
app.set('views', viewsPath);

// Register hbs partials
const partialsPath = path.join(__dirname, 'tempelates/partials');
hbs.registerPartials(partialsPath);


app.get("/", (req, res)=>{
    res.render("index")
})


app.get("/register", (req, res)=>{
    res.render('register')
})

app.get("/login", (req, res)=>{
    res.render('login')
})

app.post("/login", async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await Employee.findOne({email : email});
    if (userEmail) {
        if(userEmail.password == password){
            res.status(201).render('index')
        }else{
            res.send("Wrong Password...")
        }
       
    }else{
        res.send("Email Does'nt exist...")
    }})




app.post("/register", async(req, res)=>{
    try {
        // console.log(req.body.firstName)
        // res.send(req.body.firstName)


        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){
            const registEmp = new Employee({
                fname : req.body.firstName,
                lname : req.body.lastName,
                email : req.body.email,
                gender : req.body.gender,
                phone : req.body.phone,
                age :  req.body.age,
                password : password,
                cpassword : cpassword
            })

            const registered = await registEmp.save();
            res.status(201).render('index')

        }else{
            res.send("error in credentials..")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, ()=>{
    console.log("Express connected")
})