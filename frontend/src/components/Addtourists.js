import React,{useState} from "react";
import axios from "axios";
import "../cssFIle//Addtourists.css"; 
// import apic from "..src/images/p5.jpg";
import { useNavigate} from "react-router-dom";


export default function Addtourists(){
  const navigate = useNavigate();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("")
    const [ipackage, setPackage] = useState("");
    const [period, setPeriod] = useState("");
    const [destination, setDestination] = useState(""); 
    const [tripStartDate, setTripStartDate] = useState(""); 
    const [tripEndDate, setTripEndDate] = useState(""); 
    const [agree, setAgree] = useState(false);

    function sendData(e){
        e.preventDefault();

        if (!agree) {
          alert("Please agree to the terms and conditions.");
          return;
        }
       
        const newTourist ={
            name,
            age,
            country,
            gender,
            ipackage,
            period,
            destination,
            tripStartDate,
            tripEndDate
        }

       // console.log(newTourist)

       axios.post('http://localhost:8000/tourist/add',newTourist).then(()=>{
        alert("Tourist Added");
        navigate("/dis");
        setName("");
        setAge("");
        setCountry("");
        setGender("");
        setPackage("");
        setPeriod("");
        setDestination("");
        setTripStartDate("");
        setTripEndDate("");
       }).catch((err)=>{
        alert(err)
       })

    }

    return(
        <div className="container ">
        <h1 className="register">Insurance Register Form</h1>
         <form onSubmit={sendData} className="form"  >
        
  <div className="form-group row">
  {/* <div className="box">
    <img src= {apic} alt="ATpic" className="p5"/>
  </div> */}
  <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>

    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputName" placeholder="Name" onChange={(e)=>{
        setName(e.target.value);
      }}required/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputAge" className="col-sm-2 col-form-label">Age</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputAge" placeholder="Age" onChange={(e)=>{
        setAge(e.target.value);
      }}/>
    </div>
  </div>
 
  <div className="form-group row">
  <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country</label>
  <div className="col-sm-10">
    <select
      className="form-control"
      id="inputCountry"
      value={country}
      onChange={(e) => setCountry(e.target.value)}required
    >
      <option value="">Select Country</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="United States">United States</option>
      <option value="Canada">Canada</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
      <option value="Canada">Canada</option>
      <option value="Australia">Australia</option>
      <option value="Germany">Germany</option>
      <option value="France">France</option>
      <option value="Spain">Spain</option>
      <option value="Italy">Italy</option>
      <option value="Japan">Japan</option>
      <option value="Brazil">Brazil</option>

     
    </select>
  </div>
</div>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={(e)=>{
        setGender(e.target.value);
          }}/>
          <label className="form-check-label" for="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={(e)=>{
        setGender(e.target.value);
      }}/>
          <label className="form-check-label" for="female">
            Female
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <div className="form-group row">
          <label htmlFor="inputPackage" className="col-sm-2 col-form-label">
            Insurance Package
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputPackage"
              value={ipackage}
              onChange={(e) => setPackage(e.target.value)}required
            >
              <option value="">Select Package</option>
              <option value="GOLD">GOLD Travel Insurance Package</option>
              <option value="SILVER">SILVER Travel Insurance Package</option>
              <option value="PLATINUM">PLATINUM Travel Insurance Package</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPeriod" className="col-sm-2 col-form-label">
            Insurance Time Period
          </label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="inputPeriod"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}required
            >
              <option value="">Select Time Period</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="12 Months">12 Months</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputDestination" className="col-sm-2 col-form-label">
            Destination
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputDestination"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}required
            />
          </div>
    </div>
        <div className="form-group row">
          <label htmlFor="inputTripStartDate" className="col-sm-2 col-form-label">
            Trip Start Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputTripStartDate"
              value={tripStartDate}
              onChange={(e) => setTripStartDate(e.target.value)}required
            />
            <div id="inputTripStartDate" class="invalid-feedback">
        Please choose a trip start date.
      </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputTripEndDate" className="col-sm-2 col-form-label">
            Trip End Date
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              id="inputTripEndDate"
              value={tripEndDate}
              onChange={(e) => setTripEndDate(e.target.value)}required
            />
            <div id="inputTripEndDate" class="invalid-feedback">
        Please choose a trip end date.
      </div>
          </div>
    </div> 
  
   <div class="col-12">
          <div class="form-check">
            {/* Checkbox for terms and conditions */}
            <input
              class="form-check-input"
              type="checkbox"
              value={agree}
              id="agreeCheckbox"
              onChange={(e) => setAgree(e.target.checked)}
              required // Required attribute
            />
            <label class="form-check-label" for="agreeCheckbox">
              Agree to terms and conditions
            </label>
          </div>
          <br />
        </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </div>
 
</form>

        </div>
    )
}