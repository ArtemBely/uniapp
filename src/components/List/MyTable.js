import { Table } from './Table';
import { useState, useEffect } from 'react';

export const MyTable = ({ baseUri, columns, deleteOne }) => {

  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [showDisplay, setShowDisplay] = useState(false);

  const fetchData = async () => {
    return await fetch(baseUri)
        .then((res) => { return res.json(); })
        .then((info) => { setState(info) })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [baseUri])

  const editOne = async() => {
      return await fetch(`http://localhost:3004/posts/${state.id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
              id: state.id,
              name: name,
              lastname: lastname,
              completed: state.completed
            }
        )
      })
      .then(() => fetchData())
      .then(res => res.json())
      .catch(err => console.log(err))
  }


    return(
      <div>
          <Table data={state} columns={columns} />
          <button onClick={deleteOne} style={{ marginTop: '20px' }}>Change</button>
          <button style={{ marginTop: '20px' }} onClick={() => { setShowDisplay(true) }}>Edit</button>
          <div style={{ display: showDisplay ? 'grid' : ' none' }}>
              <button onClick={() => { setShowDisplay(false) }}>CLOSE</button>
              <input type='text' placeholder={state.name} required onChange={(e) => { setName(e.target.value) }}/>
              <input type='text' placeholder={state.lastname} required onChange={(e) => { setLastName(e.target.value) }}/>
              <button onClick={editOne}>Edit</button>
          </div>
      </div>
    )
}
