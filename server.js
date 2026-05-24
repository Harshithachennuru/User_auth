const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Harshi@2006',
    database: 'user_auth'
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/signup',(req,res)=>{
    let email = req.body.email;
    console.log(email);
    let password = req.body.password
    console.log(password);
    let confirmpassword = req.body.confirmpassword;
    if(password == confirmpassword){
        db.query(`insert into users(email,password) values(?,?)`,[email,password],(err,result)=>{
        if(err){
            console.error('Error inserting data into the database:', err);
            res.send('Error inserting data into the database');
            return;
        }
        res.send('User registered successfully');
        })
    } 
    else{
        res.send("Password does not match");
    }  
    
})

app.post('/login',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    db.query(`select * from users where email = ? and password = ?`,[email,password],(err,result)=>{
        if(err){
            console.error('Error querying the database:', err);
            res.send('Error querying the database');
            return;
        }
        if(result.length > 0){
                res.send("logged in successfully");
        }else{
            res.send("invalid credentials");
        }
    })
})