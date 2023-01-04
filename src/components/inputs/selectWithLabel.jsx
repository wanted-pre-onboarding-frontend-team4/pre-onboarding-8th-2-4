import { Select } from 'antd'
import * as S from './common.styles'

export default function SelectWithLabel({
  label,
  name,
  onChange,
  options,
  isSearch,
  defaultValue,
  placeholder,
}) {
  const handleChange = (value) => {
    onChange(name, value)
  }

  return (
    <S.Wrapper>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <Select
          showSearch={isSearch}
          showArrow={!isSearch}
          placeholder={placeholder}
          defaultValue={defaultValue}
          style={{ width: '100%' }}
          onChange={handleChange}
          options={options}
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
