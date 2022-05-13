import { css } from '@emotion/css'
import tw, { theme } from 'twin.macro'

export default function Button({ children, className = '' }) {
  // return <div css={btn({ hasBg: true })}>{children}</div>
  return (
    <button className={[btn({ hasBg: false }), className].join(' ')}>
      {children}
      <span>Icon</span>
    </button>
  )
}

const btn = ({ hasBg }) => css`
  // Use tailwind classes
  ${tw`m-4 inline-flex items-center rounded border border-transparent
    bg-indigo-600 px-2.5 py-1.5 text-xs font-medium 
    text-white shadow-sm hover:bg-indigo-700 
    focus:outline-none focus:ring-2 focus:ring-indigo-500 
    focus:ring-offset-2 place-content-center
	`}

  // Use optional classes based on props
  hasBg && ${tw`bg-red-500`}

  // Use nested selectors like in sass
  // Allows you to style component's children without adding classes to them
  span {
    ${tw`text-green-600 mx-2`};
  }

  // All the regular sass type stuff, for variants
  &.small {
    ${tw`py-2 px-6`};
  }
  &.medium {
    ${tw`py-3 px-8`};
  }
  &.large {
    ${tw`py-6 px-12`};
  }
`
