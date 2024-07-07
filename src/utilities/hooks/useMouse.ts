import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function useMouse() {
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	function onMouseMove(event: MouseEvent) {
		mouse.x.set(event.clientX);
		mouse.y.set(event.clientY);
	}

	useEffect(() => {
		window.addEventListener("mousemove", onMouseMove);
		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);
}
