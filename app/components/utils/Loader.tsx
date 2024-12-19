import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}><CircularProgress /></div>
  )
}

export default Loader