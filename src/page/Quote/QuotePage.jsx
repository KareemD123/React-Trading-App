import React from 'react'
import './Quote.scss'

import { useState, useEffect } from 'react'

function QuotePage(props) {

  const [state, setState] = useState({
    quotes: []
  })

  useEffect(() => {
      // Fetch quotes here
  })
  
  return (
    <div>
      Quote Page
    </div>
  )
}

export default QuotePage