import 'dotenv/config';

export default ({ config }) => ({
  ...config,
  extra: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  },
});
