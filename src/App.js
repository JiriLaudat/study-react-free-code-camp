import React from "react"
import Header from "./components/Header.js"

function App() {
    return (
        <div>

            <Header />

            <form>

                <input type="checkbox" />
                <p>option 1</p>

                <input type="checkbox"/>
                <p className="input">option 2</p>

                <input type="checkbox" />
                <p>option 3</p>

                <input type="checkbox" />
                <p>option 4</p>

                </form>
        </div>
    )
}

export default App