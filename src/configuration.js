// var dotenv = require('dotenv')
// var path = require('path')
// const result = dotenv.config({
//   path: path.join(__dirname, '../.env')
// })
// // const result = require('dotenv').config()

// console.log(result)
// console.log(process.cwd(), '///')
// console.log(path.join(__dirname))

/**
 * NOTE:: DONT NEED TO INSTALL `dotenv` IF YOU'RE USING `create-react-app`
    If you have installed dotenv remove it from your package.json.
    create a .env.development (fileName starts with "." )
    add property REACT_APP_REST_API_LOCATION=http://localhost:8080
    try to access it using process.env.REACT_APP_REST_API_LOCATION
 * https://github.com/facebook/create-react-app/issues/4485
 */

export default {
  WEATHER_API: process.env.REACT_APP_API_KEY || 'himitsudaze'
}
