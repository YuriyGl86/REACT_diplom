import React from 'react'
import { MenuList } from '../MenuList'
import { FooterPay } from '../FooterPay/FooterPay'
import { FooterContacts } from '../FooterContacts/FooterContacts'

export  function Footer({menuItems}) {
  return (
    <footer className="container bg-light footer">
      <div className="row">
        <div className="col">
          <section>
            <h5>Информация</h5>
            <MenuList menuItems={menuItems} classNames={"nav flex-column"}/>
          </section>
        </div>
        <div className="col">
          <section>
            <FooterPay/>
          </section>
          <section>
            <div className="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.<br/>Доставка по всей России!
            </div>
          </section>
        </div>
        <div className="col text-right">
          <section className="footer-contacts">
            <FooterContacts/>
          </section>
        </div>
      </div>
    </footer>
  )
}
