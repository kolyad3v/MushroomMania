import { useState } from 'react'
import { Mushroom } from './Mushroom'

const Mushrooms = () => {
	const [mushroomData] = useState<{ name: string; source: string; y: number }[]>(
		[
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
			{ name: 'pennyBun', source: 'pennyBun.glb', y: 1.048 },
			{
				name: 'puffball',
				source: 'puffball.glb',
				y: 0.663,
			},
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
		]
	)

	const mushroomSpread = mushroomData.map((el, index) => (
		<Mushroom
			data={el}
			key={index}
		/>
	))
	return <>{mushroomSpread}</>
}

export default Mushrooms
