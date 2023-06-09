const httpStatusCodes = require('http-status-code');
const user = require('../models/user.model');



const bcrypt = require('bcrypt');
const saltRounds = 10;

// This will be auto generated and added to users account on creation

const API_KEY = "67945731797be1APIKEy";

class UserController{
    getAll =  (req, res)=> {

        const apiKey = req.header("x-api-key");

        if (!apiKey || apiKey !== API_KEY) {
            return res.status(401).json({ message: "Unauthorized Access, Route Requires API Key" });
        }

        user.find().then(docs=>{
            return res.status(200).send(docs)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }

    register = (req, res) =>{      


        const body = req.body;        
        console.log(body);
        const hash = bcrypt.hashSync(body.password, saltRounds);
        const body2 = { email: body.email, password: hash };
        user.create(body2).then(docs => {
            return res.status(201).send(docs);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        })
    }
      
    login = (req, res) => {
        const body = req.body;
        user.findOne({ email: body.email }).then((user) => {
          if (!user) {
            return res.status(404).send({ message: 'User not found' });
          }
      
          bcrypt.compare(body.password, user.password, (err, result) => {
            if (err) {
              return res.status(500).send({ message: 'Error comparing passwords' });
            }
      
            if (result) {
              // Passwords match, user is authenticated
              // You can generate a token or session here
              return res.status(200).send({ message: 'Login successful' });
            } else {
              // Passwords do not match
              return res.status(401).send({ message: 'Invalid credentials' });
            }
          });
        }).catch((err) => {
          return res.status(500).send({ message: err });
        });
      };
      

    create = async (req, res)=>{       

        const body = req.body;
        user.findOne({ email: body.email }).then((user) => {
          if (!user) {
            return res.status(404).send({ message: 'User not found' });
          }
      
          bcrypt.compare(body.password, user.password, (err, result) => {
            if (err) {
              return res.status(500).send({ message: 'Error comparing passwords' });
            }
      
            if (result) {
              // Passwords match, user is authenticated
              // You can generate a token or session here
              return res.status(200).send({ message: 'Login successful' });
            } else {
              // Passwords do not match
              return res.status(401).send({ message: 'Invalid credentials' });
            }
          });
        }).catch((err) => {
          return res.status(500).send({ message: err });
        });
       
    }
}

module.exports = UserController;