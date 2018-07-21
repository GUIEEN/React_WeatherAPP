import dotenv from 'dotenv'

dotenv.config()

export default {
  WEATHER_API: process.env.APP_KEY || 'himitsudaze'
}
