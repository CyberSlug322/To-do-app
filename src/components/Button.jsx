import React from "react";
import { fetchFakeApi } from "../redux/actions/asyncActions";
import { connect } from "react-redux";


const Button = ({ dispatch }) => {

const onClick = () => {   
    dispatch(fetchFakeApi());
}
    return (
        <button onClick={onClick}>
            Fetch todo
        </button>
    )
    };


export default connect()(Button);
