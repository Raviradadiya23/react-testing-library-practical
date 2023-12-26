import React from "react";

export const Application = () => {
	return (
		<>
			<h1>Registration form</h1>
			<h2>Section 1</h2>
			<p>All fields are mandatory</p>
			<span title="close">X</span>
			<img
				src="https://via.placeholder.com/200"
				alt="alternate image text"
			/>
			<div data-testid="custom-element">Custom HTML element</div>
			<form>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						placeholder="Fullname"
						value="Ravi Radadiya"
						onChange={() => {}}
					/>
				</div>
				<div>
					<label htmlFor="bio">Bio</label>
					<textarea id="bio" />
				</div>
				<div>
					<label htmlFor="current-location">Current location</label>
					<select id="current-location">
						<option value="">Select a City</option>
						<option value="SU">Surat</option>
						<option value="AH">Ahmedabad</option>
						<option value="BA">Baroda</option>
						<option value="GA">Gandhinagar</option>
						<option value="RA">Rajkot</option>
					</select>
				</div>
				<div>
					<label>
						<input type="checkbox" id="terms" /> I agree to the
						terms and conditions
					</label>
				</div>
				<button disabled>Submit</button>
			</form>
		</>
	);
};
