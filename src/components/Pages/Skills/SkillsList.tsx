import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useNavigate } from 'react-router-dom'
import Image from 'material-ui-image'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { useWindowSize } from '../../../hooks'

export interface SkillItemType {
  id: string
  name: string
  img: string
  extraInfo: unknown
}

interface SkillsListProps {
  list: SkillItemType[]
}

const SkillsList = ({ list }: SkillsListProps): JSX.Element => {
  const naviagte = useNavigate()

  const { isPC, isMobile } = useWindowSize()

  const handleClick = (item: SkillItemType) => {
    naviagte(`/skill/${item.id}`, { state: { item } })
  }
  return (
    <>
      {/* xs, 全部 */}
      {/* sm, small: 600dp〜 */}
      {/* md, medium: 960dp〜 */}
      {/* lg, large: 1280dp〜 */}
      {/* xl, xlarge: 1920dp〜 */}
      <Grid
        container
        spacing={1}
        className={clsx(isPC ? 'display-flex flex-justify-content-center' : '')}
      >
        {list?.map((item, index) => (
          <Grid key={item.id} item={true} xs={3} sm={2} md={1} lg={1} xl={1}>
            <AnimationOnScroll
              animateIn="animate__rubberBand"
              animateOnce={true}
              delay={50 * index}
            >
              {/* PC 场景布局 */}
              {isPC && (
                <Tooltip title={item.name} arrow>
                  {/* TODO: card style */}
                  <Paper elevation={3} style={{ borderRadius: 20 }}>
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
                <Paper elevation={3} style={{ borderRadius: 20 }}>
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
    </>
  )
}

export default SkillsList
