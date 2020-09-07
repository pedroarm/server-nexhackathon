import express from 'express'
import routes from './routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Umbler listening on port %s', port);
})