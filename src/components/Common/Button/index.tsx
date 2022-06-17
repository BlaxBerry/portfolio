import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'

interface CustomButtonProps {
  contained?: boolean // 实心立体按钮
  outlined?: boolean // 带边框按钮
  onClick?: () => void
  children: string | JSX.Element
}
const CustomButton = ({
  contained,
  outlined,
  onClick,
  children,
}: CustomButtonProps): JSX.Element => {
  const [type, setType] = useState<'contained' | 'outlined' | 'text'>('text')

  useEffect(() => {
    if (contained) setType('contained')
    if (outlined) setType('outlined')
  }, [setType, contained, outlined])

  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <>
      <Button variant={type} onClick={handleClick}>
        {children}
      </Button>

      {/* 
            {typeof children !== 'string' && (
                <IconButton
                // aria-label={item.title}
                // onClick={item.onclick}
                >
                    {children}
                </IconButton>
            )} */}
    </>
  )
}

export default CustomButton
