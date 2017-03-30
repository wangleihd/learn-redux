// reducer 有2个参数
// 1. action (发生了什么的信息)
// 2. a copy of current state

function posts(state = [], action) {
  console.log('the post will change');
  console.log(state, action);
  return state;
}

export default posts;