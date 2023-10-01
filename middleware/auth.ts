import jwt from 'jsonwebtoken'
export default function (
	req: { header: (arg0: string) => any; player: any },
	res: {
		status: (arg0: number) => {
			(): any
			new (): any
			json: { (arg0: { msg: string }): void; new (): any }
		}
	},
	next: () => void
) {
	// get token from header
	const token = req.header('x-auth-token')

	// check if not token
	if (!token) {
		return res.status(401).json({ msg: ' no token, auth denied' })
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'))

		req.player = decoded.player
		next()
	} catch (err) {
		res.status(401).json({ msg: 'unauthorised access, token not valid ' })
	}
}
