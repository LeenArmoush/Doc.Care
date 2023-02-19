import '../App.css';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Appt", age: "2/18/2023", gender: "Pain in left ear", next: "Referred to ENT" },
{ name: "Immun.", age: "2/02/2023", gender: "Covid Vaccine", next: "Booster shot"},
{ name: "Prescription", age: "1/22/2023", gender: "Sore leg and toes", next: "Prescribed Advil" },
{ name: "Immun.", age: "7/24/2022", gender: "Covid Vaccine", next: "Booster shot"}
]


function Table() {
return (
    
	<div className="Table">
	<table>
		<tr>
		<th>Label</th>
		<th>Date</th>
		<th>Description</th>
        <th>Next Step</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
            <td>{val.next}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default Table;
