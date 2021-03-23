import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
	models: {
		transaction: Model
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freelancer de website',
					type: 'deposit',
					category: 'Dev',
					amount: 2000,
					creatdAt: new Date('2021-02-20 08:55:54')
				},
				{
					id: 2,
					title: 'Freelancer de website',
					type: 'withdraw',
					category: 'Debit',
					amount: 1012,
					creatdAt: new Date('2021-02-22 05:54:14')
				}
			]
		})
	},

	routes() {
		this.namespace = 'api'

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody)

			return schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
