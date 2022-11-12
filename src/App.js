import Markbox from './components/Markbox';
import Screen from './components/Screen';
import {useState} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState("");
  const getValue =e =>{
    setData(e);
  }
  return (
    <div className="App">
     <div className='Inside-App'>
      <Markbox getValue={getValue}/>
      <Screen data={data}/>
     </div>
    </div>
  );
}

export default App;
