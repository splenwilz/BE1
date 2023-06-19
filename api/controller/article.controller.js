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
          const results = docs.map(doc => ({
            _id: doc._id,
            name: doc.name,
            heirarchy: doc.heirarchynumber2,
            description: doc.description,
            references: doc.references
          }));
            return res.status(200).send(results)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }
    getContxt =  (req, res)=> {
        const id = req.body.id;
        console.log(id);
        article.find({ _id: id}).then(docs=>{
            // return res.status(200).send(docs)
            const results = docs.map(doc => ({
              _id: doc._id,
              name: doc.name,
              heirarchy: doc.heirarchynumber2,
              description: doc.description,
              references: doc.references
            }));
              return res.status(200).send(results)
        }).catch(err => {
            return res.status(500).send(
                {message: "Internal Server Error"})
        });
    }


    getUpto = async (req, res) => {
        var { id, levelCount } = req.body;
        if (!id) {
          id = "648b24ee4e3c575200802cb6"
        }
      
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
    

    // getUpto = async (req, res) => {
    //   const { id, levelCount } = req.body;
    
    //   try {
    //     let objectIdStartId;
    
    //     // If the ID parameter is not provided, find the topmost ID
    //     if (!id) {
    //       const topMostArticle = await article.findOne().sort({ heirarchynumber2: 1 });
    //       if (!topMostArticle) {
    //         return res.status(404).json({ message: 'No articles found' });
    //       }
    //       objectIdStartId = topMostArticle._id;
    //     } else {
    //       // Validate and convert the provided ID to ObjectId
    //       if (!mongoose.Types.ObjectId.isValid(id)) {
    //         return res.status(400).json({ message: 'Invalid ID' });
    //       }
    //       objectIdStartId = mongoose.Types.ObjectId(id);
    //     }
    
    //     const articleData = await article.findById(objectIdStartId);
    //     if (!articleData) {
    //       return res.status(404).json({ message: 'Article not found' });
    //     }
    
    //     const heirarchynumber2 = articleData.heirarchynumber2;
    //     const updatedLevelCount = heirarchynumber2 + levelCount;
    
    //     article
    //       .find({ _id: { $gte: objectIdStartId }, heirarchynumber2: { $lte: updatedLevelCount } })
    //       .then(docs => {
    //         const results = docs.map(doc => ({
    //           _id: doc._id,
    //           name: doc.name,
    //           heirarchy: doc.heirarchynumber2
    //         }));
    
    //         return res.status(200).json(results);
    //       })
    //       .catch(err => {
    //         console.error(err);
    //         return res.status(500).send({ message: 'Internal Server Error' });
    //       });
    //   } catch (err) {
    //     console.error(err);
    //     return res.status(500).send({ message: 'Internal Server Error' });
    //   }
    // };
    
    

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
            // return res.status(200).send(docs);
            const results = docs.map(doc => ({
              _id: doc._id,
              name: doc.name,
              heirarchy: doc.heirarchynumber2,
              description: doc.description,
              references: doc.references
            }));
              return res.status(200).send(results)
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
    // Get Article By Name
    post = async (req, res) => {
        const id = req.params.id;        
        const postDoc = await article.find({"name" : id });
        res.json(postDoc);
    }

    // Get Ancestors By Id
    getParents = async (req, res) => {
      const { id } = req.body;
  
      try {
        const ancestors = await this.getAncestors(id);
        return res.status(200).json(ancestors);
      } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Server Error' });
      }
    };

    async getAncestors(id, ancestors = []) {
      const articleData = await article.findById(id);
      if (!articleData) {
        return ancestors;
      }
    
      const parent = await article.findOne({ name: articleData.parent });
      if (!parent) {
        return ancestors;
      }
    
      ancestors.unshift({ id: parent._id, name: parent.name, heirarchy: parent.heirarchynumber2 });
      return this.getAncestors(parent._id, ancestors);
    }

    // Get Ancestors By Name
    getParentName = async (req, res) => {
      const { idname } = req.body;
    
      try {
        const ancestors = await this.getParentAncestors(idname);
        return res.status(200).json(ancestors);
      } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Internal Server Error' });
      }
    };
    
    getParentAncestors = async (idname, ancestors = []) => {
      const articleData = await article.findOne({ name: idname });
      if (!articleData) {
        // If articleData is not found, return an empty ancestors array
        return ancestors;
      }
    
      const parent = await article.findOne({ name: articleData.parent });
      if (!parent) {
        // If parent is not found, return the current ancestors array
        return ancestors;
      }
    
      ancestors.unshift({ id: parent._id, name: parent.name, heirarchy: parent.heirarchynumber2 });
      return this.getParentAncestors(parent.name, ancestors);
    };

    // Get the siblings
    getSiblingsByName = async (req, res) => {
      const { name } = req.body;
    
      try {
        // Find the requested article by name
        const articleData = await article.findOne({ name });
        if (!articleData) {
          return res.status(404).json({ message: 'Article not found' });
        }
    
        // Find all the siblings of the requested article
        const siblings = await article.find({ parent: articleData.parent, _id: { $ne: articleData._id } });
        const results = siblings.map(sibling => ({
          _id: sibling._id,
          name: sibling.name,
          heirarchy: sibling.heirarchynumber2
        }));

        return res.status(200).json(results);
        // return res.status(200).json(siblings);
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    };
    
    
    

    
    
    
    
    
    
    
    
    
  



}

module.exports = ArticleController;