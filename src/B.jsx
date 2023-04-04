import React from 'react'
import C from './C'
const B = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      padding: "5px",
      border: "5px solid red",backgroundColor:'rgba(15,362,345,1)'
    }}>
        <h2>I am component B</h2>
      <C/>
    </div>
  )
}

export default B
