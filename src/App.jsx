import { useState } from "react";

import { createTheme, ThemeProvider } from '@mui/material';

import Error from "./components/Error";
import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

import useFetch from "./hooks/useFetch";

import "./App.css";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: ['League Spartan'],
    fontSize: 15,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
})

function App() {
  const { data, isLoading, error } = useFetch("/data/jobs.json");
  const [filters, setFilters] = useState([]);

  if (isLoading) return <Loading />;
  if (error) return <Error error={err} />;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FilterBar filters={filters} setFilters={setFilters} />
        <JobListings allJobs={data} filters={filters} setFilters={setFilters} />
    </Layout>
    </ThemeProvider>
  );
}

export default App;
