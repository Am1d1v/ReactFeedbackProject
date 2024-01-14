
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import FeedbackList from './components/FeedbackList/FeedbackList';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import FeedbackForm from './components/FeedbackFrom/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/shared/AboutIconLink';
import {FeedbackProvider} from './components/context/FeedbackContext'


function App() {

 
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<>
              <FeedbackForm  />
              <FeedbackStats />
              <FeedbackList />
            </>}>
            </Route>
            
            
            <Route path='/about' element={<AboutPage />}/>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
