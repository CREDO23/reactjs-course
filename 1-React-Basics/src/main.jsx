import  ReactDOM  from "react-dom/client"

// Our component
function HelloWorld () {
    return <h2>Hello World</h2>
}

// The root HTML element
const rootElement = document.getElementById("root")

// The root node of the application
const root = ReactDOM.createRoot(rootElement)


root.render(<HelloWorld></HelloWorld>)