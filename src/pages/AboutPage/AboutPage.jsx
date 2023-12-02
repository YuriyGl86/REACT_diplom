
import { AboutContent } from '../../components/AboutContent'
import { Banner } from '../../components/Banner'
import { Widget } from '../../components/Widget'

export  function AboutPage() {
  return (
    <div className="row">
      <div className="col">
        <Banner/>

        <Widget title={'О магазине'} sectionClasses={"top-sales"}>
          <AboutContent/>
        </Widget>

      </div>
    </div>
  )
}
