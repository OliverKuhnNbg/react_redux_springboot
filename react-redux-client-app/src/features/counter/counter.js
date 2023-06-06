import React from "react";
import { useDispatch, useSelector } from "react-redux";

/** import actions */
import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
    /** get init State from redux store via store selector */
    const counter = useSelector((state) => state.counterReducer.value);
    const dispatch = useDispatch();

    const mystyle = {
        margin: "10px",
    };

    return (
        <section>
            <p>{counter}</p>
            <div>
                <button onClick={ () => dispatch(increment()) }>+</button>
                <button onClick={ () => dispatch(decrement()) }>-</button>
            </div>
            <div style={mystyle}>
                <button onClick={ () => dispatch(incrementByAmount()) }>By Amount</button>
            </div>
        </section>
    )
}

export default Counter;