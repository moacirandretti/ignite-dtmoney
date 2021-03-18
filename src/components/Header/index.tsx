import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import Modal from 'react-modal'
import { Container, Content } from './styles'
interface HeaderProps {
	onOpenNewTransactionModal: () => void
}

export const Header: React.FC<HeaderProps> = ({
	onOpenNewTransactionModal
}) => {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="logo gt money" />
				<button type="button" onClick={onOpenNewTransactionModal}>
					Nova Transação
				</button>
			</Content>
		</Container>
	)
}
