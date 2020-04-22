import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					image={faker.image.avatar()}
					comment={faker.lorem.text()}
					date={faker.date.weekday()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					image={faker.image.avatar()}
					comment={faker.lorem.text()}
					date={faker.date.weekday()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					image={faker.image.avatar()}
					comment={faker.lorem.text()}
					date={faker.date.weekday()}
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
