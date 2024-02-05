import React from "react";
import "./Navbar.css";

import "./App.css";

function Navbar() {
	return (
		<div>
			<ul>
				<li>
					<a className="active" href="#home">
						HOME
					</a>
				</li>
				<li>
					<a href="#news">PREFERITI</a>
				</li>
			</ul>
		</div>
	);
}

function form() {
	return(<form>
  <label htmlFor="fname"></label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label htmlFor="lname">url:</label><br>
  <input type="text" id="lurl" name="lpercorso" value="http://..."><br><br>
  <input type="submit" value="Submit">
</form> 


	)

}
function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<h1>ciao</h1>
			<header className="App-header">
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
