import axios from "axios";
import React, { useState } from "react";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [mainpic, setMainpic] = useState(null);
  const [picOne, setPicOne] = useState(null);
  const [picTwo, setPicTwo] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setMainpic(file);
  };

  const handlePicOneChange = (e) => {
    const file = e.target.files[0];
    setPicOne(file);
  };

  const handlePicTwoChange = (e) => {
    const file = e.target.files[0];
    setPicTwo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("main_pic", mainpic);
    data.append("pic_one", picOne);
    data.append("pic_two", picTwo);
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
            required
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
            required
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
            required
            accept="image/*"
            className="form-control"
            type="file"
            id="mainpic"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="picone" className="form-label">
            Select Project Other Picture
          </label>
          <input
            accept="image/*"
            className="form-control"
            type="file"
            id="picone"
            onChange={handlePicOneChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pictwo" className="form-label">
            Select Project Other Picture
          </label>
          <input
            accept="image/*"
            className="form-control"
            type="file"
            id="pictwo"
            onChange={handlePicTwoChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Select Project Date
          </label>
          <input
            className="form-control"
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
