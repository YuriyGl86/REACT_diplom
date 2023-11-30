import { Banner } from "../../components/Banner";
import { Preloader } from "../../components/Preloader";
import { Widget } from "../../components/Widget/Widget";



export  function HomePage() {



  return (
    <div className="row">
      <div className="col">
        <Banner/>

        <Widget title={'Хиты продаж!'} sectionClasses={"top-sales"}>
          <Preloader/>
        </Widget>


        <Widget title={'Каталог'} sectionClasses={"catalog"}>
          <Preloader/>
        </Widget>

      </div>
    </div>
  )
}


