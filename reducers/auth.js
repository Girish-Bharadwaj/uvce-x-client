const authReducer = (state = { accessToken: null ,isLoading:false }, action) => {
    switch (action.type) {
      case 'AUTH':
        console.log('called auth dispatch function')
        return { ...state, accessToken: action?.data};
  
      case 'LOGOUT':
        return { ...state, accessToken: null};
        
      case 'START_LOADING':
        return { ...state, isLoading:true};
      
      case 'END_LOADING':
            return { ...state, isLoading:false};
      default:
        return state;
    }
  };
  
  export default authReducer ;