const mapJobFilters = (jobs) => {
  jobs.forEach((job) => {
    job.filters = [];
    job.filters.push(job.role);
    job.filters.push(job.level);
    job.languages.forEach((language) => job.filters.push(language));
    job.tools.forEach((tool) => job.filters.push(tool));
  });
  return jobs;
};

export default mapJobFilters;
