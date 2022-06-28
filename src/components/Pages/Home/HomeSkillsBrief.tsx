import React from 'react'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { Title, Text, DoughnutChart } from '../../Common'
import { useWindowSize } from '../../../hooks'

const HomeSkillsBrief = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isMobile } = useWindowSize()

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
        data: [1, 1, 1, 1, 0.2, 0.2, 4],
        backgroundColor: [
          'rgba(243, 223, 80, 0.9)',
          'rgba(50, 121, 198, 0.9)',
          'rgba(100, 180, 135, 0.9)',
          'rgba(75, 192, 192, 0.9)',
          'rgba(70, 115, 160, 0.9)',
          'rgba(171, 43, 25, 0.9)',
          'rgba(57, 73, 92, 0.9)',
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
    <div>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <Title title={t('pages.home.skills-brief.title')} />
      </AnimationOnScroll>

      {/* 1. text description */}
      <Text align={isMobile ? 'left' : 'center'}>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={100}
        >
          <p className={clsx(isMobile ? 'display-inline' : 'display-block')}>
            {t('pages.home.skills-brief.text-1')}
          </p>
          <p className={clsx(isMobile ? 'display-inline' : 'display-none')}>
            {t('pages.home.skills-brief.text-2')}
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          delay={200}
        >
          <p className={clsx(isMobile ? 'display-none' : 'display-block')}>
            {t('pages.home.skills-brief.text-2')}
          </p>
        </AnimationOnScroll>
      </Text>

      {/* 2. chart 技术语言*/}
      <Box display="flex" justifyContent="center" alignItems="center">
        <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
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
                        if (context.label === 'Others')
                          return t('common.others')
                        return `\n${context.label}`
                      },
                    },
                  },
                },
              }}
            />
          </Box>
        </AnimationOnScroll>
      </Box>
      <h5 className="text-align-center front-grey ">
        {t('components.charts.skills.updating')}
      </h5>

      {/* TODO: 3. navigation button */}
      <Text align={'center'}>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
          <p>
            <Button
              variant="outlined"
              onClick={() => navigate('/skills')}
              style={{ textTransform: 'none' }}
            >
              {t('pages.home.skills-brief.navigation-button')}
            </Button>
          </p>
        </AnimationOnScroll>
      </Text>

      {/* TODO: 底间距 */}
      <Toolbar variant="dense" />
    </div>
  )
}

export default HomeSkillsBrief
