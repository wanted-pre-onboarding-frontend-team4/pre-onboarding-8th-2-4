import { PlusOutlined } from '@ant-design/icons'
import * as S from './addIssueButton.styles'

export default function AddIssueButton({ onClick }) {
  return (
    <S.ButtonWrapper type='primary' size='large' onClick={onClick}>
      <PlusOutlined />
    </S.ButtonWrapper>
  )
}
