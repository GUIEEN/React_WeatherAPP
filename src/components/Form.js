import React from 'react'

// class Form extends React.Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City..." />
//         <input type="text" name="country" placeholder="Country..." />
//         <button>Get Weather</button>
//       </form>
//     )
//   }
// } // But This Component is stateless component, which means they don't need all the functionality of React for just rendering some few UIs, so you don't need this React.Component !
/** For more decent code ! Improvement
  React Component can be a two types.
  1) Class based component
  2) Stateless functional component - they don't contain state!

  const Form = () => {
    return (
      <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
      </form>
    )
  } // But this got a problem, currently this not going to work
  Cannot read property 'getWeather' of undefined.
  => Since we have deleted the `Class` keyword, that means we cannot use `this` keyword anymore !
  => But it not ends after delete the `this` keyword, because we didn't give argument !

  const Form = (props) => {
    return (
      <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
      </form>
    )
  } // But remember, we only returning **One Single Element**, in this case is `div`
  Dot mistake having multiple elements, because at the end of the day, we only returning one single `root` element !

  const Form = (props) => (
    <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
    </form>
  ) // if you're only using one single argument, then,,

  const Form = props => (
    <form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button>Get Weather</button>
    </form>
  )

*/

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
)

export default Form
