import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';

import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);

  const getData = () => {
    fetch('../data.json', {
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(response => {
      console.log('response: ', response)
      return response.json();
    })
    .then(data => {
      console.log('data: ', data);
      setJobs(data);
    });
  }

  useEffect(() => {
    getData()
  },[]);

  return (
    <>
      <header className='header'></header>
      <div className='body'>
        {jobs.length > 0 ? jobs.map(job => 
        <Grid container>
         <Grid size='grow'>
          <Card>{job.company}</Card>
         </Grid>
        </Grid>)
        : null}
      </div>
    </>
  )
}

export default App
