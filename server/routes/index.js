// File name : index.js
// Stuent's Name : Seyeong Park
// Student ID : 301088175
// Date : October 23th 2020 

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET - Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page  */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page  */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout - DELETE Operation */
router.get('/logout', indexController.performLogout);

module.exports = router;
