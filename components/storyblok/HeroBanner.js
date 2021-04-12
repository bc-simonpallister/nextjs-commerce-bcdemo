import SbEditable from 'storyblok-react'

const Teaser = ({ blok }) => {
  const divStyle = {
    width: '100%',
    backgroundImage: 'url(' + blok.Image.filename + ')',
    height: '100%',
  }

  return (
    <SbEditable content={blok}>
      <div style={divStyle}>
        <h2>{blok.Headline}</h2>
        <h3>{blok.SubHeadline}</h3>
        <button>
          <a href={blok.ButtonTarget}>{blok.ButtonText}</a>
        </button>
      </div>
    </SbEditable>
  )
}

export default Teaser
