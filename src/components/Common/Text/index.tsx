import React, { useMemo, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import clsx from 'clsx'
import { useWindowSize } from '../../../hooks'

interface TextProps {
  children: React.ReactNode
  ellipsis?: boolean
  align?: 'left' | 'center' | 'right'
}

const Text = ({ children, ellipsis = false, align = 'left' }: TextProps) => {
  const { windowSize } = useWindowSize()

  // TODO: 调整 material ui Typography 字体大小
  const textSize = useMemo(() => {
    switch (windowSize) {
      case 'xs':
        return 'body2'
      case 'md':
        return 'body1'
      default:
        return 'body1'
    }
  }, [windowSize])

  /**
   * true: 长文本内容省略折叠为一行
   * false（默认）：普通文本内容
   */
  const [isEllipsis, setIsEllipsis] = useState(ellipsis)

  return (
    <div
      className={clsx(
        isEllipsis ? 'display-flex' : 'display-block',
        `text-align-${align}`
      )}
      style={{ lineHeight: '32px' }} // TODO: variant body-1
    >
      <Typography
        variant={textSize} // TODO: 响应式字体大小变化
        component="div"
        noWrap={isEllipsis}
      >
        {children}

        {/* 收起 */}
        {isEllipsis && (
          <Chip
            variant="outlined"
            label="收起"
            size="small"
            onClick={() => setIsEllipsis(true)}
            className={clsx([isEllipsis ? 'display-none' : '', 'm-left-10'])}
          />
        )}
      </Typography>

      {/* 展示更多 */}
      {isEllipsis && (
        <Chip
          variant="outlined"
          label="More"
          size="small"
          onClick={() => setIsEllipsis(false)}
          className={clsx([!isEllipsis && 'display-none', 'm-left-5'])}
        />
      )}
    </div>
  )
}

export default Text
