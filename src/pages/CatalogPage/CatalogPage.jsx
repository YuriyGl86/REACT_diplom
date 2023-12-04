import { Banner } from '../../components/Banner'
import { Catalog } from '../../components/Catalog'
import { CatalogSearch } from '../../components/CatalogSearch'

export  function CatalogPage() {


  return (
    <div className="row">
      <div className="col">
        <Banner/>

        <Catalog>
          <CatalogSearch/>
        </Catalog>

      </div>
    </div>
  )
}
