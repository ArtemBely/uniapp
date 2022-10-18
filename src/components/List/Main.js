import { useEffect, useRef } from 'react';
import logo from '../../logo.svg';

export default function Main(props) {

useEffect(() => { console.log(hey) });
const hey = useRef();

  return (
    <div className="App" ref={hey} onClick={(e) => e.target.remove()}>
        <div>
            <img src={logo} id='logo1'/>  {props.title} {props.description}
        </div>
    </div>
  );
}
