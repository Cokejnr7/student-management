import { useState } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";

const URL = "http://127.0.0.1:8000/";

const CreateStudent = () => {
  const { data: departments, isPending, err } = useFetch(URL + "departments");
  const [details, setDetails] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    title: "",
    gender: "",
    date_of_birth: "",
    nationality: "",
    state_of_origin: "",
    local_government: "",
    address: "",
    religion: "",
    phone_number: "",
    next_of_kin: "",
    kin_phone_number: "",
    name_of_sponsor: "",
    sponsor_address: "",
  });

  // const fetchDepartment = () => {};
  // const fetFaculty = () => {};
  console.log(isPending);
  const handleSubmit = async () => {
    let formData = new FormData();
    for (let x in details) {
      formData.append(x, details[x]);
    }

    console.log(formData.keys());
    const response = await axios.post(URL + "students/", formData);
    console.log(response);
  };
  return (
    <form className="ui form">
      {isPending && <Spinner />}
      <h4 className="ui dividing header">Student</h4>
      <div className="required field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="required field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <input type={"file"}></input>
      <div className="required field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>

      <h4 className="ui dividing header">Biodata</h4>
      <div className="required field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="required field">
        <label>Middle Name</label>
        <input type="text" name="middle-name" placeholder="Middle Name" />
      </div>
      <div className="required field">
        <label>Middle Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>
      <div className="required field">
        <label>Phone Number</label>
        <div className="field">
          <input type="tel" placeholder="xxx-xxxxx" maxLength={15} />
        </div>
      </div>
      <label></label>
      <input onClick={handleSubmit}></input>
      <label>Title</label>
      <select>
        <option>mr</option>
        <option>mrs</option>
        <option>miss</option>
      </select>
    </form>
  );
};

export default CreateStudent;
