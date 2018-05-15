export default function todos(state = [], action) {

  switch (action.type) {
    case 'ADD_TODO':
      //add todo
      return [ ...state, { id: Math.random(), text: action.text }];
    
    default:
      return state;
  }

}