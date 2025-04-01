require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    url: process.env.DATABASE_URL || 'postgres://root:password@127.0.0.1:5432/database_development',
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    url: process.env.TEST_DATABASE_URL || 'postgres://root:password@127.0.0.1:5432/database_test',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'PROD_DATABASE_URL',
    url: process.env.PROD_DATABASE_URL || 'postgres://root:password@127.0.0.1:5432/database_production',
    dialect: 'postgres',
  },
};