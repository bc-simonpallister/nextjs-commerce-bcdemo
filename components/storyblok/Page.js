import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({ content }) => {
  return (
    <SbEditable content={content}>
      {content.body.map((blok) => (
        <div>
          {/* <h2>{JSON.stringify(blok)}</h2> */}
          <DynamicComponent blok={blok} key={blok._uid} />
        </div>
      ))}
    </SbEditable>
  )
}

export default Page
