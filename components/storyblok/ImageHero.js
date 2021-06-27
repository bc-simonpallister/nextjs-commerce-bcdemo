import Link from 'next/link'
import DynamicComponent from './DynamicComponent'

const ImageHero = ({blok}) => {
  return (
    <div>
      <Link href={blok.slug}>
        <img src={blok.slug}/>
      </Link>
    </div>
  );
}

export default ImageHero