import React from 'react'
import './header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Grid, FormControl,InputLabel,OutlinedInput, InputAdornment, IconButton} from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'; 
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header = (props) => {
const {onChangeOnSearch, searchText}= props  
  return (
      <Grid container className='header-container'>
        <Grid item>
          Jobs
        </Grid>
        <Grid item xs={7} >
        <FormControl  sx={{ m: 1, width: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={'text'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  {<SearchOutlinedIcon color='white' />}
                </IconButton>
              </InputAdornment>
            }
            value={searchText}
            onChange={onChangeOnSearch}
            label="Search"
            style={{width:"100%"}}
          />
        </FormControl>
        </Grid>
        <Grid item>
            <AccountBoxOutlinedIcon color='black' className='header-icons'/>
            <NotificationsNoneOutlinedIcon style={{marginLeft:"10px"}} className='header-icons' />
        </Grid>
      </Grid>
  )
}

export default Header