const authReducer = (state = { idToken: null,isLoading:false, trigger : 1 }, action) => {
    switch (action.type) {  
      case 'LOGOUT':
        return { ...state, idToken: null};
        
      case 'START_LOADING':
        return { ...state, isLoading:true};
      
      case 'END_LOADING':
            return { ...state, isLoading:false};
      default:
        return state;
    }
  };
  
export default authReducer ;