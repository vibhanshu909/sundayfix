import Link, { LinkProps } from 'next/link'
import React from 'react'

interface IAnchorProps
  extends Omit<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    'href'
  > {
  href: LinkProps['href']
  as?: LinkProps['as']
  passHref?: LinkProps['passHref']
  skipATag?: boolean
}

// eslint-disable-next-line react/display-name
const Anchor = React.forwardRef<any, IAnchorProps>((props, ref) => {
  const { href, as = href, passHref = false, skipATag = false, ...restProps } = props
  const { children } = restProps
  return (
    <Link href={href} as={as} passHref={passHref}>
      {skipATag ? (
        children
      ) : (
        <a {...restProps} ref={ref}>
          {children}
        </a>
      )}
    </Link>
  )
})

export default Anchor
