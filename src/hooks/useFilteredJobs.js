import { useState, useEffect } from 'react';

const useFilteredJobs = (jobs, filters) => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    let filtered = [];

    jobs.forEach(job => {
      if (filters.every(filter => job.filters.includes(filter))) {
        filtered.push(job);
      }
    });
    setFilteredJobs(filtered);
  }, [jobs, filters]);

  return { filteredJobs, setFilteredJobs };
}

export default useFilteredJobs;
