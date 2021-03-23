import {
	createContext,
	useState,
	useEffect,
	ReactNode,
	useContext
} from 'react'
import { api } from '../services/api'

interface Transaction {
	id: number
	title: string
	amount: number
	type: string
	category: string
	creatdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'creatdAt'>

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[]
	createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
)

export function TransactionProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransaction] = useState<Transaction[]>([])

	useEffect(() => {
		api
			.get('/transactions')
			.then((response) => setTransaction(response.data.transactions))
	}, [])

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('/transactions', {
			...transactionInput,
			creatdAt: new Date()
		})

		const { transaction } = response.data

		setTransaction([...transactions, transaction])
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTraansactions() {
	const context = useContext(TransactionsContext)
	return context
}
