import { useEffect, useRef, useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

export default function Main(props) {

const [counrty, setCountry] = useState();
const [count, setCount] = useState(false);

useEffect(() => {
  /*
  let inter = setInterval(() => {
      setCount((prev) =>  (prev + 1));
  }, 1000);

  if(count >= 3) {
    clearInterval(inter);
  }
*/
}, []);

const hey = useRef();
console.log(props.st, " doesn't work");
//(e) => hey.current.classList.toggle("clcl")
  return (
    <div className="App" ref={hey} style={{ background: "cadetblue", border: "1px solid" }}>
    {props.count + 1}
        <div>
            <img src={logo} id='logo1'/> {props.title.userId} {props.title.title} {props.title.completed}
            <button onClick={(e) => {
              if(count == 3) {
                  setCount(0);
                }
              setCount((prevState) => (prevState + 1))
            }}>{count}</button>
            <button onClick={() => {
              
            }}>X</button>
        </div>
    </div>
  );
}
