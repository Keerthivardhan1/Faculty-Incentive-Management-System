import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; 

function PatentForm() {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const [file, setFile] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  const fileInputRef = useRef();
  
  const handleReset = () => {
    setFormData({
      ...formData,
      paperTitle: "",
      firstAuthor: "",
      conferenceName: "",
      publisherName: "",
      Genre: "Conference",
      status: "",
      link: "",
    });
    setFile([]);
    setMessage(""); 
    fileInputRef.current.value = "";
  };

  const [formData, setFormData] = useState({
    fid: "",
    designation: "",
    department: "",
    paperTitle: "",
    firstAuthor: "",
    conferenceName: "",
    publisherName: "",
    Genre: "Conference",
    status: "",
    link: "",
  });

  const fetchData = async () => {
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/home/find/conference",
    //     { data: search }
    //   );
    //   setResults(response.data);
    //   console.log("Fetched data:", response.data.pdf);
    //   console.log("Results length:", results.length);
    // } catch (error) {
    //   console.error("Error while fetching data:", error);
    // }
  };

  

  const onFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFile(selectedFiles);
  };

  const getUpdated = (e) => {
    setSearch(e.target.value);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, pdfFiles: files });
  };
/*
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fid", storedUserData.empId);
      formDataToSend.append("designation", storedUserData.Designation);
      formDataToSend.append("department", storedUserData.Department);
      formDataToSend.append("paperTitle", formData.paperTitle);
      formDataToSend.append("firstAuthor", formData.firstAuthor);
      formDataToSend.append("conferenceName", formData.conferenceName);
      formDataToSend.append("publisherName", formData.publisherName);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("Genre", formData.Genre);
      formDataToSend.append("link", formData.link);

      for (let i = 0; i < file.length; i++) {
        formDataToSend.append("pdfFiles", file[i]);
      }

      fetch("http://localhost:5000/home/conference/insert", {
        method: "POST",
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          setMessage(data.message);
          if (data.message === "PDFs merged and saved successfully") {
            alert(
              "The token generated for this submission is " +
                data.conferenceApplication.token
            );
          }
        })
        .catch((error) => {
          setMessage("An error occurred while submitting the form.");
          console.error(error);
        });
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
      console.error("Error submitting patent application:", error);
    }
  };

  */

  const handleSubmit = ()=>{
    // todo
  }

  return (
    <div className="main-container">
      
      <div className="bodyClass">
        <div className="content">
          <div className="container">
            <h1 style={{ textAlign: "center" }}>Conference Proceedings</h1>
            <br />
            <br />
            <div className="grid">
              <div className="label">
                <label htmlFor="fid" className="label">Faculty ID:</label>
              </div>
              {/* <div className="value">{storedUserData.empId}</div> */}

              <div className="label">
                <label htmlFor="designation">Designation:</label>
              </div>
              {/* <div className="value">{storedUserData.Designation}</div> */}

              <div className="label">
                <label htmlFor="department">Department:</label>
              </div>
              {/* <div className="value">{storedUserData.Department}</div> */}

              <div className="label">
                <label htmlFor="paperTitle">Paper Title:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="paperTitle"
                  name="paperTitle"
                  value={formData.paperTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, paperTitle: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">
                <label htmlFor="firstAuthor">First Author:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="firstAuthor"
                  name="firstAuthor"
                  value={formData.firstAuthor}
                  onChange={(e) =>
                    setFormData({ ...formData, firstAuthor: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">
                <label htmlFor="conferenceName">Conference Name:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="conferenceName"
                  name="conferenceName"
                  value={formData.conferenceName}
                  max={today}
                  onChange={(e) =>
                    setFormData({ ...formData, conferenceName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">
                <label htmlFor="publisherName">Publisher Name:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="publisherName"
                  name="publisherName"
                  value={formData.publisherName}
                  max={today}
                  onChange={(e) =>
                    setFormData({ ...formData, publisherName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">
                <label htmlFor="link">Link:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={formData.link}
                  max={today}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">
                <label htmlFor="status">Status:</label>
              </div>
              <div className="value">
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={formData.status}
                  max={today}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  required
                />
              </div>

              <div className="label">File Upload</div>
              <div className="value">
                <input
                  type="file"
                  name="pdfFiles"
                  multiple
                  accept=".pdf"
                  onChange={onFileChange}
                  ref={fileInputRef}
                />
              </div>
            </div>
            <div className="button">
              <Button onClick={handleSubmit}>Submit</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={handleReset} variant="secondary">
                Reset
              </Button>
            </div>
            <br />
            <div className="message">
              <p>{message}</p>
            </div>

            <div className="status-heading">
              <h2>Status</h2>
            </div>

            <div className="status-search">
              <input type="text" onChange={getUpdated} value={search} />
            </div>
            <div className="button">
              <Button onClick={fetchData}>Submit</Button>
            </div>

            <table className="result-table">
              <thead>
                <tr>
                  <th>Incentive Type</th>
                  <th>TID</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 ? (
                  results.map((result) => (
                    <tr key={result._id}>
                      <td>{result.Genre}</td>
                      <td>{result.token}</td>
                      <td>{result.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No results found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatentForm;
