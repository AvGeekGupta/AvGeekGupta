import React, { useState } from "react";
import "./App.sass";

function App() {
	const [theme, setTheme] = useState("dark");

	return (
		<div className="App">
			<div className={theme}>
				<h1>Hello World!</h1>
				<h2>Hello World!</h2>
				<h3>Hello World!</h3>
				<h4>Hello World!</h4>
				<h5>Hello World!</h5>
				<h6>Hello World!</h6>
				<p>Hello World!</p>
				<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
					Change Theme
				</button>
			</div>
		</div>
	);
}

export default App;
