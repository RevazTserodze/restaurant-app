import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

const Comment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    rate: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let transformedValue =
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); // Transform first letter to uppercase, rest to lowercase
    setFormData((prevState) => ({
      ...prevState,
      [name]: transformedValue,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("comment", JSON.stringify(formData));
    setSubmitted(true);
  };

  const handleAddNewComment = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      surname: "",
      rate: "",
      comment: "",
    });
  };

  return (
    <div className="container mt-5 "style={{ height: "80vh" }}>
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h3 className="card-title mb-0">Leave a Comment</h3>
        </div>
        <div className="card-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Rate</label>
                <input
                  type="number"
                  className="form-control"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Comment</label>
                <textarea
                  className="form-control"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Add A Comment
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mt-3"
            >
              <h4>Thanks for your comment!</h4>
              <button
                onClick={handleAddNewComment}
                className="btn btn-success mt-3"
              >
                Add New Comment
              </button>
            </motion.div>
          )}
        </div>
      </div>
      {!submitted && <div style={{ height: "50px" }}></div>}
    </div>
  );
};

export default Comment;
