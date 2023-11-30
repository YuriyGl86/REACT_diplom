import baner from '../../img/banner.jpg'

export  function Banner() {
  return (
    <div className="banner">
        <img src={baner} className="img-fluid" alt="К весне готовы!"/>
        <h2 className="banner-header">К весне готовы!</h2>
    </div>
  )
}
