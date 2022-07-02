import React from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import base64 from 'base-64'
import { useTranslation } from 'react-i18next'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Image from 'material-ui-image'
import Grid, { GridSize } from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { Languages } from '../../../types'

export interface WorksItemType {
  id: string
  title: Languages
  type: 'PC' | 'Mobile'
  skillsTags: string[]
  modules: string[]
  images: string[]
  createdAt: string | Date
  publishedAt: string | Date
  description: []
}

interface WorksListProps {
  list: WorksItemType[]
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
  className?: string
}

export default function WorksList({
  list,
  xs = 12,
  sm = 6,
  md = 6,
  lg = 4,
  xl = 2,
  className,
}: WorksListProps) {
  const {
    i18n: { language },
  } = useTranslation()
  const navigate = useNavigate()

  const handleClick = (item: WorksItemType) => {
    const encodeID = base64.encode(`WORKID:${item.id}`)
    navigate(`/work/${encodeID}`)
  }

  return (
    <Grid
      container
      spacing={1}
      className={clsx('my-works-list', className)}
      // justifyContent={justifyContent}
    >
      {list?.map((item, index) => (
        <Grid key={item.id} item={true} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            animateOnce={true}
            delay={50 * index}
            offset={0}
          >
            <Box
              className="my-works-list-item"
              boxShadow={3}
              onClick={() => handleClick(item)}
            >
              <Image
                src={item.images[0]}
                aspectRatio={1.5} // 纵横比 height/width
                // TODO: loading时 root 元素样式
                // style={{ backgroundColor: 'pink' }}
              />

              <div className="my-works-list-item-message">
                <div className="my-works-list-item-message-name">
                  {item.title?.[language]}
                </div>
                <small className="my-works-list-item-message-createat">
                  {item.createdAt.toString()}
                </small>
              </div>
            </Box>
          </AnimationOnScroll>
        </Grid>
      ))}
    </Grid>
  )
}
