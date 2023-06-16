import React, { useState } from 'react'
import DateTimePicker from '../dropdowndatetimepicker/DateTimePicker';
import { add, format } from 'date-fns';


function DateTimePickerParent() {

    const [startDate, setStartDate] = useState(null);

    
    return (
        <div>
            <h2>DateTimePickerParent</h2>
            <DateTimePicker setDate = {setStartDate} />
            
            <p className='my-3'>{startDate ? (format(startDate, 'dd.MM.yyyy - kk:mm') + ' Uhr') : ''}</p>
            
        </div>
    )
}

export default DateTimePickerParent