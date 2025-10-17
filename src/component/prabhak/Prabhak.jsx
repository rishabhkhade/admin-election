import React, { useEffect, useState } from "react";
import "./Prabhak.scss";
import axios from "axios";
import { Table } from "antd";

const Prabhak = () => {
  const [prabhakList, setPrabhakList] = useState([]);
  const [prabhakName, setPrabhakName] = useState();

  //get all prabhak
  const getAllprabhak = async (e) => {
    e?.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/getAll`
      );
      console.log(response.data.data, ">>response");

      setPrabhakList(response?.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllprabhak();
  }, []);

  //add prabhak
  const handleSubmitPrabhak = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/addPrbhak`,
        {
          prabhak: prabhakName,
        }
      );
      alert("Data submit succeefully");
      setPrabhakName("");
    } catch (error) {
      if (error.response.data.message === "prabhak number is required") {
        alert("prabhak number is required");
      }
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Prabhak no. ",
      dataIndex: "prabhakNo",
      key: "prabhakNo",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => <button>edit</button>,
    },
  ];

  return (
    <div>
      <div className="parent prabhak_parent">
        <div className="container prabhak_cont">
          <form class="add-prabhak" onSubmit={handleSubmitPrabhak}>
            <label for="">Add Prabhak Number</label>
            <input
              type="text"
              placeholder="eg. : प्रभाग क्र. ६"
              value={prabhakName}
              onChange={(e) => setPrabhakName(e.target.value)}
            />
            <button
              type="submit"
              class="btn22"
              style={{ width: "fit-content" }}
            >
              Submit
            </button>
          </form>

          <div className="table">
            <Table columns={columns} dataSource={prabhakList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prabhak;
