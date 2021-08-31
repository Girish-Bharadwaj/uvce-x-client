const feedReducer = (state = { isLoading:false, homePosts : [] }, action) => {
    switch (action.type) {  

      case 'START_LOADING':
        return { ...state, isLoading:true};
      case 'END_LOADING':
            return { ...state, isLoading:false};
      case 'GET_HOME_FEED' : 
            return {...state, homePosts : action.payload};
      default:
        return state;
    }
  };
  
export default feedReducer ;