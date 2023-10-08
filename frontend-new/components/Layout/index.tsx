import React from "react";
import "./index.scss";

// import Header from '../Header';
import Side from "@/components/Side";
import Footer from "@/components/Footer";

interface IProps {
	children: React.DOMElement
}

export default function Layout({ children }: IProps) {
	return (
		<div className="Layout__container">
			{/* <Header /> */}
			<div className="Layout__content">
				<Side />
				<div className="flex min-h-screen flex-col items-center justify-between p-24 Layout__body">
					{children}
				</div>
			</div>
			<Footer />
		</div>
	)
}