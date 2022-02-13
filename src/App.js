import './styles.css';
import { Button } from './components/StyledButton';
import { Container } from './components/Container';
import { Flex, Column } from './components/Flex';

export default function App() {
	return (
		<div className="App">
			<Container fullVertical>
				<Button secondary big>
					Styled Components
				</Button>
				<br />
				<Button>Click me</Button>
				<Button secondary>Click me</Button>
				<Button inverse big>
					Click me
				</Button>
			</Container>
			<h4>Container</h4>
			<Container full small></Container>

			<h4>Flex</h4>
			<Flex justifyAround>
				<Button>one</Button>
				<Button>two</Button>
				<Button>three</Button>
			</Flex>
			<Flex noWrap>
				<Column three />
				<br />
				<Column three />
				<br />
				<Column three />
			</Flex>
			<br />
			<Flex justifyAround>
				<Column four />
				<Column four />
				<Column four />
			</Flex>

			<h4>Button with loading</h4>
			<Button loading />
		</div>
	);
}
