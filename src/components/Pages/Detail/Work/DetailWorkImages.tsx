import React from 'react'
import Image from 'material-ui-image'
import Grid, { GridSize } from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

interface DetailWorkImageType {
  list: string[]
  aspectRatio: number
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
}

export default function DetailWorkImages({
  list,
  aspectRatio,
  xs,
  sm,
  md,
  lg,
  xl,
}: DetailWorkImageType) {
  return (
    <div>
      {Boolean(list?.length) && (
        <Grid container spacing={1}>
          {list?.map((item, index) => (
            <Grid
              key={index}
              item={true}
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
              xl={xl}
            >
              <Box boxShadow={4}>
                <Image src={item} aspectRatio={aspectRatio} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
