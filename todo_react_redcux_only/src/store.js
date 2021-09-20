import {createStore} from 'redux';

const ADD = "ADD";
const DELETE = "DELTE";


//action creator
const addToDo = (text) => {
    return {
        type : ADD,
        text
    };
};

 const deleteToDo = (id) => {
    return {
        type : DELETE,
        id : parseInt(id)
    };
};

//리듀서
const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [{text: action.text, id : Date.now()}, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};

//스토어 생성
const store = createStore(reducer);

export const actionCreatores = {
    addToDo,
    deleteToDo
}


export default store;