import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import logo from "./Shree Logo-01.png";

function App() {
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [amount, setAmount] = useState("");
  const [pendingAmount, setPendingAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [date, setDate] = useState("");

  const generatePDF = () => {
    html2canvas(document.querySelector("#receipt")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      pdf.save("receipt.pdf");
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>;
    });
  };

  return (
    <div className="container">
      {/* Left Side Form */}
      <div className="form-section">
        <h2>Student Details</h2>

        <label>Student Name</label>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label>Course Name</label>
        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />

        <label>Pending Amount</label>
        <input
          type="number"
          placeholder="Pending Amount"
          value={pendingAmount}
          onChange={(e) => setPendingAmount(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <br />
        <br />

        <select
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Bank</option>
        </select>

        <button onClick={generatePDF}>GENERATE PDF</button>
      </div>

      {/* Right Side Receipt */}
      <div id="receipt" className="receipt-section">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        
        <h3>Fee Receipt</h3>

        <hr />

        <p>
          <strong>Date:</strong> {date}
        </p>

        <hr />

        <p>
          <strong>Received From:</strong> {studentName}
        </p>

        <p>
          <strong>Course:</strong> {courseName}
        </p>

        <p>
          <strong>Amount:</strong> ₹{amount}
        </p>

        <p>
          <strong>Pending Amount:</strong> ₹{pendingAmount}
        </p>

        <p>
          <strong>Payment Mode:</strong> {paymentMode}
        </p>

        <br />

        <div style={{ textAlign: "right" }}>
          <p>Authorized Signature</p>
          <strong>Pratibha Gupta</strong>
        </div>
      </div>
    </div>
  );
}

export default App;
