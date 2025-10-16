import React, { useEffect, useState } from "react";
import "./AddVoters.scss";
import axios from "axios";

const AddVoters = () => {
  const [formData, setFormData] = useState({
    prabhakNumber: "",
    voterEnglishName: "",
    voterFatherName: "",
    housenumber: "",
    age: "",
    gender: "",
    urcNumber: "",
  });

  const [votersList, setVotersList] = useState([]);

  //add voters
  const handleAddVoters = async (e) => {
    e.preventDefault();
    try {
      const reponse = await axios.post(
        `${process.env.REACT_APP_PORT_BACKEND}voters/addVoters`,
        formData
      );
      alert("Data Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  //get all voters
  const getAllVoters = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PORT_BACKEND}prabhak/getAll`
      );

      setVotersList(response?.data?.data[0]?.prabhakNo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVoters();
  }, []);

  return (
    <>
      <div class="parent add_voter_parent">
        <div class="container add_voter_cont">
          <h2>Add Voters</h2>
          <form action="" onSubmit={handleAddVoters}>
            <div class="form-group">
              <div class="form-row">
                <label for="">Prabhak Number</label>
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setFormData({ ...formData, prabhakNumber: e.target.value })
                  }
                  value={formData.prabhakNumber}
                >
                  <option value="">Select prabhak Number</option>
                  <option value={votersList}>{votersList}</option>
                </select>
              </div>
              <div class="form-row">
                <label for="">Voter Name</label>
                <input
                  name="voterEnglishName"
                  value={formData.voterEnglishName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      voterEnglishName: e.target.value,
                    })
                  }
                />
              </div>
              <div class="form-row">
                <label for="">Voter Father Name</label>
                <input
                  name="voterFatherName"
                  value={formData.voterFatherName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      voterFatherName: e.target.value,
                    })
                  }
                />
              </div>

              <div class="form-row">
                <label for="">House Number</label>
                <input
                  name="housenumber"
                  value={formData.housenumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      housenumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div class="form-group">
              <div class="form-row">
                <label for="">URC Number</label>
                <input
                  name="urcNumber"
                  value={formData.urcNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      urcNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div class="form-row">
                <label for="">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  id="gender"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div class="form-row">
                <label for="">Age</label>
                <input
                  name="age"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      age: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVoters;
