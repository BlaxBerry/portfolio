import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import { Title, WrapTransparent, CenterGlassBlock } from '../components/Common'
import {
  ContactForm,
  SendLoading,
  SendResult,
} from '../components/Pages/Contact'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../config'
import { useWindowSize } from '../hooks'

export interface TemplateParams extends Record<string, unknown> {
  from_name: string
  reply_to: string
  message: string
  to_name?: string
}

const IndexPage = () => {
  const { t } = useTranslation()
  const { isPC, isMobile } = useWindowSize()

  const [isLoading, setIsloading] = useState<boolean>(false)
  const [sendResult, setSendResult] = useState<'SUCCESS' | 'FAILED' | null>(
    null
  )

  const sendMail = (templateParams: TemplateParams) => {
    setIsloading(true)
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setIsloading(false)
          setSendResult('SUCCESS')
          console.log('SUCCESS!', response.status, response.text)
        },
        function (err) {
          setIsloading(false)
          setSendResult('FAILED')
          console.log('FAILED...', err)
        }
      )
  }

  const renderContentLayout = (): JSX.Element => (
    <CenterGlassBlock>
      <div style={{ padding: isPC ? '30px 60px' : '1.2rem' }}>
        {/* form */}
        <ContactForm
          sendMail={sendMail}
          isLoading={isLoading}
          isSent={Boolean(sendResult)}
        />
        {/* loading */}
        {isLoading && <SendLoading />}
        {/* send result */}
        {!isLoading && Boolean(sendResult) && (
          <SendResult sendResult={sendResult} />
        )}
      </div>
    </CenterGlassBlock>
  )

  return (
    <WrapTransparent>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={t('pages.contact.title')} />

      {/* content */}
      {isPC && <Container maxWidth="md">{renderContentLayout()}</Container>}
      {isMobile && renderContentLayout()}
    </WrapTransparent>
  )
}

export default IndexPage
