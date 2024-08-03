import React from "react";
import "./fees.css";

const Fees = () => {
  return (
    <div className="fees-container" id="fees-sec">
      <h1 className="fees-heading">Registration Fees</h1>
      <table className="fees">
        <tbody>
          <tr className="odd-tr">
            <td>International delegates</td>
            <td className="second-td">USD 250</td>
          </tr>
          <tr>
            <td>International students</td>
            <td className="second-td">USD 100</td>
          </tr>
          <tr className="odd-tr">
            <td>SAARC & Developing Countries delegate</td>
            <td className="second-td">USD 150</td>
          </tr>
          <tr>
            <td>SAARC & Developing Countries students</td>
            <td className="second-td">USD 75</td>
          </tr>
        </tbody>
      </table>
      <h1 className="fees-heading">National Delegates</h1>
      <table className="fees">
        <tbody>
          <tr className="odd-tr">
            <td>Academician/Professional</td>
            <td className="second-td">INR 6000</td>
          </tr>
          <tr>
            <td>Research Scholar</td>
            <td className="second-td">INR 2500</td>
          </tr>
          <tr className="odd-tr">
            <td>PG Students</td>
            <td className="second-td">INR 1500</td>
          </tr>
          <tr>
            <td>UG Students</td>
            <td className="second-td">INR 1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Fees;
