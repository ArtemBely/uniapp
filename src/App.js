import logo from './logo.svg';
import './App.css';
import Main from './components/List/Main';
import { Table } from './components/List/Table';
import { MyTable } from './components/List/MyTable';
import { About } from './components/List/About';
import { Info } from './components/List/Info';
import { useState, useRef, useEffect } from 'react';
import Error from './components/List/Error';


import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

let items = [];

function App() {

  const [qty, setQty] = useState([]);
  const [stav, setStav] = useState([]);
  const [ct, setCt] = useState(0);

  const fetchData = async() => {
    const response = await fetch('http://localhost:3004/posts')
        .then((res) => { return res.json(); })
        .then((res) => setQty(res))
        .then((res) => qty.map(item => setCt((prevState) => (prevState + 1))))
        .catch((err) => console.log(err))
  }

  useEffect(() => {
        fetchData();
        if(typeof window != "undefined") {
          setCounter(parseInt(window.location.pathname.split('/').pop()))
        }
  }, []);

  const [it, setItem] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [tr, setTr] = useState(false);
  const [counter, setCounter] = useState(1);

  const [data, setData] = useState({
    it: '',
    inputValue: ''
  });

  const deleteOne = () => {
    return fetch(`http://localhost:3004/posts/${counter}`, {
      method: "DELETE"
    })
    .then(res => res.json())
  }

  const changeOne = async() => {
      return await fetch(`http://localhost:3004/posts/${counter}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
              id: counter,
              name: "user " + counter,
              lastname: "lastname " + counter,
              completed: !qty[counter - 1].completed
            }
        )
      })
      .then(() => fetchData())
      .then(res => res.json())
      .catch(err => console.log(err))
  }

const data1 = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 2,
      "id": 2,
      "title": "another item",
      "completed": true
    }
];

const columns = [
    {
        attribute: "title"
    },
    {
        attribute: "id",
        component: (item) => <button>{item.id}</button>
    }
];

const columnsPostsTable = [
  {
      attribute: "name"
  },
  {
      attribute: "lastname"
  },
  {
      attribute: "id",
      component: (item) => <button>{item.id}</button>
  }
];

const todosFilter = [
  {
    title: "Active",
    func: (data) => { data1.sort((a, b) => { return a.title - b.title }); }
  }
]

const increaseId = () => {
  if (counter < qty.length) { setCounter((prevState) =>  (prevState + 1 )); }
}

const reduseId = () => {
  if (counter > 1) { setCounter((prevState) =>  (prevState - 1 )); }
}

const node = () => {
  if(typeof window != "undefined") {
    return(
      <div>
            <MyTable baseUri={`http://localhost:3004/posts/` + counter} columns={columnsPostsTable} deleteOne={changeOne}  />
            <NavLink to={`/users/${counter - 1}`} className='common_btn' onClick={reduseId}>{`<`}</NavLink>
            <NavLink to={`/users/${counter + 1}`} className='common_btn' onClick={increaseId}>{`>`}</NavLink>
            <NavLink to='/hello' style={{ color: "white" }}>About</NavLink>
            <NavLink to='/details' style={{ color: "white" }}>Details</NavLink>
            <NavLink to={`/users/${counter}`} style={{ color: "white" }}>Users</NavLink>
      </div>
    )
  }
}

  return (
    <div className="App">

        <Router>
                  <Routes>
                          <Route exact path="/" element={<Info counter={counter}/>} />
                          <Route path="/users/:id" element={node()} />
                          <Route path="/hello" element={<About />} />
                  </Routes>
        </Router>

    </div>
  );
}

export default App;
