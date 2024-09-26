import { useState, useEffect } from 'react';

const useAllJobs = (data) => {
  const [jobs, setJobs] = useState(undefined);

  useEffect(() => {
    // async function loadJobs() {
    //   const allJobs = data || [];

    //   allJobs.filters = [];

    //   allJobs.forEach((job) => {
    //     job.filters = [];
    //     job.filters.push(job.role);
    //     job.filters.push(job.level);
    //     job.languages.forEach((language) => job.filters.push(language));
    //     job.tools.forEach((tool) => job.filters.push(tool));
    //   });
    //   setJobs(allJobs);
    // }
    // loadJobs();
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
  }, [data]);

  return { jobs, setJobs };
};

const useFilteredJobs = (jobs, filters) => {
  const [filteredJobs, setFilteredJobs] = useState(undefined);

  useEffect(() => {
    let filtered = [];

    jobs?.forEach(job => {
      if (filters.every(filter => job.filters.includes(filter))) {
        filtered.push(job);
      }
    });
    setFilteredJobs(filtered);
  }, [jobs, filters]);

  return { filteredJobs, setFilteredJobs };
};

export { useAllJobs, useFilteredJobs };
