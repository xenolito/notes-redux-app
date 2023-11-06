import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { noteReducer } from './reducers/noteReducer'
import { Provider } from 'react-redux'
import App from './App'
// import './index.css'
// import './App.scss'



const store = createStore(noteReducer)

// store.dispatch({
//   type: '@note/created',
//   payload: {
//     content: 'Aprendiendo Redux',
//     important: false,
//     id: 1

//   }
// })

// store.dispatch({
//   type: '@note/created',
//   payload: {
//     content: 'Seguimos aprendiendo',
//     important: true,
//     id: 2

//   }
// })



const root = createRoot(document.getElementById('root'))



root.render(
  <Provider store={ store}>
    <App />
  </Provider>
)

