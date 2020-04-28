import React from "react";
import LanguangeContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
	renderSubmit(language) {
		return language === "english" ? "Submit" : "Voorleggen";
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguangeContext.Consumer>
					{({ language }) => this.renderSubmit(language)}
				</LanguangeContext.Consumer>
			</button>
		);
	}

	render() {
		return (
			<ColourContext.Consumer>
				{(color) => this.renderButton(color)}
			</ColourContext.Consumer>
		);
	}
}

export default Button;
