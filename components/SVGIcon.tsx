import React from 'react'

interface ISVGIconProps {
  icon: any
  width?: number
  height?: number
  style?: React.CSSProperties
}

const SVGIcon = React.forwardRef<HTMLImageElement, ISVGIconProps>(
  ({ icon, width = 40, height = 40, style = {} }, ref) => {
    const Component = icon
    return (
      <img
        src={Component}
        width={width}
        height={height}
        style={{ margin: 0, marginLeft: 'auto', ...style }}
        ref={ref}
      />
    )
  },
)

export default SVGIcon
