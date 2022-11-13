import logo from './logo.svg';
import './App.css';
import Main from './components/List/Main';
import {Table} from './components/List/Table';
import {MyTable} from './components/List/MyTable';
import { useState, useRef, useEffect } from 'react';
import Error from './components/List/Error';
let items = [];

function App() {

  const [qty, setQty] = useState([]);
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
  }, []);

  const [it, setItem] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [tr, setTr] = useState(false);
  const [counter, setCounter] = useState(1);

  const [data, setData] = useState({
    it: '',
    inputValue: ''
  });

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
      attribute: "title"
  },
  {
      attribute: "author"
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
  return(
    <div>
          <Table data={data1} columns={columns} filters={todosFilter} />
          <MyTable baseUri={`http://localhost:3004/posts/` + counter} columns={columnsPostsTable} />
          <button className='common_btn' onClick={reduseId}>{`<`}</button>
          <button className='common_btn' onClick={increaseId}>{`>`}</button>
    </div>
  )
}

  return (
    <div className="App">
          {node()}
    </div>
  );
}

export default App;
