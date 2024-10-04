export const getJobs = () => {
  return new Promise((resolve, reject) => {
    // using setTimeout to simulate a network delay
    setTimeout(() => {
      fetch('/data/jobs.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    }, 1000); // delay set to 1000 milliseconds
  });
};
