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
  type: 'PC' | 'MOBILE'
  skillsTags: string[]
  modules: string[]
  images: string[]
  createdAt: string | Date
  publishedAt: string | Date
  description: Languages
}

interface WorksListProps {
  list: WorksItemType[]
  aspectRatio: number // 图片纵横比 height/width
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
  className?: string
}

export default function WorksList({
  list,
  aspectRatio,
  xs,
  sm,
  md,
  lg,
  xl,
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
    <Grid container spacing={2} className={clsx('my-works-list', className)}>
      {list?.map((item, index) => (
        <Grid key={item.id} item={true} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce={true}
            delay={55 * index}
            offset={0}
          >
            <Box
              className="my-works-list-item"
              boxShadow={4}
              onClick={() => handleClick(item)}
            >
              <Image src={item.images[0]} aspectRatio={aspectRatio} />

              {/* cover mask */}
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
