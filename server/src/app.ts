import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'
import * as compression from 'compression'
import * as masterRouter from './routes/index'

class App {
	public express

	constructor() {
		this.express = express()
		this.express.use(bodyParser.urlencoded({
			extended: false
		}))
		this.express.use(compression())
		this.mountRoutes()
	}

	private mountRoutes(): void {
		this.express.use(express.static(path.join(__dirname, 'client-dist')))

		this.express.use('/api', masterRouter)

		this.express.use((req, res) => {
			res.sendFile(path.join(__dirname , './client-dist/index.html'));
		})
	}
}

export default new App().express