import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Let's Talk About Your Project</h2>
            <p>
              After we get some information from you, we’ll set up a time to
              discuss your project in further detail.
            </p>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label for="email1">Email address</label>
                <input type="email" className="form-control" id="email1" />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-outline-primary btn-block"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
