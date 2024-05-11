import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Cards() {
  const navigate = useNavigate();
  const handleBookCar=()=>{
    navigate('/bookcar')
  }
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={require('../Assets/Black.jpg')} /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={handleBookCar}>Book Car</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;