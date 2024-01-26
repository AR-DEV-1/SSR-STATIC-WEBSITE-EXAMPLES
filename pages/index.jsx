// pages/index.jsx
import React from 'react';

const HomePage = ({ serverRenderedData }) => {
  return (
    <div>
      <h1>Static Page with SSR</h1>
      <p>Server-rendered data: {serverRenderedData}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data on the server side
  const serverRenderedData = "Data fetched on the server side";
  
  return {
    props: {
      serverRenderedData,
    },
  };
}

export default HomePage;
