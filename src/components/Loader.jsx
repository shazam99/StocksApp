import React from "react";

const Loader = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "80vh", // Optional: Set a specific height if you want the loader to take the full viewport height
			}}
		>
			<div
				className="spinner-border"
				style={{ width: "5rem", height: "5rem" }}
				role="status"
			></div>
		</div>
	);
};

export default Loader;
