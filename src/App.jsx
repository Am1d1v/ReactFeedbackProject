import Header from './components/Header/Header';
import FeedbackItem from './components/FeedbakcItem/FeedbackItem';

function App() {
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
