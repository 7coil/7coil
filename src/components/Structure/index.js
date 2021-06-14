import React from "react"
import { row, column } from './index.module.scss';

const Row = ({ children }) => (
  <div className={row}>{children}</div>
)

const Column = ({ children }) => (
  <div className={column}>{children}</div>
)

export {
  Row, Column
}
