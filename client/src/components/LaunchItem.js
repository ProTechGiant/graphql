import React from "react";
import Moment from "react-moment";
import classNames from "classnames";
import { Link } from "react-router-dom";
const LaunchItem = ({
  launch: {
    flight_number,
    launch_date_local,
    launch_success,
    launch_year,
    mission_name,
  },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {mission_name}{" "}
            </span>
          </h4>
          <p>
            Date: <Moment date={launch_date_local} />
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
