import React from "react"

const Course = () => {
  return (
    <React.Fragment>
      <h1>
        React Component Creation
      </h1>
      <div className="container">
        <h2>
          React
        </h2>
        <div className="courseTable">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th>Course Name</th>
                <td>React</td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>20hours</td>
              </tr>
              <tr>
                <th>Cost</th>
                <td>9,999only</td>
              </tr>
              <tr>
                <th>Certificate</th>
                <td>E-box Certificate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="image">
          <img alt="react" src='./logo.svg' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Course