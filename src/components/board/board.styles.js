import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Header = styled.header`
  height: 80px;
`

export const Section = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 20px;
  gap: 20px;
  flex-wrap: nowrap;
`

export const ColumnWrapper = styled.div`
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`
