const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');


passport.use(
    new GoogleStrategy({
    //option for the google start
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        console.log('passport callback function fired');
        console.log(profile);
    })
)
