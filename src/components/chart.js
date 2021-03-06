import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average (data) {
  return Math.round(data.reduce((prev, cur) => prev + cur, 0) / data.length)
}

const Chart = props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>Average {average(props.data)} {props.units}</div>
    </div>
  )
}

export default Chart
