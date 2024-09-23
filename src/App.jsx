import { useState } from "react";

import Error from "./components/Error";
import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

import useFetch from "./hooks/useFetch";
import useAllJobs from "./hooks/useAllJobs";
import useFilteredJobs from "./hooks/useFilteredJobs";

import "./App.css";
import "./styles.css";

function App() {
  const { data, isLoading, error } = useFetch("../data.json");
  const [filters, setFilters] = useState([]);
  const { jobs } = useAllJobs(data);
  const { filteredJobs } = useFilteredJobs(jobs, filters);

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
