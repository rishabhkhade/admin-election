import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [prabhakCount, setPrabhakCount] = useState(0);
  const [votersCount, setVotersCount] = useState(0);


  const safeLengthFromResponse = (res) => {
    if (!res) return 0;
    if (Array.isArray(res)) return res.length;
    if (res.data) {
      if (Array.isArray(res.data)) return res.data.length;
      if (res.data.data && Array.isArray(res.data.data)) return res.data.data.length;
    }
    return 0;
  };

  const fetchPrabhakCount = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT_BACKEND}prabhak/getAll`);
      setPrabhakCount(safeLengthFromResponse(res));
    } catch (err) {
      console.error("Failed to fetch prabhak list:", err);
    }
  };

  const fetchVotersCount = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_PORT_BACKEND}voters/getAll`);
      setVotersCount(safeLengthFromResponse(res));
    } catch (err) {
      console.error("Failed to fetch voters list:", err);
    }
  };

  useEffect(() => {
    fetchPrabhakCount();
    fetchVotersCount();
  }, []);

  return (
    <>
      <div className="dashboard">
        <Link className="box" to="/contactlist">
          <h1>Prabhak</h1>
          <p>Prabhak List</p>
          <p className="count">{prabhakCount}</p>
        </Link>
        <Link className="box" to="/bloglist">
          <h1>Voters</h1>
          <p>Voters List</p>
          <p className="count">{votersCount}</p>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
