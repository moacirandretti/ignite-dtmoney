import { GlobalStyle } from './assets/styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import Modal from 'react-modal'
import React, { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')

export const App: React.FC = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
		false
	)

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true)
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false)
	}
	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</>
	)
}
