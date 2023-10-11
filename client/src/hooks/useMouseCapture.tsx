import { useMemo, useEffect } from 'react'

// Custom hook for capturing mouse input
export function useMouseCapture() {
	// Create a memoized object to store mouse coordinates
	const mouse = useMemo(() => ({ x: -1, y: 0 }), [])

	// Event handler for mouse movement
	const mouseMove = (e: Event) => {
		// Check if the pointer is locked to the body (mouse captured)
		if (
			document.pointerLockElement === document.body ||
			// @ts-ignore
			document.mozPointerLockElement === document.body
		) {
			// Update the mouse coordinates with the movement values
			// @ts-ignore
			mouse.x += e.movementX
			// @ts-ignore
			mouse.y += e.movementY
		}
	}

	// Function to request pointer lock (capture mouse)
	const capture = () => {
		// Ask the browser to lock the pointer
		document.body.requestPointerLock =
			document.body.requestPointerLock ||
			// @ts-ignore
			document.body.mozRequestPointerLock ||
			// @ts-ignore
			document.body.webkitRequestPointerLock
		document.body.requestPointerLock()
	}

	useEffect(() => {
		// Add event listeners for mouse movement and click
		document.addEventListener('mousemove', mouseMove)
		document.addEventListener('click', capture)

		// Clean up the event listeners when the component unmounts
		return () => {
			document.removeEventListener('mousemove', mouseMove)
			document.removeEventListener('click', capture)
		}
	})

	return mouse // Return the mouse object with the current mouse coordinates
}
