import React from 'react'
import { actionCreatores } from '../store';
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// onBtnClick, 
function ToDo({text,onBtnClick, id}) {

// const dispatch = useDispatch();

// const onBtnClick = () => {
//     dispatch(actionCreatores.deleteToDo(id))
// }

    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

// export default ToDo;



//삭제 처리를 위해 dispatch 전달 
function mapDispatchToProps(dispatch, ownProps){
    return {
        onBtnClick : () => dispatch(actionCreatores.deleteToDo(ownProps.id)) //콘솔로그 찍어보면 ownprops는 state 초기값과 id를 받아올 수 있음 
    }
}

export default connect(null, mapDispatchToProps) (ToDo);

//클릭시 onBtnClick 함수 호출, -> 이 함수는 dispatch로 store.js의 action.creatores의 deleteTod
// -> deleteTodo는  type :DELETE, id : parsein(id)로 이 액션은 reducer로 전달
// -> reducer에서 액션 처리후 filtering된 상태를 반환하고 이 반환값을 ToDO 컴포넌트의 props로 추가함