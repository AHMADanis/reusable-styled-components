import './styles.css';
import GlobalStyle from './components/GlobalStyle';
import { Button } from './components/StyledButton';
import { Container } from './components/Container';
import { Flex, Column } from './components/Flex';
import Card from './components/Card';

export default function App() {
	return (
		<div className="App">
			<GlobalStyle />
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
			<h4>Cards</h4>
			<Card>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries,
			</Card>
			<Card big>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries,
			</Card>
			<Card primary delay={1500}>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries,
			</Card>
		</div>
	);
}
