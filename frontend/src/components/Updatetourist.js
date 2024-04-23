import React, {useState , useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../cssFIle//Update.css"; 


export default function Updatetourist(){
  const navigate = useNavigate();
  const id = useParams().id
  
    const [tourist, setTourist] = useState({

        name: "",
        age: "",
        country: "",
        gender: "",
        ipackage: "",
        period: "",
        destination: "",
        tripStartDate: "",
        tripEndDate: ""
    });
 
    

    useEffect(() =>{
        
            axios.get(`http://localhost:8000/tourist/get/${id}`).then((res)=> {
                setTourist(res.data.tourist);
                
               
            }).catch((err)=> {
                alert(err.message);
            })
        

    } ,[id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTourist({ ...tourist, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.put(`http://localhost:8000/tourist/update/${id}`, tourist);
        alert("Tourist details updated succesfully");
        navigate("/dis");
        // Redirect to display page or any other page after updating
        // history.push("/dis");
      };

     return(
        <div className="form-container">
            <h1 className="form-title">Update Insurance Profile</h1>
            <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name </label>
           <div className="col-sm-10">
            <input type="text" className="form-control" id="inputName" name="name" value={tourist.name}  onChange={handleChange} />
         </div> 
        </div>
        <div className="form-group row">
          <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="inputAge" name="age" value={tourist.age}   onChange={handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputCountry" name="country" value={tourist.country} onChange={handleChange} />
          </div>
        </div>
        {/* Add radio buttons for gender */}
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" id="male" name="gender" value="male" checked={tourist.gender === "male"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="female" name="gender" value="female" checked={tourist.gender === "female"} onChange={handleChange} />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        {/* Add select for insurance package */}
        <div className="form-group row">
          <label htmlFor="inputPackage" className="col-sm-2 col-form-label">Insurance Package</label>
          <div className="col-sm-10">
            <select className="form-control" id="inputPackage" name="ipackage" value={tourist.ipackage} onChange={handleChange}>
              <option value="">Select Package</option>
              <option value="GOLD Travel Insurance Package">GOLD Travel Insurance Package</option>
              <option value="SILVER Travel Insurance Package">SILVER Travel Insurance Package</option>
              <option value="PLATINUM Travel Insurance Package">PLATINUM Travel Insurance Package</option>
            </select>
          </div>
        </div>
        {/* Add select for time period */}
        <div className="form-group row">
          <label htmlFor="inputPeriod" className="col-sm-2 col-form-label">Insurance Time Period</label>
          <div className="col-sm-10">
            <select className="form-control" id="inputPeriod" name="period" value={tourist.period} onChange={handleChange}>
              <option value="">Select Time Period</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="12 Months">12 Months</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputDestination" className="col-sm-2 col-form-label">Destination</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputDestination" name="destination" value={tourist.destination} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputTripStartDate" className="col-sm-2 col-form-label">Trip Start Date</label>
          <div className="col-sm-10">
          <input type="text" className="form-control-1" id="inputTripStartDate" name="tripStartDate" value={tourist.tripStartDate ? tourist.tripStartDate.slice(0, 10) : ""} onChange={handleChange} />

            <input type="date" className="form-control-1" id="inputTripStartDate" name="tripStartDate"  onChange={handleChange} />
         
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputTripEndDate" className="col-sm-2 col-form-label">Trip End Date</label>
          <div className="col-sm-10">
          <input type="text" className="form-control-1" id="inputTripEndDate" name="tripEndDate" value={tourist.tripEndDate ? tourist.tripEndDate.slice(0, 10) : ""} onChange={handleChange} />

            <input type="date" className="form-control-1" id="inputTripEndDate" name="tripEndDate"  onChange={handleChange}/>
          </div>
        </div>
        <button type="submit" class="btn">Update</button>
        

       

      </form>
        </div>
     )
}