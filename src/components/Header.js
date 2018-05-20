import React from 'react';
import {connect} from 'react-redux';


const Header = (props)=>{
  return (
      <header>
        <h1>{props.recipes.title}</h1>
      </header>
  );
};

const mapStateToProps = (state)=>{
  return{
    recipes:state.recipes
  }
};


export default connect(mapStateToProps)(Header)