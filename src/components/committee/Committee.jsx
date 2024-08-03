import React from 'react'
import './committee.css'

const Committee = () => {
  return (
    <div className="committee-container" id="committee-sec">
      <h1>Committee</h1>
      <div className="inner-comm">
        <div>
          <h2>Patron</h2>
          <p id="patron-content">
            <b>Prof. (Dr.) P. K. Jain, Director,</b>
            <br /> National Institute of Technology Patna
          </p>
        </div>
        <div>
          <h2>Chairman</h2>
          <p>
            <b>Prof. (Dr.) Fulena Rajak,</b> <br />
            Head, Department of Architecture & Planning,
            <br /> National Institute of Technology Patna
          </p>
        </div>
      </div>

      <div className="convenors">
        <h1>Convenors</h1>
        <div className="conv">
          <p className="conv-desc">
            <b style={{ fontSize: "20px" }}>Dr. B. K. Das,</b>
            <br /> Associate Professor, Department of Architecture & Planning,{" "}
            <br />
            National Institute of Technology Patna
          </p>
          <p className="conv-desc">
            <b style={{ fontSize: "20px" }}>Dr. Ajay Kumar, </b>
            <br />
            Associate Professor, Department of Architecture & Planning, <br />
            National Institute of Technology Patna
          </p>
          <p className="conv-desc">
            <b style={{ fontSize: "20px" }}>Dr. Ravish Kumar,</b> <br />
            Assistant Professor, Department of Architecture & Planning, <br />
            National Institute of Technology Patna
          </p>
          <p className="conv-desc">
            <b style={{ fontSize: "20px" }}>Dr. Sandeep Kumar,</b> <br />
            Assistant Professor, Department of Architecture & Planning,
            <br /> National Institute of Technology Patna
          </p>
        </div>
      </div>

      <div className="organising-comm">
        <h1 style={{ marginBottom: "30px" }}>Organizing committee</h1>
        <li className="odd-list">Prof. (Dr.) Manoj Kumar, Professor</li>
        <li>Dr. Kamini Sinha, Associate Professor</li>
        <li className="odd-list">
          Dr. Shailendra K. Mandal, Associate Professor
        </li>
        <li>Dr. Mazharul Haque, Associate Professor</li>
        <li className="odd-list">Dr. Anjali Sharma, Assistant Professor</li>
        <li>Dr. Md. Danish, Assistant Professor</li>
        <li className="odd-list">Ar. Anushri Barman, Assistant Professor</li>
        <li>Ar. Abhishek Kumar Bittu, Assistant Professor</li>
        <li className="odd-list">
          Ar. Kranti Kumar Maurya, Assistant Professor
        </li>
        <li>Ar. Supriya Kumari, Assistant Professor</li>
        <li className="odd-list">Ar. Rakesh Kumar, Assistant Professor</li>
        <li>Ar. Preksha Gupta, Assistant Professor</li>
        <li className="odd-list">Ar. Shubham Meena, Assistant Professor</li>
        <li>Ar. Shubham Meena, Assistant Professor</li>
        <li className="odd-list">Ar. Pradeep Kr. Kori, Assistant Professor</li>
      </div>
    </div>
  );
}

export default Committee