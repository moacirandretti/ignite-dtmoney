import { GlobalStyle } from './assets/styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export const App: React.FC = () => {
	return (
		<>
			<Header />
			<Dashboard />
			<GlobalStyle />
		</>
	)
}
