import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

export const TransactionTable: React.FC = () => {
	useEffect(() => {
		api.get('/transactions').then((response) => console.log(response.data))
	}, [])

	return (
		<>
			<Container>
				<table>
					<thead>
						<tr>
							<th>Título</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Desenvolvimento de site</td>
							<td className="deposit">R$5300,00</td>
							<td>Freelas</td>
							<td>10/03/2021</td>
						</tr>
						<tr>
							<td>Aluguel</td>
							<td className="withdraw">- R$1000,00</td>
							<td>Fixo</td>
							<td>10/03/2021</td>
						</tr>
					</tbody>
				</table>
			</Container>
		</>
	)
}
