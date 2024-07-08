const app = require('./app')
const dotenv = require('dotenv')
const path = require('path')
const connectDataBase = require('./config/database')
dotenv.config({path:path.join(__dirname,'config/config.env')});

connectDataBase()

app.listen(process.env.PORT,()=>{console.log(`Server is running on port: ${process.env.PORT}`)})