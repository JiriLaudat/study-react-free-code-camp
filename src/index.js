import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
  return (
    <ul>
      <li>ham</li>
      <li>cheese</li>
      <li>bread</li>
      <li>salad</li>
  </ul>
  )
}

ReactDOM.render( 
  <MyApp />,
  document.getElementById('root'))