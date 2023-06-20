const httpStatusCodes = require('http-status-code');
const article = require('../models/article.model');
const mongoose = require('mongoose');

// This will be auto generated and added to users account on creation

const API_KEY = "67945731797be1APIKEy";

// Working Version
// async function fetchNestedChildren(parentName, levelCount, hierarchyNumber) {
//   const children = await article.find({ parent: parentName }).exec();

//   if (levelCount && levelCount <= 0) {
//     return [];
//   }

//   const formattedChildren = await Promise.all(
//     children.map(async (child) => {
//       if (child.heirarchynumber2 > hierarchyNumber + levelCount) {
//         return null;
//       }

//       const nestedChildren = await fetchNestedChildren(child.name, levelCount - 1, hierarchyNumber);
//       return {
//         _id: child._id,
//         name: child.name,
//         heirarchynumber2: child.heirarchynumber2,
//         children: nestedChildren,
//       };
//     })
//   );

//   return formattedChildren.filter((child) => child !== null);
// }

async function fetchNestedChildren(parentName, levelCount, hierarchyNumber) {
  const children = await article.find({ parent: parentName }).exec();

  if (levelCount && levelCount <= 0) {
    return [];
  }

  const formattedChildren = await Promise.all(
    children.map(async (child) => {
      if (child.heirarchynumber2 > hierarchyNumber + levelCount) {
        return null;
      }
     
      const nestedChildren = await fetchNestedChildren(child.name, levelCount - 1, hierarchyNumber);
      return {
        _id: child._id,
        name: child.name,
        heirarchynumber2: child.heirarchynumber2,
        children: nestedChildren,
      };
    })
  );

  return formattedChildren.filter((child) => child !== null);
}
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
  
    // Working Version
    // getUpto = async (req, res) => {
    //   try {
    //     const { id, levelCount } = req.body;
    //     const defaultId = "648b24ee4e3c575200802cb6";
    //     const articleData = await article.findById(id || defaultId);
    //     const parentname = articleData.name;
    
    //     const formattedChildren = await fetchNestedChildren(parentname, levelCount, articleData.heirarchynumber2);
    
    //     const result = {
    //       _id: articleData._id,
    //       name: articleData.name,
    //       heirarchynumber2: articleData.heirarchynumber2,
    //       children: formattedChildren,
    //     };
    
    //     return res.status(200).json([result]);
    //   } catch (err) {
    //     console.error(err);
    //     return res.status(500).send({ message: err.message || "Internal Server Error" });
    //   }
    // };

    // getUpto = async (req, res) => {
    //   try {
    //     const { id } = req.body;
    //     var levelCount = req.body.levelCount;
    //     if(levelCount == 1){
    //       levelCount = 1;
    //     }else if(levelCount == 2){
    //       levelCount = 3;
    //     }else if(levelCount == 3){
    //       levelCount = 5
    //     }else if(levelCount == 4){
    //       levelCount = 7
    //     }else if(levelCount == 5){
    //       levelCount = 9
    //     }else if(levelCount == 6){
    //       levelCount = 11
    //     }else if(levelCount == 7){
    //       levelCount = 15
    //     }
    //     const defaultId = "648b24ee4e3c575200802cb6";
    //     const articleData = await article.findById(id || defaultId);
    //     const parentname = articleData.name;
    
    //     const formattedChildren = await fetchNestedChildren(parentname, levelCount, articleData.heirarchynumber2);
    
    //     const result = {
    //       _id: articleData._id,
    //       name: articleData.name,
    //       heirarchynumber2: articleData.heirarchynumber2,
    //       children: formattedChildren,
    //     };
    
    //     return res.status(200).json([result]);
    //   } catch (err) {
    //     console.error(err);
    //     return res.status(500).send({ message: err.message || "Internal Server Error" });
    //   }
    // };

    getUpto = async (req, res) => {
      try {
        const { id, levelCount } = req.body;
        const defaultId = "648b24ee4e3c575200802cb6";
        const articleData = await article.findById(id || defaultId);
        const parentname = articleData.name;
    
        const adjustedLevelCount = levelCount * 2 - 1;
    
        const formattedChildren = await fetchNestedChildren(parentname, adjustedLevelCount, articleData.heirarchynumber2);
    
        const result = {
          _id: articleData._id,
          name: articleData.name,
          heirarchynumber2: articleData.heirarchynumber2,
          children: formattedChildren,
        };
    
        return res.status(200).json([result]);
      } catch (err) {
        console.error(err);
        return res.status(500).send({ message: err.message || "Internal Server Error" });
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
    };

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