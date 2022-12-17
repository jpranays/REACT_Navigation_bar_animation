import React from "react";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

function CaretDropdown() {
	const [dropDown, setDropdown] = React.useState("");
	const containerRef = useRef();
	const tempDivRef = useRef();
	useLayoutEffect(() => {
		containerRef.current.style.height = tempDivRef.current.offsetHeight + "px";
	}, [dropDown]);
	return (
		<motion.div className="caret-dropdown-container" ref={containerRef}>
			<div
				ref={tempDivRef}
				style={{
					width: "100%",
					padding: 10,
				}}
			>
				{currentMenu(dropDown, setDropdown)}
			</div>
		</motion.div>
	);
}

function currentMenu(dropDown, setDropdown) {
	switch (dropDown) {
		case "settings":
			return (
				<motion.div layout className="active-left">
					<div
						className="icon-container"
						onClick={() => {
							setDropdown("");
						}}
					>
						<ArrowIcon />
						<h2>My Tutorial</h2>
					</div>
					<div className="icon-container">
						<BoltIcon />
						<h3>HTML</h3>
					</div>
					<div className="icon-container">
						<BoltIcon />

						<h3>CSS</h3>
					</div>
					<div className="icon-container">
						<BoltIcon />
						<h3>Javascript</h3>
					</div>
					<div className="icon-container">
						<BoltIcon />
						<h3>React</h3>
					</div>
				</motion.div>
			);
		case "animals":
			return (
				<motion.div layout className="active-left">
					<div
						className="icon-container"
						onClick={() => {
							setDropdown("");
						}}
					>
						<ArrowIcon />
						<h2>Animals</h2>
					</div>
					<div className="icon-container">
						<div className="animal">🦘</div>
						<h3>Kangaroo</h3>
					</div>
					<div className="icon-container">
						<div className="animal">🐸</div>
						<h3>Frog</h3>
					</div>
					<div className="icon-container">
						<div className="animal">🐎</div>
						<h3>Horse</h3>
					</div>
					<div className="icon-container">
						<div className="animal">🦔</div>
						<h3>Hedgehog</h3>
					</div>
				</motion.div>
			);
		default:
			return (
				<motion.div layout className="active-right">
					<div className="icon-container">
						<CogIcon />
						<h3>My Profile</h3>
					</div>
					<div
						className="icon-container"
						onClick={() => {
							setDropdown("settings");
						}}
					>
						<BoltIcon />
						<h3>Settings</h3>
					</div>
					<div
						className="icon-container"
						onClick={() => {
							setDropdown("animals");
						}}
					>
						<ChevronIcon />
						<h3>Animals</h3>
					</div>
				</motion.div>
			);
	}
}
export default CaretDropdown;
