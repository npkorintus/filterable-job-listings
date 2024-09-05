import { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

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
    getData();
  },[]);

  return (
    <>
      <header className='header'></header>
      <div className='body'>
        <Grid container spacing={2} display='flex' justifyContent='center'>
          {jobs.length > 0 ? jobs.map(job => 
            <Grid size={10}> 
              <Card>
                <CardContent>
                  <img src={job.logo} />
                  <Typography>
                    {job.company}
                  </Typography>
                  <Typography>{job.position}</Typography>
                </CardContent>
                </Card>
            </Grid>)
          : null}
        </Grid>
      </div>
    </>
  )
}

export default App
