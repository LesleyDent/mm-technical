import React from 'react'
import { Arrow, Arrows } from './styles.js'

const ArrowButtons = (props) => (
  <Arrows>
    {props.board.map((column, index) => <Arrow key={`arrow-${index}`} column={column} />)}
  </Arrows>
)

export default ArrowButtons