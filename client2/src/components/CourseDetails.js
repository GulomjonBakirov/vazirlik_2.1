import React from "react";
import { Link } from "react-router-dom";

export default function CourseDetails({ category }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">{category.toUpperCase()}</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
            dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
            ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
          </div>
          <Link
            style={{ color: "#fff" }}
            to={`/myCourses/${category.toLowerCase()}`}
          >
            <button className="offset-10 col-sm-2 btn btn-primary mt-2 px-0">
              Ba'tafsil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
