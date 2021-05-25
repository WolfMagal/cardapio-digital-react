import React from 'react';
import './global.css';
import Routes from './routes';
//import Logon from './pages/Logon';
//import Header from './Header';
// JSX (Javascript + XML)

function App() {
   //useState : retorna um Array com 2 posições
   // Array[valor, funcaoDeAtualização]
  //let counter = useState(0);
  /*
  const [counter, setCounter] = useState(0);
 
  function increment(){
   setCounter(counter + 1);
    console.log(counter);
  }
  */
  return (
    <Routes />
    // <Logon />

//    <Header>Semana Omnistack</Header> 
// <div>
//<Header>Contador: {counter}</Header> 
// <button onClick={increment}>Incrementar</button>
//  </div> 

  );
}

// Edit <code>src/App.js</code> and save to reload.
//function App() {
//  return (
//    <Header title="Semana Omnistack" />
//  );
//}

export default App;
