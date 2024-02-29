"use client";

import React from "react";

const Projects = ({ params }) => {
  console.log(params);
  return (
    <div className="p-6">
      <h1 className="p-4">Projects {params.all}</h1>
      <br />
      All Routes  
      { params.all.map((p)=> (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Projects;
