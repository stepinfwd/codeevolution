import React from "react";
import { connect } from "react-redux";
import {buyCake} from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>No Of Cakes:{props.noOfCakes}</h2>
      <button onClick={props.buyCake}>BuyCake</button>
    </div>
  );
}
function mapStateToProps(state) {
  return { noOfCakes: state.cakeNumber };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps ,mapDispatchToProps)(CakeContainer);
