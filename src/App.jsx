import { useState } from "react";

import Error from "./components/Error";
import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

import useFetch from "./hooks/useFetch";
import { useAllJobs, useFilteredJobs } from "./hooks/useJobs";

import "./App.css";
import "./styles.css";

function App() {
  const { data, isLoading, error } = useFetch("../data.json");
  const [filters, setFilters] = useState([]);
  const { jobs } = useAllJobs(data);
  const { filteredJobs } = useFilteredJobs(jobs, filters);

  if (isLoading || !filteredJobs.length) return <Loading />;

  return (
    <>
      <Layout>
        {filteredJobs  && (
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
