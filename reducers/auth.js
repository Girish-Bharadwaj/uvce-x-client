const authReducer = (state = { idToken: null,isLoading:false, trigger : 1 }, action) => {
    switch (action.type) {  
      case 'LOGIN':
        return{...state, trigger : 2};
      case 'LOGOUT':
        return { ...state, idToken: null,trigger:3};
        
      case 'START_LOADING':
        console.log('started')
        return { ...state, isLoading:true};
      
      case 'END_LOADING':
            return { ...state, isLoading:false};
      default:
        return state;
    }
  };
  
export default authReducer ;