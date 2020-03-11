import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css"

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            todo: "",
            todos: []
        }

    }

    componentDidMount() {
        fetch("http://localhost:5000/todos")
        .then(response => response.json())
        .then(data => {
            this.setState({
                todos: data
            })
        })
    }

    addTodo = (event) => {
        event.preventDefault()
        console.log('I added a todo')
    }

    handleChange = (event) => {
        this.setState({
            todo : event.target.value
        })
    }

    render() {
        return(
            <div className="app">
                <h1>Todo List</h1>
                <form className="add-todo" onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder="Add Todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                    />
                    <button type="submit" >Add</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));