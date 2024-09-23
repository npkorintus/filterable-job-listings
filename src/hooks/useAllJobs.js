import { useState, useEffect } from 'react';

const useAllJobs = (data) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const allJobs = data || [];

      allJobs.filters = [];

      allJobs.forEach((job) => {
        job.filters = [];
        job.filters.push(job.role);
        job.filters.push(job.level);
        job.languages.forEach((language) => job.filters.push(language));
        job.tools.forEach((tool) => job.filters.push(tool));
      });
      setJobs(allJobs);
      setFilteredJobs(allJobs);
    }
    loadJobs();
  }, [data]);

  return { jobs, filteredJobs, setJobs, setFilteredJobs };
}

export default useAllJobs;
