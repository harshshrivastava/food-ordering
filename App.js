import React from "react"
import ReactDOM from "react-dom/client"

var FunctionComponent = () => (
    <div id="container">
        <h1>React Functional Component.</h1>
    </div>
)


var root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FunctionComponent />)