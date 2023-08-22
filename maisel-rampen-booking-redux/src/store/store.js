import {configureStore} from '@reduxjs/toolkit';

import eventBookingReducer from '../features/eventbookingform/eventBookingSlicer';

export const store = configureStore({
    reducer: {
        eventBookingReducer: eventBookingReducer
    }
})