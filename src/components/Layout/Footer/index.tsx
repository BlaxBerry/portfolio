import React from 'react'
import clsx from 'clsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useTranslation } from 'react-i18next'
import { WrapTransparent, Title, Text } from '../../Common'
import { useWindowSize } from '../../../hooks'

const FooterPC = (): JSX.Element => {
  const { t } = useTranslation()
  const { isMobile } = useWindowSize()

  return (
    <div className="my-footer">
      <WrapTransparent>
        <div
          className="display-flex flex-direction-column flex-justify-content-center flex-align-items-center"
          style={{ height: '100vh' }}
        >
          {/* title */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <Title title={t('components.footer.title')} />
          </AnimationOnScroll>

          {/* content */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <Text align={isMobile ? 'left' : 'center'}>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                {t('components.footer.text-1')}
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                {t('components.footer.text-2')}
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                {t('components.footer.text-3')}
              </p>
              <p
                className={clsx(isMobile ? 'display-inline' : 'display-block')}
              >
                {t('components.footer.text-4')}
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
