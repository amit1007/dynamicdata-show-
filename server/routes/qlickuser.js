var express = require('express');
var router = express.Router();
var app = require('../app');

//module import
const User = require('../model/CreateUser');


router.get('/UserSync',function(req,res){
  try {
    channelDetails.find({"IsActive": true},function (err, products) {
      pinglogger.pingloggerSystem.info("------------------=====================----------------------")
      pinglogger.pingloggerSystem.info("We are now in get active user route ")
      if (err) return next(pinglogger.pingloggerSystem.error(err));
    QlikUserSync("abc",function(qlikuserSync){
      console.log(qlikuserSync);
      var qlikUsers=qlikuserSync;
    var i;
    for (i = 0; i < qlikUsers.length; i++) { 
       console.log("User"+i+" "+qlikUsers[i].qlikUserData)
        var password=qlikUsers[i].qlikUserData.name+"123";
        var decryptedPassword=password;
       // console.log(password)
        var qUID = qlikUsers[i].qlikUserData.userId
        var qName=qlikUsers[i].qlikUserData.userId
        var qDirectory=qlikUsers[i].qlikUserData.userDirectory
        var qRoles=qlikUsers[i].qlikUserData.roles
        var qEmail=qlikUsers[i].qlikUserData.email
        if(qEmail=="",qEmail==null)
        {
          qEmail="";
        }
        var qGroup=qlikUsers[i].qlikUserData.group
        console.log("------------**************--------------------")
        User.find(function(err,totaluser){
          if(err) return next(err);
          let count = totaluser.length + 1
          const newUser = new User({            
            PingUserID: 'User'+count,
            PingUserName: qUID.toLowerCase(),
            PingUserDirectory: qDirectory,
            PingUserAccess: 'Manage In Ping',
            EmailID: qEmail.toLowerCase(),
            password: password,
            PingMemberID: '1',
            PingGroupID: '1',
            PingRole: 'User',
            InsertBy:'Qlik Admin',
            LoginUserID: 'User6'
          });  
           
         
          
        })
        
    }
    })
  
    
  });
} catch (error) {
    console.log(error);
}
});

router.get('/register',function(req,res){
  try {
    console.log(req.session["passport"]["user"]) ;
    res.send()
  } catch (error) {
    res.send(403,error);
  }
});

router.post('/register', (req, res) => {
    try {
        console.log("user register");
        console.log(req.body);
        req.assert('PingUserName', 'Username is required').notEmpty();
        req.assert('EmailID', 'Enter a valid email address').isEmail();
        req.assert('password', 'Password must be atleast 6 charecters').isLength({ min: 6 });
        const errors = req.validationErrors();
       
        if(errors){             
           return res.send(403,errors);
            console.log(errors);
         }         
         else{
            User.findOne({
              PingUserName: req.body.PingUserName
              })
              .then(user => {
                if(user) {
                  return res.send(403, {msg: `Already a user with User Name ${req.body.PingUserName}`});
            
                }

                User.find(function(err,totaluser){
                  if(err) return next(err);
                  let count = totaluser.length + 1
                  const newUser = new User({            
                    PingUserID: "User"+ count,
                    PingUserName: req.body.PingUserName.toLowerCase(),
                    PingUserDirectory: req.body.PingUserDirectory,
                    PingUserAccess: req.body.PingUserAccess,
                    EmailID: req.body.EmailID.toLowerCase(),
                    password: req.body.password,
                    PingMemberID: req.body.PingMemberID,
                    PingGroupID: req.body.PingGroupID,
                    PingRole: req.body.PingRole,
                    InsertBy:req.body.InsertBy,
                    LoginUserID: req.body.LoginUserID
                  });
              
                  
                })
            
              
            
              });
         }
    } catch (error) {
        console.log(error);
    }
  
  
  });




 router.get("/content", function (req, res) {
   try {
    console.log(req.session) ;
    res.redirect('/admin');
   } catch (error) {
     console.log(error)
   }

});

// RETURNS ALL THE USERS IN THE DATABASE Login ID Wise
router.get('/LoginIdWise/:id', function (req, res) {
  console.log(req.params.id)
  console.log(req.LoginUserID);
  
   User.find({"LoginUserID":req.params.id},function(err,user){
    if(err) return res.status(500).send("user Not Found");
      res.status(200).send({"code":200,"body":user});
 
   })
 });

 // GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
  console.log('Here is findById Authcontroll..............')
  User.findById(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
  console.log('Here is update Authcontroll')
User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
if (err) return res.status(500).send("There was a problem updating the user.");
res.status(200).send(user);
});
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id',function (req, res) {
  console.log('Here is Remove Authcontroll')
  User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User: "+ user.name +" was deleted.");
  });
});

router.delete('/:id',function(req, res, next) {
  console.log("DELETE User");
  // qUser.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    User.findByIdAndUpdate({_id: req.params.id}, {$set: {"IsActive":false}} , function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/logout', (req, res, next) => { 
  try {
        req.logout();
  } catch (error) {
    console.log(error);
}
   
   
});


 module.exports = router;