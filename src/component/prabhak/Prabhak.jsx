import React, { useEffect, useState } from "react";
import "./Prabhak.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Prabhak = () => {
  const [prabhakList, setPrabhakList] = useState([]);
  const [prabhakName, setPrabhakName] = useState("");

  //add prabhak
  const handleAddPrabhak = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/addPrbhak`,
        { prabhak: prabhakName }
      );
      alert("Prabhak added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  //get all prabhak
  const getAllprabhak = async (e) => {
    e?.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/getAll`
      );
      console.log(response, ">>response");

      setPrabhakList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllprabhak();
  }, []);

  return (
    <div>
      <div className="parent prabhak_parent">
        <div className="container prabhak_cont">
          <form onSubmit={handleAddPrabhak}>
            <div className="prabhak_input">
              <label htmlFor="">Prabhak</label>
              <input
                type="text"
                placeholder="add prabhak number"
                value={prabhakName}
                onChange={(e) => setPrabhakName(e.target.value)}
              />
            </div>

            <div className="btn" style={{width: "fit-content"}} type="submit">
              Submit
            </div>
          </form>

          <div className="data">
            {prabhakList?.length > 0 ? (
              prabhakList.map((item, index) => (
                <div className="card" key={index}>
                  <p>
                    <strong>ID:</strong> {item?.id}
                  </p>
                  <p>
                    <strong>प्रभाग:</strong> {item?.prabhakNo}
                  </p>
                </div>
              ))
            ) : (
              <p>डेटा उपलब्ध नाही.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prabhak;
