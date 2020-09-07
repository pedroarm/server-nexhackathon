import path from 'path'

module.exports = {
  client: 'mysql',
  connection: {
      host : 'mysql669.umbler.com',
      port : 41890,
      user : 'nexdb',
      password : 'uAdODK7tWYz',
      database : 'nexhacka'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};