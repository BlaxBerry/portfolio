import React from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Title, Text } from '../../components/Common'
import { useWindowSize } from '../../hooks'

const HomeSkillsBrief = () => {
  const { isMobile } = useWindowSize()

  return (
    <>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
        <Title title={'スキルについて'} />
      </AnimationOnScroll>

      {/* content */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            フロントからバックエンドまで幅広くスキルアップに取り組んできました。
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            広く浅くではありますが、今後も幅広い領域に挑戦して引き続き頑張りたいと考えています
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            広く浅くではありますが、今後も幅広い領域に挑戦して引き続き頑張りたいと考えています
          </p>
        </AnimationOnScroll>
      </Text>
    </>
  )
}

export default HomeSkillsBrief
