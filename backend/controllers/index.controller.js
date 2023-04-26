const { validationResult } = require('express-validator');

const Userdb = require('../models/model')

exports.getUser = async (req,res) => {
  const data = await Userdb.find()
  try {
      res.json(data)
  } catch (error) {
    console.log(error);
    
  }
}


exports.signup = async (req, res) => {
  const errors = validationResult(req);
  const file = req.file;
  try {
    if (!errors.isEmpty()) {
      const alert = errors.array()[0].msg;
      res.status(211).json({
        "success":false,
        "message":"somthing went wrong",
        "data":{"alert":alert}
      })
    }
    else {
      const user = new Userdb({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:req.body.password,
        dob: req.body.dob,
        image:req.body.image
      })

      await user.save()
      console.log(req.file);
      res.status(201).json({
        "success":true,
        "message":"register success",
        "data":{}
      })
    }


  } catch (error) {
    console.log(error);
  }
}

exports.login = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const alert = errors.array()[0].msg;
      res.status(211).json({
        "success":false,
        "message":"somthing went wrong",
        "data":{"alert":alert}
      })
    }
    else {
      const userData = await Userdb.findOne({ email: req.body.email.toLowerCase() , password:req.body.password })
      if(userData){
      res.status(201).json({
        "success":true,
        "message":"Login success",
        "data":{}
      })
    }
    else{
      res.status(211).json({
        "success":false,
        "message":"password not match",
        "data":{}
      })
    }
    }


  } catch (error) {
    console.log(error);
  }
}