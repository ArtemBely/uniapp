import { NavLink } from 'react-router-dom'

export const About = () => {
    return(
      <div>
          <p>About Page</p>
          <NavLink to='/' style={{ color: "white" }}>Back</NavLink>
      </div>
    )
}
