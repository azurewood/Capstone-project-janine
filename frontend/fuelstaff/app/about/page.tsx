"use client"
import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './aboutstyles.css'
import PagesNavBar from '../../src/components/dnavbar/pagesnavbar'




const AboutBox: React. FC = () => {
    return (
     <>
     <PagesNavBar/>
      <Row xs={1} md={1} className="g-3">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="../../images/aboutimg.jpg" className = 'topimage'  
              />
              <Card.Body>
                <Card.Title className="centered-title">ABOUT</Card.Title>
                <Card.Text>
                
                    Introducing StaffFuel, the innovative food application specifically designed for hospital staff, created by Janine Soo Thow, a registered nurse with 
                    extensive experience in the healthcare industry. 
                
                    StaffFuel aims to revolutionize the way hospital employees access and enjoy their meals during hectic work shifts. Recognizing the challenges faced by hospital staff in finding nutritious food options
                    amidst short breaks and long cafeteria queues, Janine set out to develop a solution that would not only enhance the well-being of the staff but also positively impact patient care and outcomes. 
                    With StaffFuel, hospital staff can now enjoy a wide range of healthy food choices conveniently delivered to them, eliminating the need to waste precious break time waiting in line. By encouraging 
                    nutritious eating habits, this app strives to improve the overall health, performance, and focus of hospital staff, ultimately resulting in a more productive and efficient workplace.
                    Recognizing the demanding nature of their job and the potential health risks that may arise from an unhealthy diet, StaffF provides easy access to balanced and wholesome meal options, reducing the 
                    risk of chronic diseases such as diabetes and heart conditions. The app's user-friendly interface offers staff members the convenience of selecting from a variety of healthy recipes, effectively saving 
                    them time and effort in meal planning and preparation.
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </>
    );
  }
  
  export default AboutBox;
