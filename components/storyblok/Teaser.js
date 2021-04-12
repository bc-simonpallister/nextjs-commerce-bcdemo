import SbEditable from 'storyblok-react'

const Teaser = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <div className="Teaser">
        <h2>{blok.headline}</h2>
      </div>
    </SbEditable>
  )
}

export default Teaser
