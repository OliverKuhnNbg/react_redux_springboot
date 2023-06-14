import React, {Component} from 'react'

import { Calendar as BigCalendar, momentLocalizer, Views as CalendarViews } from 'react-big-calendar';
import moment from 'moment';
import { getCurrentDayDate } from '../../util';
const localizer = momentLocalizer(moment);

class MaiselBaseCalendar extends Component {

    render() {
        return (
            <div className="calendar-wrapper">
                <BigCalendar
                    localizer={localizer}
                    events={this.props.events}
                    step={60}
                    defaultDate={getCurrentDayDate()}
                    popup={false}
                    onShowMore={(events, date) => this.setState({ showModal: true, events })}
                />
            </div>
        );
    }
}

export default MaiselBaseCalendar;


