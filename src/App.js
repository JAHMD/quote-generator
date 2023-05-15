import React, { useState } from "react";
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";
import "./App.css";

const App = () => {
	const url = "https://api.quotable.io/random";
	const pageURL = window.location.href;
	let quoteData = {
		content: "Let time be your only competitor.",
		author: "Ahmed Saber",
	};
	const [quote, setQuote] = useState(quoteData);

	const generateQuote = () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setQuote(data);
			});
	};

	const copy = () => {
		navigator.clipboard.writeText(
			quote.author + " once said: " + quote.content
		);
		alert("copied");
	};

	return (
		<>
			<h1>Quote Generator React App</h1>
			<div className="container">
				<p>{quote.content}</p>
				<span>{quote.author}</span>
				<div className="btns">
					<button onClick={copy} className="btn">
						Copy
					</button>
					<button onClick={generateQuote}>Generate Another Quote</button>
					<div className="share-btn">
						Share:
						<FacebookShareButton url={pageURL} quote={quote.content}>
							<FacebookIcon />
						</FacebookShareButton>
						<TwitterShareButton url={pageURL} title={quote.content}>
							<TwitterIcon />
						</TwitterShareButton>
						<WhatsappShareButton url={pageURL} title={quote.content}>
							<WhatsappIcon />
						</WhatsappShareButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
