//Student Name - Shreyas SIngh
//Student ID - 301239523


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const contactlist = require('../models/contactlist');

let contactlistController = require('../controllers/contactlist')

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/login');
    }
    next();
}

router.get('/List', contactlistController.list);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',requireAuth, contactlistController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',requireAuth, contactlistController.processAddPage);

// Routers for edit
router.get('/edit/:id',requireAuth, contactlistController.displayEditPage);
router.post('/edit/:id', requireAuth,contactlistController.processEditPage);

// Delete
router.get('/delete/:id',requireAuth, contactlistController.performDelete);


module.exports = router;