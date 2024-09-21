import { useState, useEffect } from "react";

import Error from "./components/Error";
import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

import useFetch from "./hooks/useFetch";

import "./App.css";
import "./styles.css";

function App() {
  const { data, isLoading, error } = useFetch("../data.json");
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
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
      console.log('allJobs: ', allJobs)
      setJobs(allJobs);
      setFilteredJobs(allJobs);
    }
    loadJobs();
  }, [data]);

  useEffect(() => {
    let filtered = [];

    jobs.forEach(job => {
      if (filters.every(filter => job.filters.includes(filter))) {
        filtered.push(job);
      }
    });
    setFilteredJobs(filtered);
  }, [jobs, filters]);

  return (
    <>
      <Layout>
        {isLoading && <Loading />}
        {data && (
          <>
            <FilterBar filters={filters} setFilters={setFilters} />
            <JobListings filteredJobs={filteredJobs} filters={filters} setFilters={setFilters} />
          </>
        )}
        {error && <Error error={error} />}
      </Layout>
    </>
  );
}

export default App;
