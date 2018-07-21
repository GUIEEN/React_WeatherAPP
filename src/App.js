import React from 'react'

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

import configuration from './configuration'
const API_KEYS = configuration.WEATHER_API

class App extends React.Component {
  /*
      Deprecated in react 16

      constructor(props) {
        super(props)
        this.state = {
          
        }
      }
  */
  state = {
    // Answer_3 :: Initializing the state
    temperature: undefined, // undefined :: state is going to change once we press the button in the future.
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  } // Question_4 :: Now that we have all this defined, how do we actually make sure that this state contains whatever we get back from the API ?

  /*
  Arrow function were not allowed inside of react components
  until react 16 arrived. But arrow functions basically allow you to use
  `this` keyword independently.

  before the version 16,

  ```js
  constructor() {
    this.getWeather = this.getWeather.bind(this)
  }
  getWeather() {

  }
  ```

  `fetch` method is newer method in JS
  */
  getWeather = async e => {
    e.preventDefault() // disable refreshing browser when submit button is clicked
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    if (city && country) {
      console.log(city, country)
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEYS}&units=metric`
      )
      const data = await api_call.json() // Question_2 :: After get this value, I want to display this value on the screen !! How we can do that ??? ---> `state`
      // Answer_2 :: `state` is an object that lives within a component and it's responsible for keeping track of changing data within a component. So that change could be the result of the user interaction( clicking a button, submitting a form, ...). But generally it's interaction with the application that causes the data change.

      // Question_3 :: Then, How do we initialize the state ??

      console.log(data)

      /*
        Answer_4 ::
        you might do it like
        this.state.temperature = data.blahblahblah
        but DON'T EVER DO THAT !
        **DON'T EVER DIRECTLY MANIPULATE THE STATE**
        **USE A METHOD CALLED `setState()`**
       */

      this.setState({
        temperature: data.main.temp, // Answer_4 :: Now we have successfully updated the value of our temperature state once we press the button !
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      }) // Question_5 :: Now that we are actually getting this response, how do we actually make sure that the value of all these states is displayed on the screen ? ---> `Weather Component`
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the value.'
      })
    }
  } // Question_1 :: How do we actually make sure that this function gets called ?? --> `prop`
  // Answer_1 :: props are pretty much like HTML attributes, So you can name them whatever you want !

  render() {
    // return JSX need babel
    // NOTE :: JSX only return one parent element, cannot return another div or p !
    // So, anything that you want to return has tobe within one single div
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  {/* Answer_1 :: getWeather is prop, and this allows `Form` can use this method */}
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
