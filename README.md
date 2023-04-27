For setup, run
- npm install

packages used in this project 
1 - redux
2 - react-redux
3 - material UI

Counter Using React Redux
- define the actions (increment and decrement)
- define the reducer for increment which include state and action.
- define in reducer what action will do.
- then combine the reducer to rooteducer using combineReducer hook
- create the store using createStore hook and pass the root reducer to store
- to call the data in app.js => use the react-redux useSlector and useDispatch
- useSelector => get the state form reducer
- useDispatch => trigger the actions