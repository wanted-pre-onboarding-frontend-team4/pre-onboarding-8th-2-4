import { Input } from 'antd'
import * as S from './common.styles'

export default function TextInputWithLabel({ label, name, onChange, placeholder, defaultValue }) {
  const handleChange = (e) => {
    onChange(name, e.target.value)
  }
  return (
    <S.Wrapper>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <Input onChange={handleChange} placeholder={placeholder} defaultValue={defaultValue} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
