import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h2>About this project</h2>
            <p>React App</p>
            <Link to="/">Back To Home</Link>
        </div>
    </Card>
  )
}

export default AboutPage