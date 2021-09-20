import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";




//action type을 반환하는 객체 -> actionCreator
const addToDo = text => {
  return {
      type : ADD_TODO,
      text
  };
};


const deleteTodo = id => {
  return {
      type : DELETE_TODO,
      id
  };
};


//리듀서부분
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
        //리펙토링 부분 
        const newTodoObj = {text: action.text, id : Date.now()}
      return [newTodoObj, ...state];
    case DELETE_TODO:
        const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};


//스토어 생성
const store = createStore(reducer);
//스토어 구독
store.subscribe(() => console.log(store.getState()));



//디스패치 부분
const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteTodo(id))
}


//적용함수 
const paintToDos = () => {
  const toDos = store.getState();
  //repaint시 모든것을 다 비우고(list)
  ul.innerHTML = "";

  //state에 있는 각각의 toDo를 이용해서 새로운 list를 만든다 
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteTodo)

    li.id = toDo.id;
    li.innerText = toDo.text;

    li.appendChild(btn);
    ul.appendChild(li);

  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value; //들어온 값
  input.value = "";
  dispatchAddToDo(toDo);
};


form.addEventListener("submit", onSubmit);