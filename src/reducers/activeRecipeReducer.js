import {MAKE_ACTIVE} from "../actions/types";

const initialState= {
  name: '',
    about: ''};

const activeRecipeReducer = (state=initialState, action)=>{
  if(action.type===MAKE_ACTIVE){
    return action.payload;
  }else{
    return state;
  }
};

export default activeRecipeReducer