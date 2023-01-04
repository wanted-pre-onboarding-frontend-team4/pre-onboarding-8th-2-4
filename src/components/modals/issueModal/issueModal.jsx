import { useState } from 'react'
import { Modal } from 'antd'
import useAddIssue from '../../../commons/hooks/issue/useAddIssue'
import useUpdateIssue from '../../../commons/hooks/issue/useUpdateIssue'
import TextInputWithLabel from '../../inputs/textInputWithLabel'
import TextAreaWithLabel from '../../inputs/textAreaWithLabel'
import * as S from './issueModal.style'
import SelectWithLabel from '../../inputs/selectWithLabel'
import DatePickerWithLabel from '../../inputs/datePickerWithLabel'

export default function IssueModal({ isEdit, defaultValue, handleToggleModal }) {
  const { addIssue } = useAddIssue()
  const { updateIssue } = useUpdateIssue()

  const [inputs, setInputs] = useState({
    sequence: defaultValue || 0,
    title: defaultValue || '',
    contents: defaultValue || '',
    status: defaultValue || '',
    assignee: defaultValue || '',
    dueDate: defaultValue || '',
  })

  const handleChangeInputs = (field, value) => {
    setInputs((p) => ({
      ...p,
      [field]: value,
    }))
  }

  const handleClickOk = () => {
    isEdit ? updateIssue(inputs.sequence, inputs) : addIssue(inputs)
    handleToggleModal()
  }

  return (
    <Modal open centered onOk={handleClickOk} onCancel={handleToggleModal}>
      <S.Wrapper>
        <S.TitleWrapper>#{defaultValue?.sequence}</S.TitleWrapper>
        <TextInputWithLabel label='제목' name='title' onChange={handleChangeInputs} />
        <SelectWithLabel
          label='상태'
          name='status'
          isSearch={false}
          defaultValue={defaultValue?.status}
          onChange={handleChangeInputs}
          options={[
            { value: 'todo', label: '할 일' },
            { value: 'ongoing', label: '진행 중' },
            { value: 'done', label: '완료' },
          ]}
        />
        <SelectWithLabel
          isSearch
          label='담당자'
          name='assignee'
          defaultValue={defaultValue?.assignee}
          onChange={handleChangeInputs}
          options={[
            { value: '바흐흑', label: '바흐흑' },
            { value: '고흐흑', label: '고흐흑' },
            { value: '바하학', label: '바하학' },
          ]}
        />
        <DatePickerWithLabel
          label='마감일'
          name='dueDate'
          defaultValue={defaultValue?.dueDate}
          onChange={handleChangeInputs}
        />
        <TextAreaWithLabel
          label='내용'
          name='contents'
          defaultValue={defaultValue?.contents}
          onChange={handleChangeInputs}
        />
      </S.Wrapper>
    </Modal>
  )
}
