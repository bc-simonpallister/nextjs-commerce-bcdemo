import Feature from './Feature'
import Teaser from './Teaser'
import HeroBanner from './HeroBanner'

const Components = {
  feature: Feature,
  teaser: Teaser,
  'Hero Banner': HeroBanner,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }
}

export default DynamicComponent
