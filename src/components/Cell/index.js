import React from 'react'
import { StyledCell, Circle } from './styles.js'

const Cell = (props) => (
  <StyledCell>
    <Circle num={props.num} />
  </StyledCell>
)


export default Cell