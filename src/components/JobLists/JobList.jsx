import React from 'react'
import {Grid} from '@mui/material'
import './joblist.css'
import { Strings } from '../../services/Strings'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import {moment} from 'moment'

const JobList = (props) => {
  
  const {total, list} = props
  
  return (
    <div>
      <Grid container>
        <Grid item>
          <span><b>SEARCH RESULTS</b> /JOBS - {total?.value} results</span>
        </Grid>
        <Grid item>

        </Grid>
        
      </Grid>
      <Grid container className='job-list-container'>
        <Grid container>
          Jobs <span style={{marginLeft:"50px"}}><b>{list?.length < 1 && 'OOps...No Job Found' }</b></span>
        </Grid>
        <Grid container className='job-lists-main-container'>
        {list?.map((jobList, index)=>{
        return(
        <Grid key={index} container className='job-lists'>
          <Grid container className='job-details-container'>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <span><b>{jobList.sort[0]}</b></span>
              </Grid>
              <Grid container>
                <span className='company-name'>{jobList?._source?.company_name}</span>
              </Grid>
              <Grid container>
                <span>{jobList?._source?.location}</span>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <span>Skill Match</span>
            </Grid>
            <Grid item>
              <span>75%</span>
            </Grid>
          </Grid>
          <Grid container className='job-posted-details-container'>
            <Grid item>
              <span>Posted 1 day ago . {jobList?._source?.count_applied} applicants</span>
            </Grid>
            <Grid item className='d-flex-a-i-c'>
              <button className='job-apply-button'>
                {Strings.text_apply_now}
              </button>
              <BookmarkBorderOutlinedIcon style={{opacity:0.4}}/>
            </Grid>
          </Grid>
        </Grid>
        
        )
        
        
        })}
        </Grid>
      </Grid>
    </div>
  )
}

export default JobList