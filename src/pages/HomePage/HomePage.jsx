import { Banner } from "../../components/Banner";
import {CardsList} from "../../components/CardsList";
import { Catalog } from "../../components/Catalog";
import { Hits } from "../../components/Hits";
import { Preloader } from "../../components/Preloader";
import { Widget } from "../../components/Widget";


export  function HomePage() {

  return (
    <div className="row">
      <div className="col">
        <Banner/>

        <Hits/>

        <Catalog/>

      </div>
    </div>
  )
}


