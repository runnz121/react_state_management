import {createStore} from 'redux'


//오타 방지를 위해 action type을 한곳에 정의

const ADD = "ADD";
const MINUS = "MINUS"

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0

number.innerText = count;


//reducer 는 함수이며, data를 수정한다
//createstore는 인자로 reducer를 요구한다
//여기서는 count 를 수정함
//return 하는 것은 너의 data를 리턴
const countModifier = (count, action) => {

  //if else문을 switch로 변경
  switch (action.type) {
    case ADD:
      return count + 1
    case MINUS:
      return count -1
    default:
      return count;
  }


//action => count++, count-- 를 해주는 데이터를 변경시켜주는 형태
  // if (action.type == "ADD") {
  //   return count+1;
  // } else if (action.type === "MINUS"){
  //   return count -1;
  // }else{
  //   return count;
  // }
}



//createStore => state를 넣는 창고
//여기서 state ==  count 부분!!(바뀌는 부분)
//초기화된 값과 action을 불러온다.
const countStore = createStore(countModifier);

const onChange = () => {
  console.log("change!!");

}

//subscribe을 통해 store내에 변화가 있으면 감지함
countStore.subscribe(onChange);


//이런식으로 써도 되고 아니면 아래 MINUs처럼 써도 된다(버튼을 연결하는 방법)
const handleAdd = () => {
  countStore.dispatch({type:ADD})
}


//dispatch 를 버튼과 연결 
add.addEventListener("click", handleAdd);
minus.addEventListener("click", () => countStore.dispatch({type:MINUS}));



//action을 modifier에 호출하는 방법 -> dispatch 를 사용 
// countStore.dispatch({type:"ADD"})
// countStore.dispatch({type:"ADD"})
// countStore.dispatch({type:"ADD"})
// countStore.dispatch({type:"ADD"})
// countStore.dispatch({type:"MINUS"})


console.log(countStore.getState())



//---------기본형------------
// const reducer = () => {};
// const store = createStore(reducer);
// store.getState() => 해당 store에 담겨 있는 data를 리턴 













//---------------js-------------로 작성한부분//

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);