import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import CaretDropdown from "./CaretDropdown";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<>
			<nav>
				<ul>
					<li>
						<PlusIcon />
					</li>
					<li>
						<BellIcon />
					</li>
					<li>
						<MessengerIcon />
					</li>
					<li>
						<CaretIcon
							onClick={() => {
								setIsOpen(!isOpen);
							}}
							style={{
								transform: !isOpen ? "rotate(0deg)" : "rotate(180deg)",
								transition: "transform 0.3s ease-in-out",
							}}
						/>
					</li>
				</ul>
			</nav>
			<AnimatePresence>
				{isOpen === true ? (
					<motion.div
						exit={{
							opacity: 0,
						}}
					>
						<CaretDropdown />
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	);
}

export default Nav;
