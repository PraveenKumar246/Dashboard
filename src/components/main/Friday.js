import './day.css';
import React from 'react';
import avatar from "../../assets/BallamPraveenKumar.jpg";

// Example of a data array that
// you might receive from an API
const data = [
{ Time: "11:00 Am - 12:00 Pm", Subject: "Hindi",Teacher: "Ms.Reena Bhatia" },
{ Time: "12:00 Pm - 1:00 Pm", Subject: "English", Teacher: "Ms.Kajal Dvivedi" },
{ Time: "1:00 Pm - 2:00 Pm", Subject: "Physics", Teacher: "Ms.Priya Kumari"},
{ Time: "2:00 Pm - 3:00 Pm", Subject: "Break", Teacher: "NA" },
{ Time: "3:00 Pm - 4:00 Pm", Subject: "Sports", Teacher: "Mr.Ajay Ahalawat" },
{ Time: "4:00 Pm - 5:00 Pm", Subject: "Sports", Teacher: "Mr.Ajay Ahalawat"},
{ Time: "5:00 Pm - 6:00 Pm", Subject: "Home", Teacher: "NA" },

]



function Friday() {

return (
	<div className="App">
       
	  <table>
		<tr>
		<th>Time</th>
		<th>Subject Name</th>
		<th>Teacher's Name</th>
		</tr>
		{data.map((val, key) => {
		return (
            
                <tr key={key}>
                <td className='Time'>{val.Time}</td>
                <td className='subject'>{val.Subject}</td>
				<div className='image'>
				   <img width="25" src={avatar} alt="avatar" />
                   <td className='teacher'>{val.Teacher}</td>
				</div>
                </tr>
            
		)
		})}
	</table>
    </div>
	
);
}

export default Friday;
