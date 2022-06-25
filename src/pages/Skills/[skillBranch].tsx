import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { skillsChildrenRoute } from '../../components/Routes/RouterView'
import SkillsList from '../../components/Pages/Skills/SkillsList'
import { SKILLS_FRONT, SKILLS_BACK, SKILLS_OTHERS } from '../../mock'
import { RadarChart } from '../../components/Common'

// skills 的子路由组件 展示位置在 tab 下方
const IndexPage = (): JSX.Element => {
  const naviagte = useNavigate()
  const location = useLocation()
  const skillBranch = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1
  )

  // 未经过 Tab 而是直接访问该页面的场合
  useEffect(() => {
    if (!skillsChildrenRoute.includes(skillBranch)) {
      naviagte(`/skills/${skillsChildrenRoute[0]}`, { replace: true })
    }
  }, [skillBranch, naviagte])

  // 筛选展示的 skills
  const FRONTS = SKILLS_FRONT.filter((item) => item.extraInfo.show)
  const BACKS = SKILLS_BACK.filter((item) => item.extraInfo.show)
  const OTHERS = SKILLS_OTHERS.filter((item) => item.extraInfo.show)

  // chart 图标数据
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
  // 图标布局
  const renderChartLayout = () => (
    <>
      {/* 图表 */}
      <div>
        <RadarChart
          data={data}
          // redraw={true}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: { r: { min: 0, max: 5 } },
            plugins: {
              tooltip: {
                callbacks: {
                  title: () => '',
                  label: (context) => {
                    // TODO: i18next
                    const level = handleChartLabelLevel(context.formattedValue)
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
      </div>
      {/* 图标说明 */}
      <div
        className="my-chart--level-desctiption"
        style={{ width: '300px', margin: '20px auto 0' }}
      >
        {levelsName.map((name, index) => (
          <p
            key={index}
            className="p-left-100 m-0 text-align-left front-h6 front-grey"
          >
            LV{levelsName.length - index} - {name}
          </p>
        ))}
      </div>
    </>
  )
  // TODO: 不同level 的展示文本
  const levelsName = [
    'Master',
    'Diamond Pro',
    'Good Self-feeling',
    'Silver New',
    'Bronze Beginner',
  ]
  const handleChartLabelLevel = (value: string) => {
    const level = Number(value)
    if (level < 2) return levelsName[4]
    else if (level < 3) return levelsName[3]
    else if (level < 4) return levelsName[2]
    else if (level < 5) return levelsName[1]
    else return levelsName[0]
  }

  return (
    <>
      {/* TODO: 顶间距 */}
      <Toolbar variant="dense" />

      <Grid container spacing={3}>
        {/* 1. chart (仅在 lg 以后才显示) */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Hidden smDown>
          <Grid item xs={5}>
            {renderChartLayout()}
          </Grid>
        </Hidden>
        {/* 2. svg list */}
        <Grid item xs={12} sm={12} md={7}>
          {/* fornt */}
          {skillBranch === 'front' && <SkillsList list={FRONTS} />}
          {/* back */}
          {skillBranch === 'back' && <SkillsList list={BACKS} />}
          {/* others */}
          {skillBranch === 'others' && <SkillsList list={OTHERS} />}
        </Grid>
      </Grid>

      {/* TODO: 底部间距 */}
      <Toolbar variant="dense" />
    </>
  )
}

export default IndexPage
