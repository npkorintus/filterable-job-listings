import { useState, useEffect } from "react";

import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";

import "./App.css";
import "./styles.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  console.log('filteredJobs: ', filteredJobs)
  console.log('filters: ', filters)

  const getData = () => {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.filters = [];
        data.forEach((job) => {
          job.filters = [];
          job.filters.push(job.role);
          job.filters.push(job.level);
          job.languages.forEach((language) => job.filters.push(language));
          job.tools.forEach((tool) => job.filters.push(tool));
        });
        setJobs(data);
        setFilteredJobs(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('update filtered jobs')
    let filtered = [];

    jobs.forEach(job => {
      if (filters.every(filter => job.filters.includes(filter))) {
        console.log(job)
        filtered.push(job)
      }
    })
    setFilteredJobs(filtered)

  }, [jobs, filters])



  return (
    <>
      <header className="header"></header>
      <div className="body">
        <FilterBar filters={filters} setFilters={setFilters} />
        <JobListings filteredJobs={filteredJobs} filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
}

export default App;
