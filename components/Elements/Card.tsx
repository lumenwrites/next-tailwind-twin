import tw, { styled, css } from 'twin.macro'
import Button from './Button'

const products = [
  {
    id: 1,
    name: 'Basic Tee 8-Pack',
    href: '#',
    price: '$256',
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
    imageAlt: 'Front of plain black t-shirt.',
  },
  // More products...
]

export default function Card() {
  return (
    <Grid>
      {products.map((product) => (
        <Product key={product.id} className="group">
          <Image product={product} />
          <Description product={product} />
        </Product>
      ))}
    </Grid>
  )
}

const Grid = tw.div`
  grid grid-cols-1 gap-y-4 
  sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 
  lg:grid-cols-3 lg:gap-x-8
`

const Product = tw.div`
  relative flex flex-col
  bg-white 
  border border-gray-200 
  rounded-lg 
  overflow-hidden
`

const Description = ({ product }) => (
  <div tw="flex flex-1 flex-col space-y-2 p-4">
    <h3 tw="text-sm font-medium text-gray-900">
      <a href={product.href}>
        <span aria-hidden="true" tw="absolute inset-0" />
        {product.name}
      </a>
    </h3>
    <p tw="text-sm text-gray-500">{product.description}</p>
    <div tw="flex flex-1 flex-col justify-end">
      <p tw="text-sm italic text-gray-500">{product.options}</p>
      <p tw="text-base font-medium text-gray-900">{product.price}</p>
    </div>
    <Button>View Product</Button>
  </div>
)

const Image = ({ product }) => (
  <div tw="aspect-w-3 aspect-h-4 sm:aspect-none bg-gray-200 group-hover:opacity-75 sm:h-96">
    <img
      tw="h-full w-full object-cover object-center sm:h-full sm:w-full"
      src={product.imageSrc}
      alt={product.imageAlt}
    />
  </div>
)
