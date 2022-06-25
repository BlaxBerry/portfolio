import React from 'react'
import Grid from '@material-ui/core/Grid'
import JOJOGOGO from '../../../assets/images/jojo-gogogo.png'

interface EmptyProps {
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function Empty({ children, style }: EmptyProps) {
  return (
    <div className="text-align-center" style={style}>
      {/* jojo ゴゴゴ 图片 */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ overflow: 'hidden', padding: '3rem 3rem 0' }}
      >
        {[...new Array(2)].map((_e, i) => (
          <Grid
            item
            xs={5}
            sm={2}
            key={i}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={JOJOGOGO}
              alt="empty-jojo-gogogo"
              style={{ transform: `translateY(${i * -20}%) rotate(-15deg)` }}
            />
          </Grid>
        ))}
      </Grid>
      {/* 自定义内容 */}
      <div>{children}</div>
    </div>
  )
}
