import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreatores } from "../store";
import ToDo from '../components/ToDo'

//store의 todos를 갖고옴(state)
//addToDo는 text를 인자로 받아서 store로 dispatch한것 
function Home({ toDos, addToDo}) {
  const [text, setText] = useState("");


  function onChange(e) {
    setText(e.target.value);
  }


  function onSubmit(e) {
    e.preventDefault();
    setText("");

    //addToDo 함수 실행 (mapdispatchtoprops 에 정의됨)
    addToDo(text)
  }


  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
         {toDos.map(toDo => (
             <ToDo {...toDo} key = {toDo.id} />
         ))}
      </ul>
    </>
  );
}


//App.js의 router를 통해 store.js 의 
//const reducer = (state = [], action) => 
//부분의 state(store의) 와 react-router를 통해 Home으로 전달받은 components의 ownprops를 받음 
// function getCurrentState(state,ownProps)
//  {
//     console.log(state, ownProps);
//  }

//  //connect를 통해서 store.js에서 home으로 state를 갖고올것 이다 
// export default connect (getCurrentState) (Home);
function mapStateToProps(state) {
    return {toDos: state};
}


//home.js에 입력하면, store.js의 reducer로 dispatch 시킨다.
function mapDispatchToProps(dispatch){
  //addTodo함수는 dispatch 시킴 
    return {
        addToDo: text => dispatch(actionCreatores.addToDo(text))
    }
}



// connect는 argument로 state와 dispatch를 가진다.
// ● mapStateToProps는 두 종류의 argument와 함께 호출되는 function이다.
// ▷ 첫번째 argument는 Redux store에서 온 state이다.
// ▷ 두번째 argument는 component의 props이다.

// ※connect()는 return한 것을 component의 prop에 추가해준다
export default connect(mapStateToProps, mapDispatchToProps)(Home);

