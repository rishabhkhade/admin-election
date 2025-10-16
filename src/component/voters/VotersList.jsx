import { Table } from "antd";
import React, { useEffect, useState } from "react";
import "./AddVoters.scss";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const VotersList = () => {

const [voterList, setVoterList] = useState([]);


  const columns = [
    {
      title: "Prabhak Number",
      dataIndex: "prabhakNumber",
      key: "prabhakNumber",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Voter Name",
      dataIndex: "voterEnglishName",
      key: "voterEnglishName",
    },
     {
      title: "Voter Father Name",
      dataIndex: "voterFatherName",
      key: "voterFatherName",
    },
     {
      title: "House Number",
      dataIndex: "housenumber",
      key: "housenumber",
    },
     {
      title: "Voter Name",
      dataIndex: "voterEnglishName",
      key: "voterEnglishName",
    },
     {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
      {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
      {
      title: "URC Number",
      dataIndex: "urcNumber",
      key: "urcNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button>
          <MdDeleteOutline />
        </button>
      ),
    },
  ];


  //get all voters
const handleVotersList = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.get(`${process.env.REACT_APP_PORT_BACKEND}`)
    
  } catch (error) {
    console.log(error);
    
  }
}

// useEffect(() => {
// handleVotersList
// }
  



  return (
    <>
      <div className="top_section parent">
        <div className="btn_list">
          <Link to="/add-voters" className="btn">
            Add Voter Name
          </Link>
        </div>
      </div>

      <div className="parent voter_list_parent">
        <div className="container cont-table">
          <div className="table">
            <Table columns={columns} data={voterList} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VotersList;
