import { useState } from 'react'
import { Mushroom } from './Mushroom'
import { RigidBody } from '@react-three/rapier'
import { generateUUID } from 'three/src/math/MathUtils.js'
import { addPoints, usePoints } from '../context/Points/PointsState'

const Mushrooms = () => {
	const [mushroomData] = useState<
		{ name: string; source: string; y: number }[]
	>([
		{
			name: 'deathcap',
			source: 'deathcap.glb',
			y: 0.646,
		},
		{
			name: 'fieldMushroom',
			source: 'fieldMushroom.glb',
			y: 0,
		},
		{
			name: 'flyAgaric',
			source: 'flyAgaric.glb',
			y: 0.083,
		},
		{
			name: 'goldenWaxcap',
			source: 'goldenWaxcap.glb',
			y: -0.603,
		},
		{
			name: 'hornOfPlenty',
			source: 'hornOfPlenty.glb',
			y: 0.42,
		},
		{
			name: 'jubileeWaxcap',
			source: 'jubileeWaxcap.glb',
			y: -0.603,
		},
		{
			name: 'magicMushrooms',
			source: 'magicMushrooms.glb',
			y: -0.62,
		},
		{
			name: 'puffball',
			source: 'puffball.glb',
			y: 0.663,
		},
		{ name: 'pennyBun', source: 'pennyBun.glb', y: 1.048 },
		{
			name: 'shaggyInkcap',
			source: 'shaggyInkcap.glb',
			y: 0.984,
		},
		{
			name: 'theSickener',
			source: 'theSickener.glb',
			y: 0.107,
		},
		{
			name: 'truffle',
			source: 'truffle.glb',
			y: 0.3,
		},
	])

	const [, pointsDispatch] = usePoints()
	const [showMushroom, setShowMushroom] = useState({
		deathcap: true,
		fieldMushroom: true,
		flyAgaric: true,
		goldenWaxcap: true,
		hornOfPlenty: true,
		jubileeWaxcap: true,
		magicMushrooms: true,
		puffball: true,
		pennyBun: true,
		shaggyInkcap: true,
		theSickener: true,
		truffle: true,
	})
	const [munch] = useState(() => new Audio('./munch.mp3'))
	const playMunch = (): void => {
		munch.currentTime = 0
		munch.volume = 0.3
		munch.play()
	}

	return (
		<>
			{showMushroom.deathcap && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[0].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, deathcap: false })
						addPoints(pointsDispatch, -10)
					}}
				>
					<Mushroom data={mushroomData[0]} />
				</RigidBody>
			)}
			{showMushroom.fieldMushroom && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[1].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, fieldMushroom: false })
						addPoints(pointsDispatch, 15)
					}}
				>
					<Mushroom data={mushroomData[1]} />
				</RigidBody>
			)}
			{showMushroom.flyAgaric && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[2].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, flyAgaric: false })
						addPoints(pointsDispatch, -5)
					}}
				>
					<Mushroom data={mushroomData[2]} />
				</RigidBody>
			)}
			{showMushroom.goldenWaxcap && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[3].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, goldenWaxcap: false })
						addPoints(pointsDispatch, 30)
					}}
				>
					<Mushroom data={mushroomData[3]} />
				</RigidBody>
			)}
			{showMushroom.hornOfPlenty && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[4].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, hornOfPlenty: false })
						addPoints(pointsDispatch, 20)
					}}
				>
					<Mushroom data={mushroomData[4]} />
				</RigidBody>
			)}
			{showMushroom.jubileeWaxcap && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[5].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, jubileeWaxcap: false })
						addPoints(pointsDispatch, 25)
					}}
				>
					<Mushroom data={mushroomData[5]} />
				</RigidBody>
			)}
			{showMushroom.magicMushrooms && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[6].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, magicMushrooms: false })
						addPoints(pointsDispatch, 20)
					}}
				>
					<Mushroom data={mushroomData[6]} />
				</RigidBody>
			)}
			{showMushroom.puffball && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[7].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, puffball: false })
						addPoints(pointsDispatch, 10)
					}}
				>
					<Mushroom data={mushroomData[7]} />
				</RigidBody>
			)}
			{showMushroom.pennyBun && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[8].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, pennyBun: false })
						addPoints(pointsDispatch, 35)
					}}
				>
					<Mushroom data={mushroomData[8]} />
				</RigidBody>
			)}
			{showMushroom.shaggyInkcap && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[9].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, shaggyInkcap: false })
						addPoints(pointsDispatch, 15)
					}}
				>
					<Mushroom data={mushroomData[9]} />
				</RigidBody>
			)}
			{showMushroom.theSickener && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[10].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, theSickener: false })
						addPoints(pointsDispatch, -15)
					}}
				>
					<Mushroom data={mushroomData[10]} />
				</RigidBody>
			)}

			{showMushroom.truffle && (
				<RigidBody
					type="fixed"
					colliders="cuboid"
					key={generateUUID()}
					name={mushroomData[11].name}
					restitution={0}
					onContactForce={() => {
						console.log('hit')
						playMunch()
						setShowMushroom({ ...showMushroom, truffle: false })
						addPoints(pointsDispatch, 15)
					}}
				>
					<Mushroom data={mushroomData[11]} />
				</RigidBody>
			)}
		</>
	)
}

export default Mushrooms
