import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipieAdd from './components/RecipieAdd';
import RecipieDetail from './components/RecipieDetail';
import RecipieList from './components/RecipieList';
import RecipieSearch from './components/RecipieSearch';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<RecipieSearch />} />
        <Route exact path='/add' element={<RecipieAdd />} />
        <Route exact path='/search/:title' element={<RecipieList />} />
        <Route exact path='/recipie/:id' element={<RecipieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
