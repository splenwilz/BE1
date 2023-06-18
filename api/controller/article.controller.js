const httpStatusCodes = require('http-status-code');
const article = require('../models/article.model');
const mongoose = require('mongoose');

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
    getContxt =  (req, res)=> {
        const id = req.body.id;
        console.log(id);
        article.find({ _id: id}).then(docs=>{
            return res.status(200).send(docs)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }

    // getUpto = async (req, res) => {
    //     const { startId, levelCount } = req.body;
      
    //     // Validate and sanitize the input parameters as needed
      
    //     // Check if startId is a valid ObjectId
    //     if (!mongoose.Types.ObjectId.isValid(startId)) {
    //       return res.status(400).json({ message: 'Invalid startId' });
    //     }
      
    //     // Convert startId to ObjectId
    //     const objectIdStartId = mongoose.Types.ObjectId(startId);
      
    //     // Find articles matching the criteria
    //     try {
    //       const docs = await article
    //         .find({ _id: { $gte: objectIdStartId }, hierarchynumber: { $lte: levelCount } })
    //         .select('_id name');
      
        //   const results = docs.map(doc => ({
        //     _id: doc._id,
        //     name: doc.name,
        //   }));
      
    //       return res.status(200).json(results);
    //     } catch (err) {
    //       console.error(err);
    //       return res.status(500).json({ message: 'Internal Server Error' });
    //     }
    //   };
      
    
// Dependency = _id : { $gte: context }, 
    // getUpto = async (req, res) => {
    //     const context = req.body.id;
    //     const levelCount = req.body.heirarchynumber2;
    //     console.log(context);
    //     article
    //     .find({_id : { $gte: context }, "heirarchynumber2":{ $lte: levelCount } }).then(docs=>{
    //         const results = docs.map(doc => ({
    //         _id: doc._id,
    //         name: doc.name,
    //         heirarchy: doc.heirarchynumber2
    //       }));
    //       return res.status(200).json(results);
    //     }).catch(err => {
    //         return res.status(500).send(
    //             {message: "Internal Server Error"})
    //     });
    // };

    getUpto = async (req, res) => {
        const { id, levelCount } = req.body;
      
        try {
          const articleData = await article.findById(id);
          const heirarchynumber2 = articleData.heirarchynumber2;
          const updatedLevelCount = heirarchynumber2 + levelCount;
      
          article
            .find({ _id: { $gte: id }, heirarchynumber2: { $lte: updatedLevelCount } })
            .then(docs => {
              const results = docs.map(doc => ({
                _id: doc._id,
                name: doc.name,
                heirarchy: doc.heirarchynumber2
              }));
      
              return res.status(200).json(results);
            })
            .catch(err => {
              console.error(err);
              return res.status(500).send({ message: "Internal Server Error" });
            });
        } catch (err) {
          console.error(err);
          return res.status(500).send({ message: "Internal Server Error" });
        }
    };

    getUpto1 = async (req, res) => {
        const { id, levelCount } = req.body;
      
        try {
          const articleData = await article.findById(id);
          const heirarchynumber2 = articleData.heirarchynumber2;
          const updatedLevelCount = heirarchynumber2 + levelCount;
      
          article
            .find({ _id: { $gte: id }, heirarchynumber2: { $lte: updatedLevelCount } })
            .then(docs => {
              const results = docs.map(doc => ({
                _id: doc._id,
                name: doc.name,
                heirarchy: doc.heirarchynumber2
              }));
      
              return res.status(200).json(results);
            })
            .catch(err => {
              console.error(err);
              return res.status(500).send({ message: "Internal Server Error" });
            });
        } catch (err) {
          console.error(err);
          return res.status(500).send({ message: "Internal Server Error" });
        }
    };
    getUpto2 = async (req, res) => {
        const { id, levelCount } = req.body;
      
        try {
          const articleData = await article.findById(id);
          const heirarchynumber2 = articleData.heirarchynumber2;
          const updatedLevelCount = heirarchynumber2 + levelCount;
      
          article
            .find({ _id: { $gt: id }, heirarchynumber2: { $lte: updatedLevelCount } })
            .then(docs => {
              const results = docs.map(doc => ({
                _id: doc._id,
                name: doc.name,
                heirarchy: doc.heirarchynumber2
              }));
      
              return res.status(200).json(results);
            })
            .catch(err => {
              console.error(err);
              return res.status(500).send({ message: "Internal Server Error" });
            });
        } catch (err) {
          console.error(err);
          return res.status(500).send({ message: "Internal Server Error" });
        }
    };
      

      
    
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
    post = async (req, res) => {
        const id = req.params.id;
        console.log(id);
        
        // const postDoc = await article.findById(id);
        const postDoc = await article.find({"name" : id });

        console.log(postDoc);

        res.json(postDoc);
    }
}

module.exports = ArticleController;