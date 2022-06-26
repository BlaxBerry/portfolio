import React from 'react'
import { RadarChart } from '../../Common'

export default function SkillsChart(): JSX.Element {
  // chart 图标数据
  const data = {
    labels: ['Front-End', 'Back-End', 'Others', 'Design'],
    datasets: [
      {
        label: 'Skills Tendency',
        data: [3.5, 1.5, 3, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }
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
      {/* TODO: i18n */}
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
    </React.Fragment>
  )
}
