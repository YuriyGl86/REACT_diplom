import { Link } from 'react-router-dom'
import logo from '../../img/header-logo.png'

export function Logo() {
  return (
    <Link className="navbar-brand" to="/">
        <img src={logo} alt="Bosa Noga"/>
    </Link>
  )
}
