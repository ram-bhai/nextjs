import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import  Box  from '@mui/material/Box';
import Card from '@mui/material/Card';


const DateRangePickerComp = () => {

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: 'selection'
    }
  ])

  
  return (
    
      <Card elevation={0} style={{borderRadius:'10px'}}>
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"           
            />    
      </Card>
  )
}

export default DateRangePickerComp;