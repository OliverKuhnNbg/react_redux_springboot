import React from 'react'


class ToDoList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {title: '', task: ''};

        //this.handleSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleFormSubmit(event) {
        const toDoEntry = {title: event.target.title.value, task: event.target.task.value}
        console.log('\n filld object');
        console.log(toDoEntry);

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Liste: </h1>
                </div>
                <div>

                </div>

                <div>
                    <h1>Formular: </h1>
                </div>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
                        <label for="fname">Title: </label>
                        <input type="text"   name="title"/><br/><br/>

                        <label for="lname">Task: </label>
                        <input type="text" id="lname" name="task" /><br/><br/>
                        <input type="submit" value="Submit" />
                    </form> 
                </div>
            </div>
        )
    }
}

export default ToDoList