import {
  useEffect,
  useReducer,
  createContext,
 } from 'react';

 import {
  useNavigate
 } from "react-router-dom"

import { Paths } from './Components/Routes';

export const ApplicationContext = createContext();

const initialState = {
  loggedIn : false,
  user : null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP' :
      return {
        ...state,
        loggedIn : true,
        user : action.payload
      };
    case 'LOGIN' :
      return {
        ...state,
        loggedIn : true,
        user : action.payload
      };
    case 'LOGOUT' :
      return {
        ...state,
        loggedIn : false,
        user : null
      };
    default :
      return state
  }
}


function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/me').then(r => {
      if (r.ok) {
        r.json().then(user => {
          dispatch({
            type : 'LOGIN',
            payload : user
          })
          navigate('/')
        })
      }
    })
  },[navigate])

  return (
      <div
        className="font-main text-2xl min-h-screen min-w-screen items-center space-y-4 bg-neutral-900 text-rose-100 overflow-hidden leading-loose tracking-wide">
          <ApplicationContext.Provider value={{ state, dispatch}}>
             <Paths />
          </ApplicationContext.Provider>
      </div>
  );
}

export default App;
