import axios from "axios";
import React, { useState } from "react";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mainpic, setMainpic] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setMainpic(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("main_pic", mainpic);
    data.append("date", date);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        timeout: 5000,
      };
      axios.post("http://localhost:8000/api/projects/", data, config);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-md">
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Project Title
          </label>
          <input
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
          <input
            accept="image/*"
            className="form-control"
            type="file"
            id="mainpic"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProject;
