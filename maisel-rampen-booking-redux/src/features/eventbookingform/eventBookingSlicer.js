import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calendarEventFullEntry : {
        type: '',
        notes: '',
        orderNumbers: '',
        carrierService: '',
        supplier: '',
        TruckClassification: '',
        truckPlateId: '',
        packagingUnit: '',
        startTime: '',
        endTime: ''
    },
    calendarEventEntry: {
        startDate: '', 
        endDate: ''
    }
}

export const eventBookingSlice = createSlice({
    name: 'eventBookingForm',
    initialState,
    reducers: {
        addFormEntry: (state, action) => {
            if (action.payload.type !== ""){
                console.log("test not empty");
                console.log(action.payload);
                console.log(action.payload.type);
                console.log(action.payload.notes);
                console.log(action.payload.orderNumbers);
                console.log(action.payload.carrierService);
                console.log(action.payload.supplier);
                console.log(action.payload.truckClassification);
                console.log(action.payload.truckPlateId);
                console.log(action.payload.packagingUnit);
                console.log(action.payload.startDate);
                console.log(action.payload.endDate);

                state.calendarEventFullEntry = action.payload
                let eventTime = {
                    startDate: action.payload.startDate, 
                    endDate: action.payload.endDate
                }
                state.calendarEventEntry = eventTime;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addFormEntry } = eventBookingSlice.actions
  
/** export full reducer */
export default eventBookingSlice.reducer