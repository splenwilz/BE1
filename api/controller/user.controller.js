const httpStatusCodes = require('http-status-code');
const user = require('../models/user.model');

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
        user.create(body).then(docs => {
            return res.status(201).send(docs);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        })
    }
      

    create = (req, res)=>{
        const body = req.body;
        user.create(body).then(docs => {
            return res.status(201).send(docs);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        })
    }
}

module.exports = UserController;