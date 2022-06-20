import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { WrapTransparent, Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

const FooterPC = (): JSX.Element => {
  const { isMobile } = useWindowSize()

  return (
    <div>
      <WrapTransparent>
        <div
          className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
          style={{ height: '100vh' }}
        >
          {/* title */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <Title
              title={'Thanks for Watching'}
              subTitle={'最後までご覧頂き、感謝致します'}
            />
          </AnimationOnScroll>

          {/* content */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <Text align="center">
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                もし何かコメントがありましたら、下記のリンクご利用ください。
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                開発していくうちに自分の不足も認識しました。今後も必ず深く勉強して改善し、専門性も高め、
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                一流のエンジニアを目指して、引き続き頑張っていきたいと思います。
              </p>
            </Text>
          </AnimationOnScroll>
        </div>
      </WrapTransparent>

      {/* TODO: copyright */}
      <div
        className="text-align-center front-white"
        style={{ backgroundColor: '#121212' }} // TODO: atomic
      >
        {'©2022 Chen.Blaxberry'}
      </div>
    </div>
  )
}

export default FooterPC
