import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import { TemplateParams } from '../../../pages/contact'
import { regularExpression } from '../../../utils'

interface ContacFormProps {
  sendMail: (templateParams: TemplateParams) => void
  isLoading: boolean
  isSent: boolean
}

interface FormParamsType {
  name: string
  email: string
  message: string
  [key: string]: string
}

export default function ContactForm({
  sendMail,
  isLoading,
  isSent,
}: ContacFormProps) {
  const { t } = useTranslation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<FormParamsType>({
    mode: 'onSubmit',
    criteriaMode: 'all',
    shouldFocusError: false,
  })

  const validations = {
    name: { maxLength: 30 },
    message: { minLength: 20 },
  }

  const onSubmit: SubmitHandler<FormParamsType> = (data) => {
    for (const key in data) {
      if (data[key].trim() === '') {
        setError(key, {
          type: 'required',
          message: t('pages.contact.errors.required'),
        })
      }
    }
    // TODO: 传递的 textarea 无法换行
    // TDOD: 是否允许刷新页面后多次发送
    sendMail({
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    })
  }

  // 判断 field 内容是否有错
  const isErrorField = useCallback(
    (fieldName: string): boolean => {
      let flag = false
      for (const key in errors) {
        flag = key === fieldName
      }
      return flag
    },
    [errors]
  )

  // 判断 form 内容是否存有错误
  const isErrorForm = useMemo((): boolean => {
    let flag = false
    for (const key in errors) {
      flag = Boolean(key)
    }
    return flag
  }, [errors.name, errors.email, errors.message]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form
      className="my-contact-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        // opacity: isLoading ? 0 : 1, // TODO: loading & result
        visibility: isLoading || isSent ? 'hidden' : 'visible',
      }}
    >
      {/* 1. name */}
      <div className="my-contact-form-field-line">
        <Controller
          name="name"
          control={control}
          rules={{
            required: t('pages.contact.errors.required'),
            maxLength: {
              value: validations.name.maxLength,
              message: `${t('pages.contact.errors.max-length-1')} ${
                validations.name.maxLength
              } ${t('pages.contact.errors.max-length-2')}`,
            },
          }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <TextField
              className="my-contact-form-field"
              label={t('pages.contact.form.name')}
              multiline
              required
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(error)}
              helperText={error?.message}
              name={name}
              ref={ref}
            />
          )}
        />
      </div>

      {/* 2. email */}
      <div className="my-contact-form-field-line">
        <Controller
          name="email"
          control={control}
          rules={{
            required: t('pages.contact.errors.required'),
            pattern: {
              value: regularExpression.meailAddress,
              message: t('pages.contact.errors.email-address'),
            },
          }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { error },
          }) => (
            <TextField
              className="my-contact-form-field"
              label={t('pages.contact.form.email')}
              multiline
              required
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(error)}
              helperText={error?.message}
              name={name}
              ref={ref}
            />
          )}
        />
      </div>

      {/* 3. message */}
      <div className="my-contact-form-field-line">
        {/* title label */}
        <div
          className="my-contact-form-label "
          style={{
            color: isErrorField('message')
              ? 'rgb(238, 43, 41)'
              : 'rgba(0, 0, 0, 0.5',
          }}
        >
          <label htmlFor="message-filed">
            {t('pages.contact.form.message')} *
          </label>
        </div>
        {/* field */}
        <Controller
          name="message"
          control={control}
          rules={{
            required: t('pages.contact.errors.required'),
            minLength: {
              value: validations.message.minLength,
              message: `${t('pages.contact.errors.min-length-1')} ${
                validations.message.minLength
              } ${t('pages.contact.errors.min-length-2')}`,
            },
          }}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <TextareaAutosize
              id="message-filed"
              minRows={6}
              maxRows={10}
              className="my-contact-form-textarea"
              style={{
                border: isErrorField('message')
                  ? '2px solid rgb(238, 43, 41)'
                  : 'none',
              }}
              placeholder={t('pages.contact.form.message')}
              required
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              ref={ref}
            />
          )}
        />
        {/* error messages */}
        <div
          className="my-contact-form-err-message"
          style={{ marginTop: '-5px' }}
        >
          {errors.message?.type === 'required' && (
            <span>{t('pages.contact.errors.required')}</span>
          )}
          {errors.message?.type === 'minLength' && (
            <span>
              {`${t('pages.contact.errors.min-length-1')} 
              ${validations.message.minLength} 
              ${t('pages.contact.errors.min-length-2')}`}
            </span>
          )}
        </div>
      </div>

      {/* 4. submit  */}
      <div className="my-contact-form-field-line">
        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          disabled={isErrorForm}
        >
          {t('pages.contact.form.submit')}
        </Button>
      </div>
    </form>
  )
}
