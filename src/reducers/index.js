//reducers/index.js

import {ADD_ARTICLE} from "../constants/action-types"

const initialState = {
    articles:[]
};

function rootReducer(state=initialState, action){
    debugger;
    if(action.type === ADD_ARTICLE){
        debugger;
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    }
    return state;
};

export default rootReducer;
