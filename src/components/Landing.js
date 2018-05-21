import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/recipes';

class Landing extends React.Component {
  render() {
    const recipes = this.props.recipes.recipe.map((rep, i)=>{
      if (rep.name===this.props.active.activeRecipe){
        return <div key={i}>
          <li>  <p>{rep.name} - {rep.about} </p> </li>
        </div>
      }else{
        return <div
            onClick={()=>this.props.changeCurrent(rep.name)}
            key={i}> {this.props.active.activeRecipe}
        </div>
      }
    });

    return (
        <div className="recipes inline">
        <ul>  {recipes} </ul>
        </div>
    );
  };
}


const mapStateToProps = (state) =>{
  return{
   active:state.active,
   recipes: state.recipes
  }
};

export default connect (mapStateToProps, actions)(Landing)