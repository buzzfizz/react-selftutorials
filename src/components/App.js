import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "./LanguageSelector";
import LanguangeContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
	state = { language: "english" };

	onLanguageChange = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<LanguageSelector onLanguageChange={this.onLanguageChange} />
				<LanguangeContext.Provider value={this.state.language}>
					<ColourContext.Provider value="green">
						<UserCreate />
					</ColourContext.Provider>
				</LanguangeContext.Provider>
			</div>
		);
	}
}

export default App;
