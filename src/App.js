import React from "react"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"

function App() {
    return (
        <div>

            <Header />

            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default App