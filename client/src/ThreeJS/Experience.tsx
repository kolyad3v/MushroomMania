import { Environment } from '@react-three/drei'
import { Terrain } from './Terrain'
import Mushrooms from './Mushrooms'
import { Suspense, useEffect, useState } from 'react'
import { Physics } from '@react-three/rapier'

export default function Experience() {
	const [stress] = useState(() => new Audio('./RunAmok.mp3'))

	const playAudio = () => {
		stress.currentTime = 0
		stress.volume = 0.3
		stress.play()
	}
	// useEffect(() => {
	// 	playAudio()
	// })

	return (
		<>
			<ambientLight
				color={'white'}
				intensity={1}
			/>
			<Suspense>
				<Physics debug>
					<Mushrooms />
					<Terrain />
				</Physics>
				<Environment
					files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
					path='/textures/environmentMap/'
					background={true} // can be true, false or "only" (which only sets the background) (default: false)
					blur={0}
				/>
			</Suspense>
		</>
	)
}
