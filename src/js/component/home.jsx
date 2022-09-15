// import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {
// 	return (
// 		<div className="text-center">
// 			<h1 className="text-center mt-5">Hello Rigo!</h1>
// 			<p>
// 				<img src={rigoImage} />
// 			</p>
// 			<a href="#" className="btn btn-success">
// 				If you see this green button... bootstrap is working...
// 			</a>
// 			<p>
// 				Made by{" "}
// 				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 				love!
// 			</p>
// 		</div>
// 	);
// };

// export default Home;
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor]= useState("red");
 	return ( 
	<div className="traffic-top">
		<div className="stick"></div>
		<div className="traffic-light">
			<div onClick={()=> setSelectedColor("red")} className={"light red"+ (selectedColor === "red" ? " glow":"")}></div>
			<div onClick={()=> setSelectedColor("yellow")}className={"light yellow"+ (selectedColor === "yellow" ? " glow":"")}></div>
			<div onClick={()=> setSelectedColor("green")} className={"light green"+ (selectedColor === "green" ? " glow":"")}></div>
		</div>
		</div>
	);
};

export default Home;