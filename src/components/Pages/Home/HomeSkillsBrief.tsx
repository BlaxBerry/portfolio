import React from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Title, Text, DoughnutChart } from '../../Common'
import { useWindowSize } from '../../../hooks'
import Box from '@material-ui/core/Box'

const HomeSkillsBrief = () => {
  const { isMobile } = useWindowSize()
  const navigate = useNavigate()

  // chart 数据
  const chartDataTechLang = {
    labels: [
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'React.js',
      'Python',
      'Ruby',
      'Others',
    ],
    datasets: [
      {
        label: '# Languages',
        data: [1, 1, 1, 1, 0.2, 0.2, 0.5],
        backgroundColor: [
          'rgba(243, 223, 80, 0.8)',
          'rgba(50, 121, 198, 0.8)',
          'rgba(100, 180, 135, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(70, 115, 160, 0.8)',
          'rgba(171, 43, 25, 0.8)',
          'rgba(57, 73, 92, 0.8)',
        ],
        borderColor: [
          'rgba(243, 223, 80, 1)',
          'rgba(50, 121, 198, 1)',
          'rgba(100, 180, 135, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(70, 115, 160, 1)',
          'rgba(171, 43, 25, 1)',
          'rgba(57, 73, 92, 1)',
        ],
        borderWidth: 1,
      },
    ],
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

      {/* 2. chart 技术语言*/}
      <Box display="flex" justifyContent="center" alignItems="center">
        <AnimationOnScroll
          animateIn="animate__rollIn"
          animateOnce={true}
          delay={200}
        >
          <Box
            className="chart-donut-tech-lang"
            width={300}
            height={300}
            // TODO: 间距
            my={2}
          >
            <DoughnutChart
              data={chartDataTechLang}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      title: () => '',
                      label: (context) => {
                        // TODO: i18next
                        if (context.label === 'Others') return '其他'
                        return context.label
                      },
                    },
                  },
                },
              }}
            />
          </Box>
        </AnimationOnScroll>
      </Box>

      {/* TODO: 3. navigation button */}
      <Text align={'center'}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <p>
            <Button variant="outlined" onClick={() => navigate('/skills')}>
              More Detail
            </Button>
          </p>
        </AnimationOnScroll>
      </Text>

      {/* TODO: 底间距 */}
      <Toolbar variant="dense" />
    </>
  )
}

export default HomeSkillsBrief
