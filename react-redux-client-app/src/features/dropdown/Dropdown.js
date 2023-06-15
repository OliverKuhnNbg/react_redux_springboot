import React, { useState } from 'react'
import './dropdown.css'
import DateTimePicker from '../datetimepicker/DateTimePicker';
//import DateTimePicker from '../dropdowndatetimepicker/DateTimePicker';

function Dropdown() {

    const [showCheck, setShowCheck] = useState("false");

    return (
        <div className='row col-12'>
            <div className='btn-group'>
                <button 
                    type="button" className='btn btn-danger dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false"
                    onClick={ () => {
                        setShowCheck(!showCheck);
                    } }
                >
                    Date Picker
                </button>
                <ul className={"dropdown-menu " + (showCheck ? '' : 'show-element')}>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <DateTimePicker />
                </ul>
            </div>
        </div>
    )
}

export default Dropdown