import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
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
      data.filters = [];
      data.forEach(job => {
        job.filters = [];
        job.filters.push(job.role);
        job.filters.push(job.level);
        job.languages.forEach(language => job.filters.push(language));
        job.tools.forEach(tool => job.filters.push(tool));
      })
      console.log('data: ', data);
      setJobs(data);
    });
  }

  useEffect(() => {
    getData();
  },[]);

  const bullet = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <>
      <header className='header'></header>
      <div className='body'>
        <Grid container spacing={2} display='flex' justifyContent='center'>
          {jobs.length > 0 ? jobs.map(job => 
            <Grid key={job.id} size={10}> 
              <Paper elevation={8} component={'div'}>
                <Card sx={{ display: 'flex', padding: '24px', justifyContent: 'space-between', alignItems: 'center' }}>
                  <CardMedia 
                    component='img' 
                    image={job.logo} 
                    alt={`${job.company} logo`} 
                    // height='100'
                    // width='50'
                    sx={{ 
                      width: '100px',
                      // height: '10%' 
                    }} 
                  />
                  <Box sx={{ }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography>{job.company}</Typography>
                      {job.new && <Chip label='NEW!' />}
                      {job.featured && <Chip label='FEATURED' />}
                    </Box>
                    <Box>
                      <Typography>{job.position}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography>{job.postedAt}</Typography>
                      {bullet}
                      <Typography>{job.contract}</Typography>
                      {bullet}
                      <Typography>{job.location}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    {job.filters.map(filter => <Chip key={filter} label={filter} />)}
                  </Box>
                  <CardContent>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>)
          : null}
        </Grid>
      </div>
    </>
  )
}

export default App
