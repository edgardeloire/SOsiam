const express =  require('express');
const router  = express.Router();
const passport = require('passport');
const jwt = require ('jsonwebtoken');
const validate = require('express-jsonschema').validate;


const User = require('../models/user');
const UserJsonSchema= require('../models/userJsonSchema');



//  Register page
router.post('/register',validate({body: UserJsonSchema.userJsonSchema}),(req,res,next) => {
   // test POST contain
   if (!req.body.email){
      res.json({success:false,message:"ERROR You must provide an email"})
   }

   let newUser = new User(
      {
         name: req.body.name,
         email: req.body.email,
         username: req.body.username,
         password: req.body.password
      }
   );
   User.addUser(newUser,(err,user)=>
   {
      if(err){
         res.json({success:false,message:"ERROR Unable to register user"});
      } else {
         res.json({success:true,message:"SUCCESS user registred " });
      }
   });
});

router.use(function(err, req, res, next) {

    var responseData;

    if (err.name === 'JsonSchemaValidation') {
        // Log the error however you please
        console.log(err.message);
        // logs "express-jsonschema: Invalid data found"

        // Set a bad request http response status or whatever you want
        res.status(400);

        // Format the response body however you want
        responseData = {
           statusText: 'Bad Request',
           jsonSchemaValidation: true,
           validations: err.validations  // All of your validation information
        };
       res.json( responseData );

    } else {
        // pass error to next error middleware handler
        next(err);
    }
});



//   Authenticate
router.get('/Authenticate',(req,res,next) => {
   res.send('<h1>Authenticate Page');
});

//   profile
router.get('/profile',(req,res,next) => {
   res.send('<h1>profile Page');
});






module.exports=router;
