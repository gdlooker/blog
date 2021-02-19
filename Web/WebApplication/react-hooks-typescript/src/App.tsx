import React, { useContext, createContext } from 'react';
import UserContextHook from './components/context/UserContextHook'
import UseStateExample from './components/useState/UseStateExample'
import './App.css';

//如果需要2个组件之间共享状态可以使用useContext
function App() {
  return (
    <>
      <div className="App">
        <div className="content">
          <UserContextHook />
          <UseStateExample />
        </div>
      </div>
    </>

  );
}
export default App;
