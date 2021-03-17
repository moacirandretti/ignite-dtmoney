import { Container } from './styles'
import { Summary } from '../Summary'
import { TransactionTable } from '../TransactionTable'

export const Dashboard: React.FC = () => {
	return (
		<Container>
			<Summary />
			<TransactionTable />
		</Container>
	)
}
