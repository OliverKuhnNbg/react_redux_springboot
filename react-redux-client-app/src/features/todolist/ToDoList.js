import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { addEntry } from './toDoListSlicer';

//const counter = useSelector((state) => state.ToDoListReducer.toDoList);
//const dispatch = useDispatch();
function ToDoList() {
    
    const toDoList = useSelector((state) => state.toDoListReducer.toDoList);
    const curTask = useSelector((state) => state.toDoListReducer.task);
    const dispatch = useDispatch();
    console.log(toDoList);
    console.log(curTask.title);
    /** from sumbit method 
    handleFormSubmit(event) {
        console.log(test);
        const toDoEntry = {title: event.target.title.value, task: event.target.task.value}
        console.log('\n filld object');
        console.log(toDoEntry);

        event.preventDefault();
    }*/
        

        const [title, setTitle] = useState(curTask.title);
        const [task, setTask] = useState(curTask.task);
        
        return (
            <div>
                <div>
                    <h1>Liste: </h1>
                </div>
                <div>
                    {toDoList.length}
                </div>
                <div>

                </div>

                <div>
                    <h1>Formular: </h1>
                </div>
                <div>
                    <div >
                        <label for="fname">Title: </label>
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => {
                                console.log(title)
                                setTitle(e.target.value);
                            }}
                            placeholder="Title"
                            required
                        /><br/><br/>

                        <label for="lname">Task: </label>
                        <input type="text"
                            name="task"
                            value={task}
                            onChange={(e) => {
                                console.log(task)
                                setTask(e.target.value);
                            }}
                            placeholder="Title"
                            required
                        /><br/><br/>
                        <button onClick={ (e) => {
                            
                            dispatch(addEntry({title: title, task: task}));

                            
                        } }>By Amount</button>
                    </div> 
                </div>
            </div>
        )
}


export default ToDoList