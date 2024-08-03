import React from 'react'
import './dates.css'

const Dates = () => {
  return (
    <div className="dates-container" id="dates-sec">
      <h1 className="date-heading">Important Dates:</h1>
          <table className="dates">
              <tbody>                  
        <tr className="odd-tr">
          <td>Abstracts Submission Deadline</td>
          <td className="second-td">November 30, 2024</td>
        </tr>
        <tr>
          <td>Full-Text Paper Submission Deadline</td>
          <td className="second-td">December 05, 2024</td>
        </tr>
        <tr className="odd-tr">
          <td>Notification of Acceptance/Rejection</td>
          <td className="second-td">
            Within 15 days of Abstract/full-text paper
          </td>
        </tr>
        <tr>
          <td>
            Final Paper (Camera Ready) Submission & Early Bird Registration
            Deadline
          </td>
          <td className="second-td">December 20, 2025</td>
        </tr>
        <tr className="odd-tr">
          <td>Conference Dates</td>
          <td className="second-td">December 28-29, 2025</td>
        </tr>
              </tbody>
      </table>
    </div>
  );
}

export default Dates