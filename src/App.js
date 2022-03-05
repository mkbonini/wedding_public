/** @format */

import Body from './components/Body';
// import Loading from './components/Loading';
// import styled from 'styled-components';
import './index.css';

function App() {
	// const Logo = styled.div`
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	height: 700px;
	// `;
	return (
		<>
			{/* {!dotsLoaded && logoLoaded && (
				<Logo>
					<h1>M + M </h1>
				</Logo>
			)}
			{!dotsLoaded && !logoLoaded && <Navbar />}
			{!logoLoaded && dotsLoaded && <Loading />} */}
			<Body />
		</>
	);
}

export default App;
