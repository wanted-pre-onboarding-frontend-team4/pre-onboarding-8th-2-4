import moment from 'moment/moment'
import { DatePicker } from 'antd'
import locale from 'antd/lib/date-picker/locale/en_US'
import * as S from './common.styles'

export default function DatePickerWithLabel({ label, name, defaultValue, placeholder, onChange }) {
  const disabledDate = (current) => current && current < moment().endOf('day')

  const handleChange = (_, dateString) => {
    onChange(name, dateString)
  }

  return (
    <S.Wrapper>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <DatePicker
          format='YYYY-MM-DD'
          locale={locale}
          disabledDate={disabledDate}
          defaultValue={defaultValue && moment(defaultValue, 'YYYY-MM-DD')}
          placeholder={placeholder}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
