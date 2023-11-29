import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export  function Layout() {
  const menuItems = {
    main:{
      href: '/',
      title:'Главная'
    },
    catalog:{
      href: '/catalog.html',
      title:'Каталог'
    },
    about:{
      href: '/about.html',
      title:'О магазине'
    },
    contacts:{
      href: '/contacts.html',
      title:'Контакты'
    }
  }

  return (
    <>
      <Header menuItems={[menuItems.main, menuItems.catalog, menuItems.about, menuItems.contacts]}/>
      <main className="container">
        <Outlet/>
      </main>
      <Footer menuItems={[menuItems.about, menuItems.catalog, menuItems.contacts]}/>
    
    </>
  )
}
