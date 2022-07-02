import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Toolbar from '@material-ui/core/Toolbar'
import { Title, WrapTransparent, CenterGlassBlock } from '../components/Common'
import ContactForm from '../components/Pages/Contact/ContactForm'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from '../config'

export interface TemplateParams extends Record<string, unknown> {
  from_name: string
  reply_to: string
  message: string
  to_name?: string
}

const IndexPage = () => {
  const { t } = useTranslation()
  const [isLoading, setIsloading] = useState<boolean>(false)

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
          console.log('SUCCESS!', response.status, response.text)
        },
        function (err) {
          setIsloading(false)
          console.log('FAILED...', err)
        }
      )
  }

  return (
    <WrapTransparent>
      {/* TODO: 顶间距占位 */}
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />
      <Toolbar variant="dense" />

      {/* title */}
      <Title title={t('pages.contact.title')} />

      {/* form */}
      <CenterGlassBlock>
        <ContactForm sendMail={sendMail} isLoading={isLoading} />

        <div>Loading</div>

        <div>result</div>
      </CenterGlassBlock>
    </WrapTransparent>
  )
}

export default IndexPage
