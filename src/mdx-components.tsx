import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        width={400}
        height={400}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
