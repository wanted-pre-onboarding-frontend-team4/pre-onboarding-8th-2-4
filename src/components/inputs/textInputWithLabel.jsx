import { Input } from 'antd';

import * as S from 'components/inputs/common.styles';

const TextInputWithLabel = ({
  label,
  name,
  onChange,
  placeholder,
  defaultValue,
  maxLength,
}) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <S.Wrapper>
      <S.LabelWrapper>{label}</S.LabelWrapper>
      <S.InputWrapper>
        <Input
          onChange={handleChange}
          placeholder={placeholder}
          defaultValue={defaultValue}
          maxLength={maxLength}
        />
      </S.InputWrapper>
    </S.Wrapper>
  );
};

export default TextInputWithLabel;
