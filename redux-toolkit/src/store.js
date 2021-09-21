import {createStore} from 'redux';
import {createAction,createReducer, configureStore, createSlice} from "@reduxjs/toolkit"


// //toolkit의 creatorAction으로 아래읰 코드들을 대체 
// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE")


// // const ADD = "ADD";
// // const DELETE = "DELTE";

// //action creator
// // const addToDo = (text) => {
// //     return {
// //         type : ADD,
// //         text
// //     };
// // };

// //  const deleteToDo = (id) => {
// //     return {
// //         type : DELETE,
// //         id : parseInt(id)
// //     };
// // };

// //toolkit으로 reducer 만들떈 state를 변경 할 수 있다. 
// //return은 새로운 state를 반환할때 하는 것,
// //toolkit - reducer는  state를 변경하는것이기 때문에 return 하지 않음 

// //현재 state = [] (비어있는 배열 )
// const reducer = createReducer([], {
//     [addToDo] : (state, action) => {
//         state.push({text:action.payload, id: Date.now()}); //push : 비어있는 배열에 새로운 값을 넣어준다.(새로운 배열 리턴 x) 중괄호 감쌈 () => {}
//     },
//     [deleteToDo] : (state, action) => 
//         state.filter(toDo => toDo.id !== action.payload)//filter : 새로운 배열을 리턴함 중괄호 안쌈 () => 
// });


// //리듀서
// // const reducer = (state = [], action) => {
// //     switch(action.type) {
// //         case addToDo.type:
// //             return [{text: action.payload, id : Date.now()}, ...state]; //인자값이 아닌 payload로 전달
// //         case deleteToDo.type:
// //             return state.filter(toDo => toDo.id !== action.payload); //action은 createAction 함수로 만들어지기 때문에 더이상 id를 갖고 있지 않아 payload로 변경 
// //         default:
// //             return state;
// //     }
// // };


//createSlice를 이용하여 reducer와 createAction을 합침
const toDos = createSlice({
    name:'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({text: action.payload, id: Date.now()});
        },
        remove : (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }

})

const store = configureStore({reducer: toDos.reducer})

//slice에서 action까지 제공해줌 
export const {
    add,
    remove
} = toDos.actions



// const store = configureStore({reducer})

// //스토어 생성
// // const store = createStore(reducer);


// export const actionCreatores = {
//     addToDo,
//     deleteToDo
// }


export default store;