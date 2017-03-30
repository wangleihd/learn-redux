// reducer 有2个参数
// 1. action (发生了什么的信息)
// 2. a copy of current state

function posts(state = [], action) {
  switch( action.type ){
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1),
      ];
    default:
      return state;
  }  
}

export default posts;
