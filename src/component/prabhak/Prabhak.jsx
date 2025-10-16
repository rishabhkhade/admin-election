import React, { useEffect, useState } from "react";
import "./Prabhak.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Prabhak = () => {
  const [prabhakList, setPrabhakList] = useState([]);
  const [candidateData, setCandidateData] = useState([]);
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
        `${import.meta.env.REACT_APP_PORT_BACKEND}prabhak/getAll`
      );

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
                placeholder="prabhak"
                value={prabhakName}
                onChange={(e) => setPrabhakName(e.target.value)}
              />
            </div>

            <div className="btn" type="submit">
              Submit
            </div>
          </form>

          <div className="data">
            {candidateData?.length > 0 ? (
              candidateData.map((item, index) => (
                <div className="card" key={index}>
                  <p className="urc_number">{item?.urcNumber}</p>
                  <p>मतदाराचे पूर्ण नाव : {item?.votermarathiName}</p>
                  <p>वडिलांचे नाव : {item?.voterFatherName}</p>
                  <p>घर क्रमांक : {item?.housenumber}</p>
                  <div className="age">
                    <p>वय : {item?.age}</p>
                    <p>लिंग : {item?.gender}</p>
                  </div>
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
