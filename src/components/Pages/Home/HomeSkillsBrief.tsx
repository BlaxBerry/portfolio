import React from 'react'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Title, Text, RadarChart } from '../../Common'
import { useWindowSize } from '../../../hooks'

const HomeSkillsBrief = () => {
  const { isMobile } = useWindowSize()

  // chart 数据
  const data = {
    labels: ['Front-End', 'Back-End', 'Others', 'Design'],
    datasets: [
      {
        label: 'Skills Tendency',
        data: [3.5, 1.5, 2.5, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }

  // TODO: 不同level 的展示文本
  const levelsName = [
    'Master',
    'Diamond',
    'Gold Self-feeling',
    'Silver New',
    'Bronze Beginner',
  ]
  const handleChartLevel = (value: string) => {
    const level = Number(value)
    if (level < 2) return levelsName[4]
    else if (level < 3) return levelsName[3]
    else if (level < 4) return levelsName[2]
    else if (level < 5) return levelsName[1]
    else return levelsName[0]
  }

  return (
    <>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
        <Title title={'スキルについて'} />
      </AnimationOnScroll>

      {/* 1. text description */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
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
          animateIn="animate__fadeInLeft"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            広く浅くではありますが、今後も幅広い領域に挑戦して引き続き頑張りたいと考えています
          </p>
        </AnimationOnScroll>
      </Text>

      {/* 2. chart */}
      <Text align={'center'} className={'my-chart'}>
        {/* 2.1 chart graph */}
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          {/* TODO: 间距 tyle */}
          <p className="my-chart-graph">
            <RadarChart
              data={data}
              options={{
                scales: {
                  r: { min: 0, max: 5 },
                },
                plugins: {
                  tooltip: {
                    callbacks: {
                      title: () => '',
                      label: (context) => {
                        const level = handleChartLevel(context.formattedValue)
                        return ` ${level} Level`
                      },
                    },
                  },
                },
                animations: {
                  tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 0.2,
                    to: 0,
                    loop: true,
                  },
                },
              }}
            />
          </p>
        </AnimationOnScroll>

        {/* 2.2 chart levele description */}
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          {/* TODO: 间距等样式*/}
          <div
            className="my-chart--level-desctiption"
            style={{ width: '300px', margin: '0 auto' }}
          >
            {levelsName.map((name, index) => (
              <p
                key={index}
                className="p-left-100 m-0 text-align-left front-h6 front-grey"
              >
                {levelsName.length - index} - {name}
              </p>
            ))}
          </div>
        </AnimationOnScroll>
      </Text>

      {/* TODO: 3. navigation button */}
      <Text align={'center'}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <p> more</p>
        </AnimationOnScroll>
      </Text>

      {/* TODO: 底间距 */}
      <Toolbar variant="dense" />
    </>
  )
}

export default HomeSkillsBrief
