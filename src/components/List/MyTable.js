import { Table } from './Table';
import { useState, useEffect } from 'react';

export const MyTable = ({ baseUri, columns }) => {

  const [state, setState] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    return await fetch(baseUri)
        .then((res) => { return res.json(); })
        .then((info) => { setState(info) })
        .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [baseUri])

    return(
      <div>
          <Table data={state} columns={columns} />
      </div>
    )
}
