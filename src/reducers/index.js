//reducers/index.js

import {ADD_ARTICLE,DATA_LOADED} from "../constants/action-types"

const initialState = {
    articles:[],
    remoteArticles: []
};

function rootReducer(state=initialState, action){
    debugger;
    if(action.type === ADD_ARTICLE){
        debugger;
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
    }
    if(action.type === DATA_LOADED){
        debugger;
        return Object.assign({}, state, {
            articles: state.remoteArticles.concat(action.payload)
          });
    }
    return state;
};

export default rootReducer;
