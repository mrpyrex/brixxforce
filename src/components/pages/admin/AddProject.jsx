import React, { useState } from "react";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainpic, setMainpic] = useState(null);

  const handleChange = async (e) => {
    console.log("Loading or not");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <div className="container-md">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Project Title
          </label>
          <input
            value={title}
            type="text"
            className="form-control"
            id="title"
            placeholder="..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Project Description
          </label>
          <textarea
            value={description}
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="mainpic" className="form-label">
            Select Project Main Picture
          </label>
          <input className="form-control" type="file" id="mainpic" />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProject;
