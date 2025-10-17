import React, { useEffect, useState } from "react";
import "./AddVoters.scss";
import { MdDeleteOutline } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const VotersList = () => {
  const [voterList, setVoterList] = useState([]);

  const [prabhakList, setPrabhakList] = useState([]);
  const [candidateData, setCandidateData] = useState();
  const [searchParams] = useSearchParams();

  const prabhakId = searchParams.get("prabhk");

  //get all voters
  const handleVotersList = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${process.env.REACT_APP_PORT_BACKEND}`);
    } catch (error) {
      console.log(error);
    }
  };

  //get prabhak details
  const getDatafromPrabhak = async (prabhak) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}voters/getVotersByPrabhak?prabhak=${prabhak}`
      );
      setCandidateData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //all prabhak
  const getAllprabhak = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/getAll`
      );

      setPrabhakList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (prabhakId) {
      getDatafromPrabhak(prabhakId);
    }
    getAllprabhak();
  }, []);

  return (
    <>
      <div className="top_section parent">
        <div className="btn_list">
          <Link to="/add-voters" className="btn">
            Add Voter Name
          </Link>
        </div>
      </div>

      <div className="parent tab_parent">
        <div className="container tab_cont">
          <div className="tabs">
            {prabhakList &&
              prabhakList.map((item, index) => (
                <div
                  key={index}
                  className="tab1"
                  onClick={() => getDatafromPrabhak(item.prabhakNo)}
                >
                  {" "}
                  {item.prabhakNo}{" "}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div class="parent info_parent">
        <div class="container info_cont">
          <div class="data">
            {candidateData &&
              candidateData.map((item, index) => (
                <div class="card" key={index}>
                  <p class="urc_number"> {item?.urcNumber} </p>
                  <p>मतदाराचे पूर्ण नाव : {item?.votermarathiName} </p>
                  <p>वडिलांचे नाव : {item?.voterFatherName} </p>
                  <p>घर क्रमांक : {item?.housenumber} </p>
                  <div class="age">
                    <p>वय : {item?.age} </p>
                    <p>लिंग : {item?.gender}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

     
    </>
  );
};

export default VotersList;
