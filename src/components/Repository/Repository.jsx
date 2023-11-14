import React from "react";
import "./repository.css";
import { SiTrailforks } from "react-icons/si";
import { IoMdEye } from "react-icons/io";

const Repository = ({ name, url, watchers, forks }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, "_blank"); // Opens the URL in a new tab
    // If you want to open the URL in the same tab, you can use: window.location.href = url;
  };
  return (
    <a className="repository" href={url} onClick={handleClick}>
      <h2>{name}</h2>
      <section>
        <IoMdEye />
        <h2> {watchers}</h2>
        <SiTrailforks />
        <h2>{forks}</h2>
      </section>
    </a>
  );
};

export default Repository;
