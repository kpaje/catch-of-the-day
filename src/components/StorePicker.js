import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	myInput = React.createRef();

	goToStore = event => {
		//Stop form from submitting
		event.preventDefault();
		//Get text from input
		const storeName = this.myInput.value;
		//Change the page to /store
		this.props.history.push(`/store/${storeName}`);
	};
	componentDidMount() {
		console.log("mounted");
	}
	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Store Name"
					value={getFunName()}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

export default StorePicker;
