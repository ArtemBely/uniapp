import { NavLink } from 'react-router-dom'

export const Info = ({counter}) => {
    return(
      <div style={{ display: 'grid' }}>
          <NavLink to={`/users/${counter}`} style={{ fontSize: '50px', textDecoration: 'none', color: "white" }}>Users</NavLink>
          <NavLink to='/hello' style={{ fontSize: '50px', textDecoration: 'none', color: "white" }}>About</NavLink>
      </div>
    )
}
