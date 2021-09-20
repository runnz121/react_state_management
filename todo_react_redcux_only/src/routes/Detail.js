import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return { toDo: state.find(toDo => toDo.id === parseInt(id)) }; //params의 id 와 같은 첫번쨰 값을 반환 
}

export default connect(mapStateToProps)(Detail);