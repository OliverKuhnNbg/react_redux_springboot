import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ToDoListEntry } from './ToDoListEntry';
import { addEntry } from './toDoListSlicer';

function ToDoList() {
    
    const toDoList = useSelector((state) => state.toDoListReducer.toDoList);
    const curTask = useSelector((state) => state.toDoListReducer.task);
    const dispatch = useDispatch();
    console.log(toDoList);
    console.log(curTask.title);
    
    const [title, setTitle] = useState(curTask.title);
    const [task, setTask] = useState(curTask.task);

    const mystyle = {
        marginTop: "5px",
        marginBottom: "0px",
        textAlign: "center",
    };

    const listStyle = {
        minWidth: "400px",
        maxWidth: "600px",
        textAlign: "left",
        paddingLeft: '650px'
    };

    return (
        <div>
            <div>
                <h1>Liste: </h1>
            </div>
            <div>
                {toDoList.length}
            </div>
            <div style={mystyle}>
                <ul style={listStyle}>
                    {toDoList.map((item) => <ToDoListEntry title={item.title} task={item.task} />)}
                </ul>
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
                            setTask(e.target.value);
                        }}
                        placeholder="Title"
                        required
                    /><br/><br/>
                    <button onClick={ (e) => {
                        dispatch(addEntry({title: title, task: task}));
                        setTask("");
                        setTitle("");
                    } }>
                        Sumbit Form
                    </button>
                </div> 
            </div>
        </div>
    )
}


export default ToDoList