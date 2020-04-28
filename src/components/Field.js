import React from "react";
import LanguangeContext from "../contexts/LanguageContext";

class Field extends React.Component {
	static contextType = LanguangeContext;

	render() {
		const text = this.context === "english" ? "Name" : "Naam";

		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		);
	}
}

export default Field;
