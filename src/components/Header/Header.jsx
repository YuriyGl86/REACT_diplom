
import { MenuList } from '../MenuList'
import { HeaderCart } from '../HeaderCart/HeaderCart'
import { SearchExpander } from '../SearchExpander/SearchExpander'
import { SearchForm } from '../SearchForm/SearchForm'
import { Logo } from '../Logo/Logo'

export  function Header({ menuItems }) {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo/>
            <div className="collapse navbar-collapse" id="navbarMain">
                <MenuList menuItems={menuItems} classNames={"navbar-nav mr-auto"}/>        
                <div>
                    <div className="header-controls-pics">                      
                        <SearchExpander/>
                        <HeaderCart/>
                    </div>
                    <SearchForm/>
                </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
