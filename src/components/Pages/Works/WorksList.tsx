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
import NoImagePC from '../../../assets/images/noImage-pc.png'
import NoImageMobile from '../../../assets/images/noImage-mobile.png'
import linkJump from '../../../assets/images/link-jump.png'

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
  links: {
    demo?: string
    github?: string
  }
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

  const getImageSrc = (item: WorksItemType): string => {
    if (item.images.length <= 0) {
      if (item.type === 'PC') return NoImagePC
      else if (item.type === 'MOBILE') return NoImageMobile
    }
    return item.images[0]
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
              <Image src={getImageSrc(item)} aspectRatio={aspectRatio} />

              {/* cover mask */}
              <div className="my-works-list-item-message">
                {/* title */}
                <strong>{item.title?.[language]}</strong>
                <div>
                  {/* create date */}
                  <small className="my-works-list-item-message-createat">
                    {item.createdAt.toString()}
                  </small>
                  {/* demo link */}
                  {item.links?.demo && (
                    <img
                      src={linkJump}
                      alt="link"
                      className="my-works-list-item-message-link"
                      onClick={(event) => {
                        event.stopPropagation()
                        window.open(item?.links?.demo as string, '_blank')
                      }}
                    />
                  )}
                </div>
              </div>
            </Box>
          </AnimationOnScroll>
        </Grid>
      ))}
    </Grid>
  )
}
