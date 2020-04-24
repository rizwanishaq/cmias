import React from "react";

const NavBar = ({ search, onInputChange, onSearch }) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="navbar-brand">
        <i className="material-icons brand-icon">donut_small</i>CMIAS
      </div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          value={search}
          onChange={onInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={onSearch}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
