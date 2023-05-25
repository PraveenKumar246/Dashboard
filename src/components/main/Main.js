import "./Main.css";

import Chart from "../charts/Chart";
import React, { useState } from "react";
import Monday from "./Monday";
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";

const Main = () => {

  const [val,setVal]=useState('Monday');
  const [val1,setVal1]=useState('Last 6 Months');

    const data=[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    const data1=[
      "Last 6 Months",
      "Last Week",
      "Last Month",
      "Last 1 Year",
      
  ]


  return (

      <main>
        

      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="name-card">
            <h2>Hi, Rajesh Kumar</h2>
            <div className="card_inner">
              <p className="text-primary-p">Welcome back Rajesh,your dashboard is ready.You have got notifications</p>
              
            </div>
          </div>
    
    <div className="Analysis">
      <h3>Analysis & Statistics</h3>
    </div>
        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
           <div className="time">
              <h3>Time Table</h3>

              <select id="data" onChange={(e)=>setVal(e.target.value)}>
                  {/* <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option> */}
                  {data.map((op)=><option>{op}</option>)}
              </select>
              
            </div>
          <div className="data1">
            {val === "Monday"?<Monday/>:"" }
            {val === "Tuesday"?<Tuesday/>:"" }
            {val === "Wednesday"?<Wednesday/>:"" }
            {val === "Thursday"?<Thursday/>:"" }
            {val === "Friday"?<Friday/>:"" }
            {val === "Saturday"?<Saturday/>:"" }
            {val === "Sunday"?<Sunday/>:"" }
            </div>
        </div>
 
        <div className="card1">
            
              <div className="title">
                <h3>Upcoming Events</h3>
                <a href="#">View all</a>
              </div>

            
              <div className="tag">
                <div className="lohri">
                   <h4>• "Lohri Bash" - Sharry Mann & Akhil</h4>
                   <h4 className="march">March 23 2022</h4>
                </div>

                <h4 className="sports">Sports ground No - 3,For ticketing and front row seat booking </h4>
                <div className="tag-content">
                  <h4 className="contact">contact Mr.Sahil @ +91-8456379267</h4>
                  <a href="#" className="know">Know more</a>
                </div>

              </div>

              <div className="tag">
                <div className="lohri">
                   <h4>• "Lohri Bash" - Sharry Mann & Akhil</h4>
                   <h4 className="march">March 24 2022</h4>
                </div>

                <h4 className="sports">Sports ground No - 3,For ticketing and front row seat booking </h4>
                <div className="tag-content">
                  <h4 className="contact">contact Mr.Sahil @ +91-8456379267</h4>
                  <a href="#" className="know">Know more</a>
                </div>

              </div>

              <div className="tag">
                <div className="lohri">
                   <h4>• "Lohri Bash" - Sharry Mann & Akhil</h4>
                   <h4 className="march">March 23-March 26</h4>
                </div>

                <h4 className="sports">Sports ground No - 3,For ticketing and front row seat booking </h4>
                <div className="tag-content">
                  <h4 className="contact">contact Mr.Sahil @ +91-8456379267</h4>
                  <a href="#" className="know">Know more</a>
                </div>

              </div>

              <div className="tag">
                <div className="lohri">
                   <h4>• "Lohri Bash" - Sharry Mann & Akhil</h4>
                   <h4 className="march">March 23-March 26</h4>
                </div>

                <h4 className="sports">Sports ground No - 3,For ticketing and front row seat booking </h4>
                <div className="tag-content">
                  <h4 className="contact">contact Mr.Sahil @ +91-8456379267</h4>
                  <a href="#" className="know">Know more</a>
                </div>

              </div>

          </div>
          
 
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          
            
          <div className="fee">
            
            <div className="title">
              <h3>Fee Transactions</h3>
              <a href="#">View all</a>
            </div>

          
            <div className="tag">
              <div className="lohri">
                 <h4>• Exam Fees (March Sem)</h4>
                 <h4 className="amount">₹ 2000</h4>
              </div>
            <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>
              

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Tution Fees (March Sem)</h4>
                 <h4 className="amount">₹ 92000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Exam Fees (March Sem)</h4>
                 <h4 className="amount">₹ 2000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Tution Fees (March Sem)</h4>
                 <h4 className="amount">₹ 92000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Tution Fees (March Sem)</h4>
                 <h4 className="amount">₹ 2000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Tution Fees (March Sem)</h4>
                 <h4 className="amount">₹ 92000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

            <div className="tag">
              <div className="lohri">
                 <h4>• Tution Fees (March Sem)</h4>
                 <h4 className="amount">₹ 2000</h4>
              </div>

              <div className="transaction">

              <h4 className="sports">Transaction Id</h4>
              <h4 className="transaction-data">-83733930</h4>
              <h4 className="sports">,Dated</h4>
              <h4 className="transaction-data">-April 12 2022</h4>
            </div>

            </div>

        
        

      
           
          </div>

          <div className="charts__right">

          <div className="charts__right__title">
              <div>
                <h1>Attendance Analysis</h1>
                
              </div>
              
              <select id="data" onChange={(e)=>setVal1(e.target.value)}>
                  {/* <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option> */}
                  {data1.map((op)=><option>{op}</option>)}
              </select>

            </div>

            {val1 === "Last Week"?<Chart/>:"" }
            {val1 === "Last Month"?<Chart/>:"" }
            {val1 === "Last 6 Months"?<Chart/>:"" }
            {val1 === "Last 1 Year"?<Chart/>:"" }
          </div>

        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
      
    </main>
    
  );
};

export default Main;
