import {CHANGE_CURRENT, MAKE_ACTIVE} from "../actions/types";

const initialState= {
//activeRecipe:['Šaltibarščiai', 'Sriuba', 'Blynai', 'Lazanija', 'Duona']
activeRecipe:''
};

const activeRecipeReducer = (state=initialState, action)=>{
  switch (action.type){
    case MAKE_ACTIVE : return {...state, activeRecipe:action.payload};
    case CHANGE_CURRENT : return {...state, activeRecipe:action.payload};
    default : return state
  }
};

export default activeRecipeReducer