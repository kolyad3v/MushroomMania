import Player from '../models/Player'

import express from 'express'
import { check, validationResult } from 'express-validator'
import bcrypt from 'bcryptjs'
import jwt, { SignOptions } from 'jsonwebtoken'
import config from 'config'
const router = express.Router()
// @route       POST api/players
// @desc        register a player
// @access      public
router.post(
	'/',
	[
		check('username', 'name is required').not().isEmpty(),
		check('email', 'please include a valid email you maggot scum').isEmail(),
		check('password', 'please enter password with 6 or more characters').isLength(
			{ min: 6 }
		),
	],
	async (req: any, res: any) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}

		const { username, email, password } = req.body

		try {
			//@ts-ignore

			let player = await Player.findOne({ username })
			//@ts-ignore

			let playerEmail = await Player.findOne({ email })
			if (player) {
				return res.status(400).json({ msg: 'Username taken' })
			} else if (playerEmail) {
				return res.status(400).json({ msg: 'Email already exists you maggot scum' })
			}
			//@ts-ignore

			player = new Player({
				username,
				email,
				password,
			})

			// create a salt using bcrypt package
			const salt = await bcrypt.genSalt(10)
			// update the instance of Player above to set password to the salted hash.
			player.password = await bcrypt.hash(password, salt)
			// player.save returns a promise so wait for this to come back in
			await player.save()
			// create payload to give to client
			const payload = {
				player: {
					id: player.id,
				},
			}

			try {
				interface customSignIn extends SignOptions {
					algorithm: 'none'
				}
				let options: customSignIn = {
					expiresIn: 60000,
					algorithm: 'none',
				}

				const token = jwt.sign(payload, config.get('jwtSecret'), options)

				res.json({ token })
			} catch (err: any) {
				console.error(err.message)
				res.status(500).send('server error')
			}
		} catch (err: any) {
			console.error(err.message)
			res.status(500).send('server error')
		}
	}
)
module.exports = router
