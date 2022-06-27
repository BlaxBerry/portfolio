import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Empty, Text } from '../../../Common'

export default function DeatilSkillEmpty(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Empty>
      <Text align={'center'}>
        {/* TODO: i18n */}
        <p>Content is preparing, it will be published ...</p>
        <p>Please go back to check another skill</p>
        <Button variant="outlined" onClick={() => navigate('/skills')}>
          Back To Skills
        </Button>
      </Text>
    </Empty>
  )
}
