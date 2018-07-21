import React from 'react'

// class Weather extends React.Component {
//   render() {
//     return (
//       // asdf
//       //
//       <div>
//         {this.props.city &&
//           this.props.country && (
//             <p>
//               Location: {this.props.city}, {this.props.country}
//             </p>
//           )}
//         {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Conditions: {this.props.description}</p>}
//         {this.props.error && <p> {this.props.error}</p>}
//       </div> // Question_6 :: Now we can get the returned value from our API, but above code will display the text eventhough we didn't press the submit button. How do we solve that ?

//       /*
//       Answer_6 :: Dont code it like this,,
//       if (this.props.temperature === true) {}

//       ==> Because, if-else statement or all these pure JavaScript things doesn't exist in React ! They are not allowed in React !

//       ==> Use And Operator(Conditional Operator or short circuit operators)
//       https://stackoverflow.com/questions/40682064/what-does-operator-indicate-with-this-props-children-react-cloneelemen
//       */
//     )
//   }
// }

const Weather = props => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {} {props.city}, {props.country}
          </span>
        </p>
      )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:{' '}
        <span className="weather__value"> {props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value"> {props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Conditions: <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error"> {props.error}</p>}
  </div>
)

export default Weather
