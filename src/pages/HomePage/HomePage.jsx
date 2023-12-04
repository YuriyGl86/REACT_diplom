import { Banner } from "../../components/Banner";
import { Catalog } from "../../components/Catalog";
import { Hits } from "../../components/Hits";


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


