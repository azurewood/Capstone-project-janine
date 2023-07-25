"use client"
import React from 'react';
import PagesNavBar from '../../src/components/dnavbar/pagesnavbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './news.css'

const News: React. FC = () => {
    return (
        <>
        <PagesNavBar/>
            <Card className="text-center">
            <Card.Body>
                <Card.Title>Stay tuned</Card.Title>
                <Card.Text>
                Exciting news content coming soon! 
                </Card.Text>
                <Button variant="primary" href= "/dashboard">Back to Dashboard Page</Button>
            </Card.Body>
            </Card>
        </>
    )
}
export default News;