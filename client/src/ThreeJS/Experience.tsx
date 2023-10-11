import { Environment } from '@react-three/drei'
import { Terrain } from './Terrain'
import Mushrooms from './Mushrooms'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'

export default function Experience() {
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
					path="/textures/environmentMap/"
					background={true} // can be true, false or "only" (which only sets the background) (default: false)
					blur={0}
				/>
			</Suspense>
		</>
	)
}
