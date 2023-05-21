const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'no',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
