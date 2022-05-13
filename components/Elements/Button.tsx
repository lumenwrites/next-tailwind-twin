// import { css } from '@emotion/css'
import tw, { styled, css, theme } from 'twin.macro'

export default function Button({ children, large=false, onClick = null }) {
  // return <div css={btn({ hasBg: true })}>{children}</div>
  return (
    <SButton red large={large} onClick={onClick}>
      {children}
      <span>Icon</span>
    </SButton>
  )
}

import type { FC } from 'react'
interface ButtonProps {
  red?: boolean,
  large?:boolean,
  onClick: () => void
}

const SButton: FC<ButtonProps> = styled.button(({ red, large }) => [
  // Use tailwind classes
  tw`
    inline-flex items-center place-content-center
    px-2.5 py-1.5
    text-xs font-medium
    bg-indigo-600 text-white
    border border-transparent 
    shadow-sm
    rounded
    hover:bg-indigo-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-indigo-500 
    focus:ring-offset-2 
  `,
  // Use optional classes based on props
  red && tw`bg-red-500`,
  large && tw`py-6 px-12`,
  // Use nested selectors like in sass
  // Allows you to style component's children without adding classes to them
  css`
    span {
      ${tw`text-green-600 mx-2`};
    }
  `,
])
