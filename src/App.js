import { Routes, Route, Link } from 'react-router-dom';

import { CounterPage, SearchFilterPage, TogglePage } from './pages/index';

const pageList = [
	'CounterPage',
	'SearchFilterPage',
	'TogglePage'
]

function App() {
	return (
		<div>
			<ul>
				{
					pageList.map(item => {
						return (
							<li key={item}>
								<Link to={'/' + item}>{item}</Link>
							</li>
						)
					})
				}
			</ul>

			<Routes>
				<Route path='/CounterPage' element={<CounterPage/>}/>
				<Route path='/SearchFilterPage' element={<SearchFilterPage/>}/>
				<Route path='/TogglePage' element={<TogglePage/>}/>
			</Routes>
		</div>
	)
}

export default App;