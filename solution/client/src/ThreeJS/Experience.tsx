import { Environment } from '@react-three/drei'
import { Terrain } from './Terrain'
import Mushrooms from './Mushrooms'
import { Suspense } from 'react'
import { Physics } from '@react-three/rapier'
import { Leva } from 'leva'
// import { Perf } from 'r3f-perf'

export default function Experience() {
	return (
		<>
			{/* <Perf /> */}
			<Leva hidden />
			<ambientLight
				color={'white'}
				intensity={1}
			/>
			<Suspense>
				<Physics>
					<Mushrooms />
					<Terrain />
				</Physics>
				<Environment
					files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
					path="/textures/environmentMap/"
					background={true} // can be true, false or "only" (which only sets the background) (default: false)
					blur={0}
				/>
				{/* <CameraShake></CameraShake> */}
			</Suspense>
		</>
	)
}
