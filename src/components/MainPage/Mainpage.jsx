import React, { useEffect, useState } from 'react'
import JobList from '../JobLists/JobList';
import {Grid} from '@mui/material'
import './mainpage.css'
import Header from '../Header/Header';
import { Filters } from '../Filters/Filters';

const Mainpage = () => {

  const [state, setState] = useState({
    "searchIn": "Jobs",
    "searchText": "",
    "filterQuery": {
        "size": 10,
        "from": 0,
        "filters": {},
        "sortOn": {}
    }
 }) 

 const onChangeOnSearch = (e) =>{
  setState({
    ...state,
    searchText:e.target.value
  })
 }
 const [responseData, setResponseData] = useState()

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json();
  }
  
  useEffect(()=>{
    postData('https://devcf-api.edvanza.com/noauth/globalsearch', state)
    .then((data) => {
      setResponseData(data.result.jobs)
    });
  },[state])

  var filteredObject={}
  const onChangeInCheckBox = (name, key) =>{
    
    if(!filteredObject[name]){
      filteredObject[name] = {
        "values": [key]
      }
    }else{
      if(filteredObject[name].values.includes(key)){
          const filteredArray = filteredObject[name].values.filter(item => item !== key)
          filteredObject[name] = {
            "values": filteredArray
          }
      }else{
        filteredObject[name] = {
          "values": [...filteredObject[name].values, key]
        }
      }
    } 
    
    setState({
      ...state,
      filterQuery : {
        ...state.filterQuery,
        filters: filteredObject,
      }
    })
  }

  return (
    <div>
      <Grid container>
          <Header searchText={state.searchText} onChangeOnSearch={onChangeOnSearch} />
      </Grid>
      <Grid container className='main-page-body-container'>
        <Grid item xs={3}>
          <Filters filters={responseData?.filters} onChangeInCheckBox={onChangeInCheckBox}/>
        </Grid>
        <Grid item xs={8}>
          <JobList list={responseData?.items} total={responseData?.total} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Mainpage