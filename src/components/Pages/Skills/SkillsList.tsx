import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useNavigate } from 'react-router-dom'
import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper'
import Grid, { GridJustification, GridSize } from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { useWindowSize } from '../../../hooks'

export interface SkillItemType {
  id: string
  name: string
  img: string
  extraInfo: {
    show: boolean // 是否展示在 skills page
    preparing: boolean // 是否在学习（点击后是否会进入详情页面）
    description: string | null
    relations?: string[] // 相关技术列表
  }
}

interface SkillsListProps {
  list: SkillItemType[]
  xs?: GridSize
  sm?: GridSize
  md?: GridSize
  lg?: GridSize
  xl?: GridSize
  justifyContent?: GridJustification
  className?: string
}
/*
 * xs, 全部
 * sm, small: 600dp〜
 * md, medium: 960dp〜
 * lg, large: 1280dp〜
 * xl, xlarge: 1920dp〜
 */

const SkillsList = ({
  list,
  xs = 3,
  sm = 2,
  md = 2,
  lg = 2,
  xl = 2,
  justifyContent = 'flex-start',
  className,
}: SkillsListProps): JSX.Element => {
  const naviagte = useNavigate()

  const { isPC, isMobile } = useWindowSize()

  const handleClick = (item: SkillItemType) => {
    naviagte(`/skill/${item.id}`)
  }

  return (
    <Grid
      container
      spacing={1}
      className={clsx('my-skills-list', className)}
      justifyContent={justifyContent}
    >
      {list?.map((item, index) => (
        <Grid key={item.id} item={true} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce={true}
            delay={55 * index}
            offset={0}
          >
            {/* PC 场景布局 */}
            {isPC && (
              <Tooltip title={item.name} arrow>
                {/* TODO: card style */}
                <Paper elevation={4} className="my-skills-list-item">
                  <Image
                    src={item.img}
                    loading={false}
                    onClick={() => handleClick(item)}
                  />
                </Paper>
              </Tooltip>
            )}
            {/* Mobile 场景布局 */}
            {isMobile && (
              <Paper elevation={4} className="my-skills-list-item">
                <Image
                  src={item.img}
                  loading={false}
                  onClick={() => handleClick(item)}
                />
              </Paper>
            )}
          </AnimationOnScroll>
        </Grid>
      ))}
    </Grid>
  )
}

export default SkillsList
