import { useRouter } from 'next/router'

export async function getStaticPaths() {

  const categories = await getAllCategories()

  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: false
  }
}


const Category = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  console.log(slug)

  return (
    <div>
      <h1>Slug: {slug.map((cat)=>(<div>{cat}</div>))}</h1>
    </div>
  )
  console.log(slug)
}

export default Category

const getAllCategories = async () => {
  const { BIGCOMMERCE_STORE_API_URL, BIGCOMMERCE_STORE_API_TOKEN } = process.env
  const res = await fetch(`${BIGCOMMERCE_STORE_API_URL}/v3/catalog/categories`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Auth-Token': BIGCOMMERCE_STORE_API_TOKEN
      }
    }
  )
  const json = await res.json()

  return json.data.data
}