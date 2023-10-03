import config from 'config'
import jwt from 'jsonwebtoken'
export const auth = (req: any, res: any, next: () => void) => {
	// get token from header
	const token = req.header('x-auth-token')

	console.log(req.headers)
	// check if not token
	if (!token) {
		return res.status(401).json({ msg: ' no token, auth denied' })
	}

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'))
		//@ts-ignore
		req.player = decoded.player
		next()
	} catch (err) {
		res.status(401).json({ msg: 'unauthorised access, token not valid ' })
	}
}
