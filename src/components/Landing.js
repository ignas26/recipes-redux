import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/recipes';

const Landing = (props) =>{


    return (
        <div className="recipes inline">
          { props.active.name?
        <div className="recipes-name">
          {props.active.name}
        </div> : props.recipes.warning}
          <div className="recipes-about">
          {props.active.about}
        </div>
        </div>
    );
  };

const mapStateToProps = (state) =>{
  return{
   active:state.active,
   recipes: state.recipes
  }
};

export default connect (mapStateToProps, actions)(Landing)