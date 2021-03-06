import { FormEvent, useState, useContext } from 'react'
import { useTraansactions } from '../../hooks/useTransactions'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
	isOpen,
	onRequestClose
}) => {
	const [type, setType] = useState('deposit')
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState(0)
	const [category, setCategory] = useState('')

	const { createTransaction } = useTraansactions()

	async function handleCreactNewTransaction(event: FormEvent) {
		event.preventDefault()

		await createTransaction({
			title,
			amount,
			category,
			type
		})

		setType('deposit')
		setTitle('')
		setAmount(0)
		setCategory('')

		onRequestClose()
	}
	return (
		<>
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				overlayClassName="react-modal-overlay"
				className="react-modal-content"
			>
				<button
					type="button"
					onClick={onRequestClose}
					className="react-modal-close"
				>
					<img src={closeImg} alt="Fechar" />
				</button>

				<Container onSubmit={handleCreactNewTransaction}>
					<h2>Cadastrar Transação</h2>
					<input
						placeholder="Título"
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>

					<input
						type="number"
						placeholder="Valor"
						value={amount}
						onChange={(event) => setAmount(Number(event.target.value))}
					/>
					<TransactionTypeContainer>
						<RadioBox
							type="button"
							onClick={() => setType('deposit')}
							isActive={type === 'deposit'}
							activeColor={'green'}
						>
							<img src={incomeImg} alt="Entrada" />
							<span>Entrada</span>
						</RadioBox>

						<RadioBox
							type="button"
							onClick={() => setType('withdraw')}
							isActive={type === 'withdraw'}
							activeColor={'red'}
						>
							<img src={outcomeImg} alt="Saída" />

							<span>Saída</span>
						</RadioBox>
					</TransactionTypeContainer>
					<input
						placeholder="Categoria"
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					/>

					<button type="submit">Cadastrar</button>
				</Container>
			</Modal>
		</>
	)
}
