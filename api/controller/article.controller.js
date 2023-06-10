// const httpStatusCodes = require('http-status-code');
// const article = require('../models/article.model');

// // This will be auto generated and added to users account on creation

// const API_KEY = "67945731797be1APIKEy";

// class ArticleController{
//     getAll =  (req, res)=> {

//         const apiKey = req.header("x-api-key");

//         if (!apiKey || apiKey !== API_KEY) {
//             return res.status(401).json({ message: "Unauthorized Access, Route Requires API Key" });
//         }

//         article.find().then(docs=>{
//             return res.status(200).send(docs)
//         }).catch(err => {
//             return res.status(500).send(
//                 {message: "Internal Server Error"})
//         });
//     }

//     getContext = (req, res)=> {
//         const context = req.body;
//         console.log(context);
//         article.find({"itemgroup": "Continents", "parent": "Earth"}).then(docs=>{
//             return res.status(200).send(docs)
//         }).catch(err => {
//             return res.status(500).send(
//                 {message: "Internal Server Error"})
//         });
//     }
    // getSiblings =  async (req, res)=> {
    //     const body = req.body;
    //     console.log(body);
    //     await article.find(body).then(docs=>{
    //         return res.status(200).send(docs)
    //     }).catch(err => {
    //         return res.status(500).send(
    //             {message: "Internal Server Error"})
    //     });
    // }

//     getContent = (req, res) => {
//         const { context } = req.body; // Extract the 'context' value from the request body
//         article
//           .find({context}) // Use the 'context' value in the query
//           .then(docs => {
//             return res.status(200).send(docs);
//           })
//           .catch(err => {
//             return res.status(500).send({ message: "Internal Server Error" });
//           });
//       };
      

//     add = (req, res)=>{
//         const body = req.body;
//         article.create(body).then(docs => {
//             return res.status(201).send(docs);
//         }).catch(err => {
//             return res.status(500).send({
//                 message: err
//             });
//         })
//     }

//     post = async (req, res) => {
//         const id = req.params.id;
//         console.log(id);
        
//         const postDoc = await article.findById(id);

//         res.json(postDoc);
//     }
// }

// module.exports = ArticleController;


const httpStatusCodes = require('http-status-code');
const article = require('../models/article.model');

// This will be auto generated and added to users account on creation

const API_KEY = "67945731797be1APIKEy";

class ArticleController{
    getAll =  (req, res)=> {

        const apiKey = req.header("x-api-key");

        if (!apiKey || apiKey !== API_KEY) {
            return res.status(401).json({ message: "Unauthorized Access, Route Requires API Key" });
        }

        article.find().then(docs=>{
            return res.status(200).send(docs)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }

    getContext =  (req, res)=> {
        const context = req.body;
        console.log(context);
        article.find(context).then(docs=>{
            return res.status(200).send(docs)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }

    getContent = (req, res) => {
        const { context }  = req.body; // Extract the 'context' value from the request body
        console.log(context);
        article
          .find({context}) // Use the 'context' value in the query
          .then(docs => {
            return res.status(200).send(docs);
          })
          .catch(err => {
            return res.status(500).send({ message: "Internal Server Error" });
          });
      };
      

    add = (req, res)=>{
        const body = req.body;
        article.create(body).then(docs => {
            return res.status(201).send(docs);
        }).catch(err => {
            return res.status(500).send({
                message: err
            });
        })
    }

    getSiblings =  (req, res)=> {
        const body = req.body;
        console.log(body);
        article.find({ "itemgroup": "Planets" }).then(docs=>{
            return res.status(200).send(docs)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }
    post = async (req, res) => {
        const id = req.params.id;
        console.log(id);
        
        const postDoc = await article.findById(id);

        res.json(postDoc);
    }
}

module.exports = ArticleController;