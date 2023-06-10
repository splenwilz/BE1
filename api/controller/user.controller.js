const httpStatusCodes = require('http-status-code');
const user = require('../models/user.model');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = 'wsdefedfesdefefrfgrwaswdwefe';

// This will be auto generated and added to users account on creation

const API_KEY = "67945731797be1APIKEy";

const blacklist = []; // Array to store blacklisted tokens
class UserController{
    getAll =  (req, res)=> {

        // const apiKey = req.header("x-api-key");

        // if (!apiKey || apiKey !== API_KEY) {
        //     return res.status(401).json({ message: "Unauthorized Access, Route Requires API Key" });
        // }

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
            //   jwt.sign({ userId: user._id }, secret, {}, (err, token)=>{
            //     if(err) throw err;
            //     res.cookies('token', token).json('ok');
            //   });

             // Passwords match, user is authenticated
            // const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
            const token = jwt.sign({ userId: user._id, email: user.email }, secret, { expiresIn: '500000000000000000000000000000000000000000000000h' });



            // Set the token as a cookie
            res.cookie('token', token, { httpOnly: true });
            // res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true });


        return res.status(200).send({ token: token });
            //   return res.status(200).send({ message: 'Login successful' });
            } else {
              // Passwords do not match
              return res.status(401).send({ message: 'Invalid credentials' });
            }
          });
        }).catch((err) => {
          return res.status(500).send({ message: err });
        });
    }
      

    create = (req, res)=>{       

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
            //   jwt.sign({ userId: user._id }, secret, {}, (err, token)=>{
            //     if(err) throw err;
            //     res.cookies('token', token).json('ok');
            //   });

             // Passwords match, user is authenticated
            const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

            // Set the token as a cookie
            res.cookie('token', token, { httpOnly: true });
            // res.cookie('token', token, { httpOnly: true, sameSite: 'None', secure: true });


        return res.status(200).send({ token: token });
            //   return res.status(200).send({ message: 'Login successful' });
            } else {
              // Passwords do not match
              return res.status(401).send({ message: 'Invalid credentials' });
            }
          });
        }).catch((err) => {
          return res.status(500).send({ message: err });
        });
       
    }


    profile = (req, res) => {
        const body = req.body;
        const { token } = req.cookies;
      
        jwt.verify(token, secret, (err, info) => {
          if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).json({ error: 'Invalid token' });
          }
      
          console.log('Token info:', info);
          res.json(info);
        });
      
        console.log('Cookies:', req.cookies);
    };



logout = (req, res) => {
  // Retrieve the token from the request cookies
  const token = req.cookies.token;

  // Add the token to the blacklist
  blacklist.push(token);

  // Clear the token cookie
  res.clearCookie('token');

  // Return a response indicating successful logout
  res.json({ message: 'Logout successful' });
}

}

module.exports = UserController;