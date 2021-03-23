import { Container } from './styles'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTraansactions } from '../../hooks/useTransactions'

export const Summary: React.FC = () => {
	const { transactions } = useTraansactions()

	const summary = transactions.reduce(
		(accumulator, transaction) => {
			if (transaction.type === 'deposit') {
				accumulator.deposits += transaction.amount
				accumulator.total += transaction.amount
			} else {
				accumulator.withdraw += transaction.amount
				accumulator.total -= transaction.amount
			}
			return accumulator
		},
		{
			deposits: 0,
			withdraw: 0,
			total: 0
		}
	)

	return (
		<>
			<Container>
				<div>
					<header>
						<p>Entradas</p>
						<img src={incomeImg} alt="Entradas" />
					</header>
					<strong>
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.deposits)}
					</strong>
				</div>
				<div>
					<header>
						<p>Saídas</p>
						<img src={outcomeImg} alt="Entradas" />
					</header>
					<strong>
						-
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.withdraw)}
					</strong>
				</div>
				<div className="hightlight-background">
					<header>
						<p>Total</p>
						<img src={totalImg} alt="Entradas" />
					</header>
					<strong>
						{' '}
						{new Intl.NumberFormat('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						}).format(summary.total)}
					</strong>
				</div>
			</Container>
		</>
	)
}
