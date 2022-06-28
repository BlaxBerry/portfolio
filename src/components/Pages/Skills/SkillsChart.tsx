import React from 'react'
import { useTranslation } from 'react-i18next'
import { RadarChart } from '../../Common'

export default function SkillsChart(): JSX.Element {
  const { t } = useTranslation()

  // chart 图标数据
  const data = {
    labels: [
      t('pages.skills.tabs.front'),
      t('pages.skills.tabs.back'),
      t('pages.skills.tabs.others'),
      t('pages.skills.tabs.design'),
    ],
    datasets: [
      {
        label: t('components.charts.skills.tendency'),
        data: [3.5, 1.5, 3, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }
  const levelsName = [
    t('components.charts.skills.level-5'),
    t('components.charts.skills.level-4'),
    t('components.charts.skills.level-3'),
    t('components.charts.skills.level-2'),
    t('components.charts.skills.level-1'),
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
    <React.Fragment>
      {/* 图表 */}
      <div>
        <RadarChart
          data={data}
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
                    const level = handleChartLabelLevel(context.formattedValue)
                    return ` ${t('common.level')}: ${level}`
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
      <div className="my-chart-level-desctiption">
        {levelsName.map((name, index) => (
          <p key={index} className="my-chart-level-desctiption-item">
            LV{levelsName.length - index} - {name}
          </p>
        ))}
      </div>
    </React.Fragment>
  )
}
