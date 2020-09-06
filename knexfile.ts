import path from 'path'

module.exports = {
  client: 'mysql',
  connection: {
      host : 'mysql669.umbler.com',
      port : 41890,
      user : 'nextestdb',
      password : 'n12345678',
      database : 'nextest'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};