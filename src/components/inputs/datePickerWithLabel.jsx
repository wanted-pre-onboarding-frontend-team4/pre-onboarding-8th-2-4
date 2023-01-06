import moment from 'moment/moment';
import { DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/en_US';
import dayjs from 'dayjs';

import * as S from 'components/inputs/common.styles';

const DatePickerWithLabel = ({
  label,
  name,
  defaultValue,
  placeholder,
  onChange,
}) => {
  const disabledDate = current =>
    current && current < moment().subtract(1, 'days');

  const handleChange = (_, dateString) => {
    onChange(name, dateString);
  };

  return (
    <S.Wrapper>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <DatePicker
          format="YYYY-MM-DD"
          locale={locale}
          disabledDate={disabledDate}
          defaultValue={
            defaultValue !== undefined
              ? dayjs(defaultValue, 'YYYY-MM-DD')
              : undefined
          }
          placeholder={placeholder}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default DatePickerWithLabel;
