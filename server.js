// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


// page0 page 
app.get('/', function(req, res) {
    
    var overview = "Welcome travelor Jane"
    res.render('pages/index', {
    
        overview: overview
    });
});

// about page///
app.get('/about', function(req, res) {
    //use later if needed var about = ;
    res.render('pages/about', {

    
    });
    
});



// using energy///santa?
app.get('/Santa', function(req, res) {
    res.render('pages/Santa');
});
// about page/// spirit orb
app.get('/Spiritorb', function(req, res) {
    res.render('pages/Spiritorb');
});
app.get('/KnifeYes', function(req, res) {
    res.render('pages/KnifeYes');
});

app.get('/OrbNo', function(req, res) {
    res.render('pages/OrbNo');
});
app.get('/endingOne', function(req, res) {
    res.render('pages/endingOne');
});
app.get('/SwordYes', function(req, res) {
    res.render('pages/SwordYes');
});
app.get('/MurderJake', function(req, res) {
    res.render('pages/Murderjake');
});
app.get('/spiritorbWSword', function(req, res) {
    res.render('pages/spiritorbWSword');
});
app.get('/hat', function(req, res) {
    res.render('pages/hat');
});
app.get('/KillSanta', function(req, res) {
    res.render('pages/KillSanta');
    
});
app.get('/choice', function(req, res) {
    res.render('pages/choice');
});
app.get('/rules', function(req, res) {
    res.render('pages/rules');
});
app.listen(8080);
console.log('http://localhost:8080');