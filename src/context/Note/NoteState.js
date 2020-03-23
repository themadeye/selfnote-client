import React, { useReducer } from 'react';
import axios from 'axios';
import NoteContext from './NoteContext';
import NoteReducer from './NoteReducer';
import methods from '../methods';


const INSTRUCTOR = "v1";
const COURSE_API_URL = "http://localhost:8080";
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/madeye/${INSTRUCTOR}`;

console.log('NoteState');
const NoteState = props => {
    const initialState = {
        returnData: {},
        loading: false
    };

    const [state, dispatch] = useReducer(NoteReducer, initialState);

    const getNote = async() => {
        let res = await axios.get(`${INSTRUCTOR_API_URL}/note`);
        console.log('response', res);
        return dispatch({
            type: methods.GET_NOTE,
            payload: res.data
        });
    };

    return(
        <NoteContext.Provider
            value = {{
                returnData: state.returnData,
                getNote
            }}
        >
            {props.chilren}
        </NoteContext.Provider>    
    )
};

export default NoteState;