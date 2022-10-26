/*
File Name - index.js
Student Name - Shreyas Singh
Student ID - 301239523
*/



exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'Home',
        userName: req.user ? req.user.username : '' 
 });
}

exports.projects = function(req, res, next) {
    res.render('index', { 
        title: 'Projects', 
        userName: req.user ? req.user.username : '' 
    });
}

exports.about = function(req, res, next) {
    res.render('index', { title: 'About',
    userName: req.user ? req.user.username : ''
});
}

exports.services = function(req, res, next) {
    res.render('index', { title: 'Services',
    userName: req.user ? req.user.username : ''
 });
}

exports.contact = function(req, res, next) {
    res.render(
        'index', 
        { 
            title: 'Contact Me',
            userName: req.user ? req.user.username : '' 
        }
    );
}