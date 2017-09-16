/* eslint-disable no-console */
import mongoose from 'mongoose';

import constans from './constants';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Conect the db with the url provide
try {
  mongoose.connect(constans.MONGO_URL);
} catch (err) {
  mongoose.createConnection(constans.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });
