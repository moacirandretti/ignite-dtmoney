import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header: React.FC = () => {
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="logo gt money" />
				<button type="button">Nova Transação</button>
			</Content>
		</Container>
	)
}
