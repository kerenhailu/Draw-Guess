const StrategyJWT = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Users = require("../Models/user-model");

const options = {
secretOrKey:process.env.SECRET_KEY
};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports= (passport) => {
  passport.use(
    new StrategyJWT(options, (obj_user_from_payload, done) => {
      Users.findById( obj_user_from_payload.user._id)
        .then(user => {
          if (user)return done(null, user);
          done(null, false);
        })
        .catch(err => done(err, false));
    })
  );
};