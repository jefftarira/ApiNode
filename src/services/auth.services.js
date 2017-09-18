import passport from 'passport';
import LocalStrategy from 'passport-local';

import User from '../modules/users/user.model';

const localOtps = {
  usernameField: 'email',
};

const localStrategy = new LocalStrategy(localOtps, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });

    console.log('====================================');
    console.log(email, password);
    console.log('====================================');

    console.log('====================================');
    console.log(user);
    console.log('====================================');

    if (!user) {
      return done(null, false);
    } else if (user.password !== password) {
      return done(null, false);
    }

    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

passport.use(localStrategy);

export const authLocal = passport.authenticate('local', { session: false });
