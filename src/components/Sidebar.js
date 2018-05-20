import React from 'react';
import {connect} from "react-redux";

const Sidebar = (props)=>{
  const sidebar = props.recipes.recipe.map((rep, i)=>{
    return (
        <li key={i}> <h2> {rep.name} - {rep.about}</h2> </li>
  )
}
);


  return (
      <div>
        <ul>
        {sidebar}
        </ul>
      </div>
          )
};


const mapStateToProps = (state)=> {
  return {
    recipes: state.recipes
  }
};

  export default connect(mapStateToProps)(Sidebar)
