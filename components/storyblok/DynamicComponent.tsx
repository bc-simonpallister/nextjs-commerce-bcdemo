import React, { FC } from 'react'
import { Grid, Marquee, Hero } from '@components/ui'
import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import SbEditable, { SbEditableContent } from "storyblok-react";
//import dashify from 'dashify'

import ImageHero from './ImageHero'
 
interface IComponents {
  [key: string]: React.ElementType,
}
 
interface Props {
  blok?: SbEditableContent
}
 
const Components: IComponents = {
  'image-hero' : ImageHero
} 
 
const DynamicComponent: FC<Props> = ({ blok }) => {
    if (blok) {
      const componentName = blok.component
      if(typeof Components[componentName] !== 'undefined') {
        const FoundComponent = Components[componentName]
        return (<SbEditable content={blok} key={blok._uid}><FoundComponent blok={blok} /></SbEditable>)
      } else {
        return (<p>{componentName} is not yet defined.</p>)
      }
    }
    return null
  }
  
  export default DynamicComponent