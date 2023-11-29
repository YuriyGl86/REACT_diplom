import React from 'react'

export  function FooterPay() {
    const items = ['paypal', 'master-card','visa',  'yandex','webmoney', 'qiwi']

  return (
    <>
    <h5>Принимаем к оплате:</h5>
    <div className="footer-pay">
        {items.map(item=> 
        <div className={`footer-pay-systems footer-pay-systems-${item}`} key={item}></div>
        )}
    </div>
    </>
  )
}
