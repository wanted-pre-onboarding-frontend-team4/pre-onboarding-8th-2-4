import { Input } from 'antd';

import * as S from 'components/inputs/common.styles';

const { TextArea } = Input;

const TextAreaWithLabel = ({
  label,
  name,
  onChange,
  placeholder,
  defaultValue,
}) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <S.Wrapper style={{ alignItems: 'start' }}>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <TextArea
          onChange={handleChange}
          placeholder={placeholder}
          showCount
          maxLength={200}
          defaultValue={defaultValue}
          style={{ height: 120, width: '100%', resize: 'none' }}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextAreaWithLabel;
