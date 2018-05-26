import * as express from 'express'
import * as bodyParser from 'body-parser'

import * as masterRouter from './routes/index'

class App {
	public express

	constructor() {
		this.express = express()
		this.express.use(bodyParser.urlencoded({
			extended: false
		}))
		this.mountRoutes()
	}

	private mountRoutes(): void {
		this.express.use('/api', masterRouter)
	}
}

export default new App().express