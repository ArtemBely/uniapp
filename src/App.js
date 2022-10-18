import logo from './logo.svg';
import './App.css';
import Main from './components/List/Main';
import { useState, useRef } from 'react';
import Error from './components/List/Error';
let items = [];

function App() {

  const [it, setItem] = useState([]);
  const [inputValue, setInputValue] = useState();
  const inp = useRef();
  const sel = useRef();
  const err = useRef();

  const vloz = () => {
      if(inp.current.value.length < 5) {
        console.log("Min length is 5");
        err.current.classList.add('bl');
      }
      else {
        items.push({ title: inp.current.value, description: sel.current.value });
        setItem([...items]);
        console.log(items);
        err.current.classList.remove('bl');
      }
  }

  const ret = () => {
      return (
        <div>
            {items.map((item, index) =>
                <Main key={index} title={item.title} description={item.description}/>
             )}
         </div>
      )
  }

  return (
    <div className="App">
          <p style={{ fontWeight: 'bolder' }}>Seznam</p>
          <input type='text' ref={inp} className='main_inp' placeholder="Type the name"/>
          <select className="select_btn" ref={sel}>
              <option defaultValue disabled>Choose the type</option>
              <option>Keeper</option>
              <option>Guarder</option>
              <option>Defencer</option>
          </select>
          <button onClick={vloz} id="main_btn">Vloz</button>
            {ret()}
          <div className='err' ref={err}><Error /></div>
    </div>
  );
}

export default App;
