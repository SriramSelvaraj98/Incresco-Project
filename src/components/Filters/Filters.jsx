import React from 'react'
import {Grid, FormControlLabel, Checkbox} from '@mui/material'

export const Filters = (props) => {
  const {filters, onChangeInCheckBox} = props
  const filterArray = []
  for (const key in filters){
    const filterObject = {
      name:key,
      value :filters[key]
    }
    filterArray.push(filterObject)
  }

  
  return (
    <div>
      {filterArray?.map((filter, index)=>{
      return( 
      <Grid container className='filter-sub-container'>

        {filter.name}
        {filter.value.map((filterValue,index)=>{
          return(
          <Grid container>
            
            <FormControlLabel control={<Checkbox onChange={()=>onChangeInCheckBox(filter.name, filterValue.key)} sx={{
    color: 'white',
    '&.Mui-checked': {
      color: 'white',
    },
  }} />} label={filterValue.key} /> 
        
          </Grid>
      )})}
      </Grid>
      )})} 
    </div>
  )
}
