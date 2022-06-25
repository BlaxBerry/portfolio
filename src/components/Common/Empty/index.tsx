import React from 'react'
import Grid from '@material-ui/core/Grid'
import JOJOGOGO from '../../../assets/images/jojo-gogogo.png'

interface EmptyProps {
  children?: React.ReactNode
}

export default function Empty({ children }: EmptyProps) {
  return (
    <div className="text-align-center">
      {/* jojo ゴゴゴ 图片 */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          overflow: 'hidden',
          padding: '0 3rem',
          transform: 'rotate(-15deg)',
        }}
      >
        {[...new Array(2)].map((e, i) => (
          <Grid
            item
            xs={6}
            sm={2}
            key={i}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <img src={JOJOGOGO} alt="empty-jojo-gogogo" />
          </Grid>
        ))}
      </Grid>

      {/* TODO: 间距 */}
      {/* 自定义内容 */}
      <br />
      <div>{children}</div>
    </div>
  )
}
