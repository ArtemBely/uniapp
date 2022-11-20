export const Table = ({ data, columns, filters }) => {
    return(
      <div>
          {data.id} {data.name} {data.lastname}
          <div>
            {JSON.stringify(data)}
          </div>
      </div>
    )
}
