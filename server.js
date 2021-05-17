require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 8080;
const cors  = require('cors');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const dbUrl = process.env.DATABASE_URL;
const admin = process.env.USER;
const passKey = process.env.PASSWORD;
var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}


MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    
    // CHECK FOR CONNECTION TO DATABASE ERRORS, VERIFY DATABASE CONNECTION
    if (err) throw err;
    console.log(`Database connected successfully!`);


    //GLOBAL DATABASE VARIABLES
    const db = client.db('recipedb');
    const dbCollection = db.collection('breakfast-tacos');
    const dbCollection2 = db.collection('breakfast-burritos');
    const dbCollection3 = db.collection('omelette');
    const dbCollection4 = db.collection('biscuits-gravy');
    const dbCollection5 = db.collection('sausage-breakfast-rolls');
    const dbCollection6 = db.collection('cajun-batter');
    const dbCollection7 = db.collection('fried-chicken-batter');
    const dbCollection8 = db.collection('house-seasoning');
    const dbCollection9 = db.collection('cajun-seasoning');
    const dbCollection10 = db.collection('turkey-gravy');
    const dbCollection11 = db.collection('brown-gravy');
    const dbCollection12 = db.collection('cheeseburger-pie');
    const dbCollection13 = db.collection('meatloaf');
    const dbCollection14 = db.collection('chicken-noodle-soup');
    const dbCollection15 = db.collection('chicken-dumplings');
    const dbCollection16 = db.collection('dummy-stew');
    const dbCollection17 = db.collection('round-steak');
    const dbCollection18 = db.collection('round-steak-gravy');
    const dbCollection19 = db.collection('beef-rice');
    const dbCollection20 = db.collection('shrimp-scampi');
    const dbCollection21 = db.collection('steak-n-oysters');
    const dbCollection22 = db.collection('granny-baked-chicken');
    const dbCollection23 = db.collection('crab-corn-chowder');
    const dbCollection24 = db.collection('chicken-sour-cream');
    const dbCollection25 = db.collection('broccoli-casserole');
    const dbCollection26 = db.collection('turnip-soup');
    const dbCollection27 = db.collection('fried-porkchops');
    const dbCollection28 = db.collection('fried-chicken');
    const dbCollection29 = db.collection('baked-chicken');
    const dbCollection30 = db.collection('hamburger-steak');
    const dbCollection31 = db.collection('beef-tips');
    const dbCollection32 = db.collection('country-fried-steak');
    const dbCollection33 = db.collection('steak-fingers');
    const dbCollection34 = db.collection('beef-stew');
    const dbCollection35 = db.collection('etouffe');
    const dbCollection36 = db.collection('gumbo');
    const dbCollection37 = db.collection('jambalaya');
    const dbCollection38 = db.collection('red-beans-rice');
    const dbCollection39 = db.collection('baked-potato-soup');
    const dbCollection40 = db.collection('cheese-ball');
    const dbCollection41 = db.collection('ham-rollups');
    const dbCollection42 = db.collection('pie-crust');
    const dbCollection43 = db.collection('washington-pie');
    const dbCollection44 = db.collection('lemon-cake-pie');
    const dbCollection45 = db.collection('peanut-butter-pie');
    const dbCollection46 = db.collection('peach-cobbler');
    const dbCollection47 = db.collection('gooey-butter-cake');
    const dbCollection48 = db.collection('crazy-karo-crunch');
    const dbCollection49 = db.collection('banana-nut-bread');
    const dbCollection50 = db.collection('meatballs');
    const dbCollection51 = db.collection('macaroni');
    const dbCollection52 = db.collection('dinner-rolls');
    const dbCollection53 = db.collection('fried-green-tomatoes');
    const dbCollection54 = db.collection('stuffed-red-potatoes');
    const dbCollection55 = db.collection('potato-balls');
    const dbCollection56 = db.collection('hopping-john');
    const dbCollection57 = db.collection('corn-dish');
    const dbCollection58 = db.collection('squash-au-gratin');
    const dbCollection59 = db.collection('stuffed-bell-peppers');
    const dbCollection60 = db.collection('rolled-cabbage');
    const dbCollection61 = db.collection('roasted-potatoes');
    const dbCollection62 = db.collection('collard-greens');
    const dbCollection63 = db.collection('green-beans');



    
    //MIDDLEWARES
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ limit: '50mb' }));




    //CONTACT FORM
    app.post('/about', (req, res) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: admin,
          pass: passKey
        }
      });

      const mailOptions = {
        from: req.body.email,
        to: 'jcbryant3419@gmail.com',
        subject: 'New message from Down South Recipes App!',
        html: `<hr><strong>From:</strong> ${req.body.firstName} ${req.body.lastName}<br><br>
        <strong>Email:</strong> ${req.body.email}<br><br>
        <strong>Subject:</strong> ${req.body.subject}<br><br>
        <strong>Message:</strong><br><br>${req.body.message}<hr>`
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response)
        }
      });
      res.redirect('/about');
    });







    /*POST ROUTES*/
    //Breakfast Tacos
    app.post('/breakfast-tacos/', (req, res) => {
        dbCollection.insertOne(req.body)
        .then(results => {
            console.log('1 document inserted...');
            res.redirect('/breakfast');
        })
        .catch(error => console.error(error));
    });

    //Breakfast Burritos
    app.post('/breakfast-burritos/', (req, res) => {
      dbCollection2.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/breakfast');
      })
      .catch(error => console.error(error));
    });

    //Omelette
    app.post('/omelette/', (req, res) => {
      dbCollection3.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/breakfast');
      })
      .catch(error => console.error(error));
    });

    //Biscuits N Gravy
    app.post('/biscuits-gravy/', (req, res) => {
      dbCollection4.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/breakfast');
      })
      .catch(error => console.error(error));
    });

    //Sausage Breakfast Rolls
    app.post('/sausage-breakfast-rolls/', (req, res) => {
      dbCollection5.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/breakfast');
      })
      .catch(error => console.error(error));
    });

    //Cajun Batter
    app.post('/cajun-batter/', (req, res) => {
      dbCollection6.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });

    //Fried Chicken Batter
    app.post('/fried-chicken-batter/', (req, res) => {
      dbCollection7.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });

    //House Seasoning
    app.post('/house-seasoning/', (req, res) => {
      dbCollection8.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });
    
    //Cajun House Seasoning
    app.post('/cajun-seasoning/', (req, res) => {
      dbCollection9.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });

    //Turkey Gravy
    app.post('/turkey-gravy/', (req, res) => {
      dbCollection10.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });
    //Brown Gravy
    app.post('/brown-gravy/', (req, res) => {
      dbCollection11.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/misc');
      })
      .catch(error => console.error(error));
    });

    //Cheeseburger Pie
    app.post('/cheeseburger-pie/', (req, res) => {
      dbCollection12.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Meatloaf
    app.post('/meatloaf/', (req, res) => {
      dbCollection13.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Chicken Noodle Soup
    app.post('/chicken-noodle-soup/', (req, res) => {
      dbCollection14.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Chicken Dumplings
    app.post('/chicken-dumplings/', (req, res) => {
      dbCollection15.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Dummy Stew
    app.post('/dummy-stew/', (req, res) => {
      dbCollection16.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Smothered Round Steak
    app.post('/round-steak/', (req, res) => {
      dbCollection17.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Round Steak N Gravy
    app.post('/round-steak-gravy/', (req, res) => {
      dbCollection18.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Beef Rice
    app.post('/beef-rice/', (req, res) => {
      dbCollection19.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Shrimp Scampi
    app.post('/shrimp-scampi/', (req, res) => {
      dbCollection20.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Steak N Oysters
    app.post('/steak-n-oysters/', (req, res) => {
      dbCollection21.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Granny Baked Chicken
    app.post('/granny-baked-chicken/', (req, res) => {
      dbCollection22.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Crab Corn Chowder
    app.post('/crab-corn-chowder/', (req, res) => {
      dbCollection23.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Chicken Sour Cream
    app.post('/chicken-sour-cream/', (req, res) => {
      dbCollection24.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Broccoli Casserole
    app.post('/broccoli-casserole/', (req, res) => {
      dbCollection25.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Turnip Green Soup
    app.post('/turnip-soup/', (req, res) => {
      dbCollection26.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Fried Pork Chops
    app.post('/fried-porkchops/', (req, res) => {
      dbCollection27.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Fried Chicken
    app.post('/fried-chicken/', (req, res) => {
      dbCollection28.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Baked Chicken
    app.post('/baked-chicken/', (req, res) => {
      dbCollection29.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });
 
    //Hamburger Steak
    app.post('/hamburger-steak/', (req, res) => {
      dbCollection30.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Beef Tips
    app.post('/beef-tips/', (req, res) => {
      dbCollection31.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Country Fried Steak
    app.post('/country-fried-steak/', (req, res) => {
      dbCollection32.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Steak Fingers
    app.post('/steak-fingers/', (req, res) => {
      dbCollection33.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Beef Stew
    app.post('/beef-stew/', (req, res) => {
      dbCollection34.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Etouffe
    app.post('/etouffe/', (req, res) => {
      dbCollection35.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Gumbo
    app.post('/gumbo/', (req, res) => {
      dbCollection36.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Jambalaya
    app.post('/jambalaya/', (req, res) => {
      dbCollection37.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Red Beans N Rice
    app.post('/red-beans-rice/', (req, res) => {
      dbCollection38.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Baked Potato Soup
    app.post('/baked-potato-soup/', (req, res) => {
      dbCollection39.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/lunch-dinner');
      })
      .catch(error => console.error(error));
    });

    //Cheeeseball
    app.post('/cheese-ball/', (req, res) => {
      dbCollection40.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/snacks');
      })
      .catch(error => console.error(error));
    });

    //Ham Rollups
    app.post('/ham-rollups/', (req, res) => {
      dbCollection41.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/snacks');
      })
      .catch(error => console.error(error));
    });

    //Pie Crust
    app.post('/pie-crust/', (req, res) => {
      dbCollection42.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Washington Pie
    app.post('/washington-pie/', (req, res) => {
      dbCollection43.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Lemon Cake Pie
    app.post('/lemon-cake-pie/', (req, res) => {
      dbCollection44.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Peanut Butter Pie
    app.post('/peanut-butter-pie/', (req, res) => {
      dbCollection45.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Peach Cobbler
    app.post('/peach-cobbler/', (req, res) => {
      dbCollection46.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Gooey Butter Cake
    app.post('/gooey-butter-cake/', (req, res) => {
      dbCollection47.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Karo Crazy Crunch
    app.post('/crazy-karo-crunch/', (req, res) => {
      dbCollection48.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });
    
    //Banana Nut Bread
    app.post('/banana-nut-bread/', (req, res) => {
      dbCollection49.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/desserts');
      })
      .catch(error => console.error(error));
    });

    //Meatballs 
    app.post('/meatballs/', (req, res) => {
      dbCollection50.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Macaroni
    app.post('/macaroni/', (req, res) => {
      dbCollection51.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Dinner Rolls
    app.post('/dinner-rolls/', (req, res) => {
      dbCollection52.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Fried Green Tomatoes
    app.post('/fried-green-tomatoes/', (req, res) => {
      dbCollection53.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Stuffed Red Potatoes
    app.post('/stuffed-red-potatoes/', (req, res) => {
      dbCollection54.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Potato Balls
    app.post('/potato-balls/', (req, res) => {
      dbCollection55.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Hopping John
    app.post('/hopping-john/', (req, res) => {
      dbCollection56.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Savor Corn Dish
    app.post('/corn-dish/', (req, res) => {
      dbCollection57.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Squash Au Gratin
    app.post('/squash-au-gratin/', (req, res) => {
      dbCollection58.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Stuffed Bell Peppers
    app.post('/stuffed-bell-peppers/', (req, res) => {
      dbCollection59.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Rolled Cabbage
    app.post('/rolled-cabbage/', (req, res) => {
      dbCollection60.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Roasted Potatoes
    app.post('/roasted-potatoes/', (req, res) => {
      dbCollection61.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Collard Greens
    app.post('/collard-greens/', (req, res) => {
      dbCollection62.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });

    //Js Green Beans
    app.post('/green-beans/', (req, res) => {
      dbCollection63.insertOne(req.body)
      .then(results => {
          console.log('1 document inserted...');
          res.redirect('/sides');
      })
      .catch(error => console.error(error));
    });




    /*GET ROUTES*/
    //Breakfast Route / + Breakfast Tacos
    app.get('/breakfast', (req, res) => {
        dbCollection.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
        .then(results => {
            res.send({ username: results, reviews: results, rating: results });
        })
        .catch(error => console.error(error))
    });

    //Misc Route 
    app.get('/misc', (req, res) => {
      dbCollection.find({}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Lunch-Dinner Route 
    app.get('/lunch-dinner', (req, res) => {
      dbCollection.find({}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Snacks Route 
    app.get('/snacks', (req, res) => {
      dbCollection.find({}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });
    
    //Desserts Route 
    app.get('/desserts', (req, res) => {
      dbCollection.find({}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Sides Route 
    app.get('/sides', (req, res) => {
      dbCollection.find({}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });
    
    
    //Breakfast Burritos
    app.get('/breakfast-burritos', (req, res) => {
      dbCollection2.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Omelette
    app.get('/omelette', (req, res) => {
      dbCollection3.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Biscuits N gravy
    app.get('/biscuits-gravy', (req, res) => {
      dbCollection4.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Sausage Breakfast Rolls
    app.get('/sausage-breakfast-rolls', (req, res) => {
      dbCollection5.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Cajun Batter
    app.get('/cajun-batter', (req, res) => {
      dbCollection6.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Fried Chicken Batter
    app.get('/fried-chicken-batter', (req, res) => {
      dbCollection7.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //House Seasoning
    app.get('/house-seasoning', (req, res) => {
      dbCollection8.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Cajun House Seasoning
    app.get('/cajun-seasoning', (req, res) => {
      dbCollection9.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Turkey Gravy
    app.get('/turkey-gravy', (req, res) => {
      dbCollection10.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Brown Gravy
    app.get('/brown-gravy', (req, res) => {
      dbCollection11.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Cheeseburger Pie
    app.get('/cheeseburger-pie', (req, res) => {
      dbCollection12.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Meatloaf
    app.get('/meatloaf', (req, res) => {
      dbCollection13.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Chicken Noodle Soup
    app.get('/chicken-noodle-soup', (req, res) => {
      dbCollection14.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Chicken Dumplings
    app.get('/chicken-dumplings', (req, res) => {
      dbCollection15.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Dummy Stew
    app.get('/dummy-stew', (req, res) => {
      dbCollection16.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Smothered Round Steak
    app.get('/round-steak', (req, res) => {
      dbCollection17.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Round Steak N Gravy
    app.get('/round-steak-gravy', (req, res) => {
      dbCollection18.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Beef Rice
    app.get('/beef-rice', (req, res) => {
      dbCollection19.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Shrimp Scampi
    app.get('/shrimp-scampi', (req, res) => {
      dbCollection20.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Steak N Oysters
    app.get('/steak-n-oysters', (req, res) => {
      dbCollection21.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Granny Baked Chicken
    app.get('/granny-baked-chicken', (req, res) => {
      dbCollection22.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Crab Corn Chowder
    app.get('/crab-corn-chowder', (req, res) => {
      dbCollection23.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Chicken Sour Cream
    app.get('/chicken-sour-cream', (req, res) => {
      dbCollection24.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Broccoli Casserole
    app.get('/broccoli-casserole', (req, res) => {
      dbCollection25.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Turnip Green Soup
    app.get('/turnip-soup', (req, res) => {
      dbCollection26.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Fried Pork Chops
    app.get('/fried-porkchops', (req, res) => {
      dbCollection27.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Fried Chicken
    app.get('/fried-chicken', (req, res) => {
      dbCollection28.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Baked Chicken
    app.get('/baked-chicken', (req, res) => {
      dbCollection29.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Hamburger Steak
    app.get('/hamburger-steak', (req, res) => {
      dbCollection30.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Beef Tips
    app.get('/beef-tips', (req, res) => {
      dbCollection31.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Country Fried Steak
    app.get('/country-fried-steak', (req, res) => {
      dbCollection32.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Steak Fingers
    app.get('/steak-fingers', (req, res) => {
      dbCollection33.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Beef Stew
    app.get('/beef-stew', (req, res) => {
      dbCollection34.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Etouffe
    app.get('/etouffe', (req, res) => {
      dbCollection35.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Gumbo
    app.get('/gumbo', (req, res) => {
      dbCollection36.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Jambalaya
    app.get('/jambalaya', (req, res) => {
      dbCollection37.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Red Beans N Rice
    app.get('/red-beans-rice', (req, res) => {
      dbCollection38.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Baked Potato Soup
    app.get('/baked-potato-soup', (req, res) => {
      dbCollection39.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Cheeseball
    app.get('/cheese-ball', (req, res) => {
      dbCollection40.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Ham Rollups
    app.get('/ham-rollups', (req, res) => {
      dbCollection41.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Pie Crust
    app.get('/pie-crust', (req, res) => {
      dbCollection42.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Washington Pie
    app.get('/washington-pie', (req, res) => {
      dbCollection43.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Lemon Cake Pie
    app.get('/lemon-cake-pie', (req, res) => {
      dbCollection44.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Peanut Butter Pie
    app.get('/peanut-butter-pie', (req, res) => {
      dbCollection45.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Peach Cobbler
    app.get('/peach-cobbler', (req, res) => {
      dbCollection46.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Gooey Butter Cake
    app.get('/gooey-butter-cake', (req, res) => {
      dbCollection47.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Karo Crazy Crunch
    app.get('/crazy-karo-crunch', (req, res) => {
      dbCollection48.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Banana Nut Bread
    app.get('/banana-nut-bread', (req, res) => {
      dbCollection49.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });
    
    //Meatballs
    app.get('/meatballs', (req, res) => {
      dbCollection50.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Macaroni
    app.get('/macaroni', (req, res) => {
      dbCollection51.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Dinner Rolls
    app.get('/dinner-rolls', (req, res) => {
      dbCollection52.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Fried Green Tomatoes
    app.get('/fried-green-tomatoes', (req, res) => {
      dbCollection53.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Stuffed Red Potatoes
    app.get('/stuffed-red-potatoes', (req, res) => {
      dbCollection54.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Potato Balls
    app.get('/potato-balls', (req, res) => {
      dbCollection55.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Hopping John
    app.get('/hopping-john', (req, res) => {
      dbCollection56.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Savory Corn Dish
    app.get('/corn-dish', (req, res) => {
      dbCollection57.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Squash Au Gratin
    app.get('/squash-au-gratin', (req, res) => {
      dbCollection58.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Stuffed Bell Peppers
    app.get('/stuffed-bell-peppers', (req, res) => {
      dbCollection59.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Rolled Cabbage
    app.get('/rolled-cabbage', (req, res) => {
      dbCollection60.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Roasted Potatoes
    app.get('/roasted-potatoes', (req, res) => {
      dbCollection61.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Collard Greens
    app.get('/collard-greens', (req, res) => {
      dbCollection62.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });

    //Js Green Beans
    app.get('/green-beans', (req, res) => {
      dbCollection63.find({username: {$exists: true}, reviews: {$exists: true}}).toArray()
      .then(results => {
          res.send({ username: results, reviews: results, rating: results });
      })
      .catch(error => console.error(error))
    });




    /*STAR RATINGS AVERAGE GET ROUTES*/
    //Breakfast Tacos
    app.get('/breakfast-taco-rating', (req, res) => {
        db.collection('breakfast-tacos').aggregate([
        {
          $group: {
            _id: "avg",
            avgrating: {
              $avg: "$rating"
            }
          }
        }
      ]).toArray()
        .then(results => {
            console.log({ rating: results[0].avgrating });
            res.send({ rating: results[0].avgrating });
        })
        .catch(error => console.error(error))
    });   

    //Breakfast Burritos
    app.get('/breakfast-burrito-rating', (req, res) => {
      db.collection('breakfast-burritos').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });   

    //Omelette
    app.get('/omelette-rating', (req, res) => {
      db.collection('omelette').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });   

    //Biscuits N Gravy
    app.get('/biscuits-gravy-rating', (req, res) => {
      db.collection('biscuits-gravy').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });
  
    //Sausage Breakfast Rolls
    app.get('/sausage-breakfast-rolls-rating', (req, res) => {
      db.collection('sausage-breakfast-rolls').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });
  
    //Cajun Batter
    app.get('/cajun-batter-rating', (req, res) => {
      db.collection('cajun-batter').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });   

    //Fried Chicken Batter
    app.get('/fried-chicken-batter-rating', (req, res) => {
      db.collection('fried-chicken-batter').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
  });   

    //House Seasoning
    app.get('/house-seasoning-rating', (req, res) => {
      db.collection('house-seasoning').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });
  
  
    //Cajun House Seasoning
    app.get('/cajun-seasoning-rating', (req, res) => {
      db.collection('cajun-seasoning').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Turkey Gravy
    app.get('/turkey-gravy-rating', (req, res) => {
      db.collection('turkey-gravy').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Brown Gravy
    app.get('/brown-gravy-rating', (req, res) => {
      db.collection('brown-gravy').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Cheeseburger Pie
    app.get('/cheeseburger-pie-rating', (req, res) => {
      db.collection('cheeseburger-pie').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Meatloaf
    app.get('/meatloaf-rating', (req, res) => {
      db.collection('meatloaf').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Chicken Noodle Soup
    app.get('/chicken-noodle-soup-rating', (req, res) => {
      db.collection('chicken-noodle-soup').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Chicken Dumplings
    app.get('/chicken-dumplings-rating', (req, res) => {
      db.collection('chicken-dumplings').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Dummy Stew
    app.get('/dummy-stew-rating', (req, res) => {
      db.collection('dummy-stew').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Smothered Round Steak
    app.get('/round-steak-rating', (req, res) => {
      db.collection('round-steak').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Round Steak N Gravy
    app.get('/round-steak-gravy-rating', (req, res) => {
      db.collection('round-steak-gravy').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Beef Rice
    app.get('/beef-rice-rating', (req, res) => {
      db.collection('beef-rice').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Shrimp Scampi
    app.get('/shrimp-scampi-rating', (req, res) => {
      db.collection('shrimp-scampi').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Steak N Oysters
    app.get('/steak-n-oysters-rating', (req, res) => {
      db.collection('steak-n-oysters').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Granny Baked Chicken
    app.get('/granny-baked-chicken-rating', (req, res) => {
      db.collection('granny-baked-chicken').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Crab Corn Chowder
    app.get('/crab-corn-chowder-rating', (req, res) => {
      db.collection('crab-corn-chowder').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Chicken Sour Cream
    app.get('/chicken-sour-cream-rating', (req, res) => {
      db.collection('crab-corn-chowder').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Broccoli Casserole
    app.get('/broccoli-casserole-rating', (req, res) => {
      db.collection('broccoli-casserole').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

  
    //Turnip Green Soup
    app.get('/turnip-soup-rating', (req, res) => {
      db.collection('turnip-soup').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Fried Pork Chops
    app.get('/fried-porkchops-rating', (req, res) => {
      db.collection('fried-porkchops').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Fried Chicken
    app.get('/fried-chicken-rating', (req, res) => {
      db.collection('fried-chicken').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Baked Chicken
    app.get('/baked-chicken-rating', (req, res) => {
      db.collection('baked-chicken').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Hamburger Steak
    app.get('/hamburger-steak-rating', (req, res) => {
      db.collection('hamburger-steak').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Beef Tips
    app.get('/beef-tips-rating', (req, res) => {
      db.collection('beef-tips').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Country Fried Steak
    app.get('/country-fried-steak-rating', (req, res) => {
      db.collection('country-fried-steak').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Steak Fingers
    app.get('/steak-fingers-rating', (req, res) => {
      db.collection('steak-fingers').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Beef Stew
    app.get('/beef-stew-rating', (req, res) => {
      db.collection('beef-stew').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Etouffe
    app.get('/etouffe-rating', (req, res) => {
      db.collection('etouffe').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Gumbo
    app.get('/gumbo-rating', (req, res) => {
      db.collection('gumbo').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Jambalaya
    app.get('/jambalaya-rating', (req, res) => {
      db.collection('jambalaya').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Red Beans N Rice
    app.get('/red-beans-rice-rating', (req, res) => {
      db.collection('red-beans-rice').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Baked Potato Soup
    app.get('/baked-potato-soup-rating', (req, res) => {
      db.collection('baked-potato-soup').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Cheeseball
    app.get('/cheese-ball-rating', (req, res) => {
      db.collection('cheese-ball').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Ham Rollups
    app.get('/ham-rollups-rating', (req, res) => {
      db.collection('ham-rollups').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Pie Crust
    app.get('/pie-crust-rating', (req, res) => {
      db.collection('pie-crust').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Washington Pie
    app.get('/washington-pie-rating', (req, res) => {
      db.collection('washington-pie').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Lemon Cake Pie
    app.get('/lemon-cake-pie-rating', (req, res) => {
      db.collection('lemon-cake-pie').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Peanut Butter Pie
    app.get('/peanut-butter-pie-rating', (req, res) => {
      db.collection('peanut-butter-pie').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Peach Cobbler
    app.get('/peach-cobbler-rating', (req, res) => {
      db.collection('peach-cobbler').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Gooey Butter Cake
    app.get('/gooey-butter-cake-rating', (req, res) => {
      db.collection('gooey-butter-cake').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Karo Crazy Crunch
    app.get('/crazy-karo-crunch-rating', (req, res) => {
      db.collection('crazy-karo-crunch').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Banana Nut Bread
    app.get('/banana-nut-bread-rating', (req, res) => {
      db.collection('banana-nut-bread').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Meatballs
    app.get('/meatballs-rating', (req, res) => {
      db.collection('meatballs').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Macaroni
    app.get('/macaroni-rating', (req, res) => {
      db.collection('macaroni').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Dinner Rolls
    app.get('/dinner-rolls-rating', (req, res) => {
      db.collection('dinner-rolls').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Fried Green Tomatoes
    app.get('/fried-green-tomatoes-rating', (req, res) => {
      db.collection('fried-green-tomatoes').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Stuffed Red Potatoes
    app.get('/stuffed-red-potatoes-rating', (req, res) => {
      db.collection('stuffed-red-potatoes').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Potato Balls
    app.get('/potato-balls-rating', (req, res) => {
      db.collection('potato-balls').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Hopping John
    app.get('/hopping-john-rating', (req, res) => {
      db.collection('hopping-john').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Savory Corn Dish
    app.get('/corn-dish-rating', (req, res) => {
      db.collection('corn-dish').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Squash Au Gratin
    app.get('/squash-au-gratin-rating', (req, res) => {
      db.collection('squash-au-gratin').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Stuffed Bell Peppers
    app.get('/stuffed-bell-peppers-rating', (req, res) => {
      db.collection('stuffed-bell-peppers').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Rolled Cabbage
    app.get('/rolled-cabbage-rating', (req, res) => {
      db.collection('rolled-cabbage').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Roasted Potatoes
    app.get('/roasted-potatoes-rating', (req, res) => {
      db.collection('roasted-potatoes').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Collard Greens
    app.get('/collard-greens-rating', (req, res) => {
      db.collection('collard-greens').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   

    //Js Green Beans
    app.get('/green-beans-rating', (req, res) => {
      db.collection('green-beans').aggregate([
      {
        $group: {
          _id: "avg",
          avgrating: {
            $avg: "$rating"
          }
        }
      }
    ]).toArray()
      .then(results => {
          console.log({ rating: results[0].avgrating });
          res.send({ rating: results[0].avgrating });
      })
      .catch(error => console.error(error))
    });   
});

//SERVER
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

