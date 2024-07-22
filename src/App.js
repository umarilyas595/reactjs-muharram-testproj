import { React, useState, useEffect } from 'react';

function App() {

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [citizen, setcitizen] = useState();

  const getFirstName = (event) => {
    setfirstname(event.target.value);
  }

  const getLastName = (event) => {

    setlastname(event.target.value);
  }
  const getPhoneNumber = (event) => {
    setphone(event.target.value);
  }
  const getcountry = (event) => {
    setcountry(event.target.value);
  }
  const getcity = (event) => {
    setcity(event.target.value);
  }
  const getcitizen = (event) => {
    setcitizen(event.target.value);
  }

  const handleSubmit = () => {

    const params = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      country: country,
      city: city,
      citizen: citizen
    }

    console.log(params)

  }

  return (

    <div className="container mt-5">
      <div className="row">
        <div className="col-8">
          <h3 style={{ color: "#11265F" }}>Personal Information</h3>
          <label style={{ color: "#11265F" }}>Help us get to know you by answering following questions.</label>
          <br></br>
          <br></br>


          <div className="card card_border">
            <div className="card-body  card_body">
              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> What is your first name?<label className="red_color">*</label></h5>
                <input type="text" className="form-control margin_left" value={firstname} onChange={getFirstName}></input>
              </div>

              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> ... and last name?<label className="red_color">*</label></h5>
                <input type="text" className="form-control margin_left" value={lastname} onChange={getLastName}></input>
              </div>

              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> What is your phone number?<label className="red_color">*</label></h5>
                <label className="margin_left">Having your phone number will help us communicate quicker, especially during
                  schedualing.But we respect your privacy and providing your phone number at this stage is optional.</label>
                <input type="text" className="form-control margin_left" value={phone} onChange={getPhoneNumber}></input>
              </div>

              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> What is your country of residence?<label className="red_color">*</label></h5>
                <input type="text" className="form-control margin_left" value={country} onChange={getcountry}></input>
              </div>

              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> ... and What is your city?<label className="red_color">*</label></h5>
                <input type="text" className="form-control margin_left" value={city} onChange={getcity}></input>
              </div>

              <div className="form-group">
                <h5 className="card-title"><span className="dot"></span> What is your nationality?<label className="red_color">*</label></h5>
                <label className="margin_left">What country are you a citizen of?</label>
                <input type="text" className="form-control margin_left" value={citizen} onChange={getcitizen}></input>
              </div>

            </div>
          </div>
        </div>
        <div className="col-4">

          <ul className="iq-timeline">
            <li>
              <div className="timeline-dots border-success" style={{ color: "#fff" }}><p className="dot_content">1</p></div>
              <h6 className="float-left mb-1 d-inline-block w-100 mt-2 ml-2">Welcome Page</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-primary" style={{ color: "#fff" }}><p className="dot_content">2</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Personal Information</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">3</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Web Presence</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">4</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Experience</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">5</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Education</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">6</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Expectations</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">7</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Supporting Documents</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
            <li>
              <div className="timeline-dots border-dark"><p className="dot_content">8</p></div>
              <h6 className="float-left mb-1 mt-2 ml-2">Summary</h6>
              <small className="float-right mt-1"></small>
              <div className="d-inline-block w-100">
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </div>



      <div className="row">
        <div className="col-8">
          <div className="form-group" style={{ float: "right", padding: "5px" }}>
            <button type="button" className="btn btn-success pull-right" style={{ width: "8rem", margin: "5px" }}>Previous</button>
            <button type="button" className="btn btn-success next_btn" style={{ width: "8rem" }} onClick={handleSubmit}>Next</button>
          </div>
        </div>
        <div className="col-4">
        </div>


      </div>
    </div>



  )
}

export default App;