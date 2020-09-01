
import styled from 'styled-components';

export const StyledCell = styled.div`
  display: flex;
  background-color: #00A99D;
  width: 80px;
  height: 80px;
  padding: 10px;
`

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => (props.num === 1 ? '#C1272D' : props.num === 2 ? '#FCEE21' : 'white')};
  
`