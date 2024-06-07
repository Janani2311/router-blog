import React from 'react'
import Card from 'react-bootstrap/Card';

function Showcard({data}) {
  return <>
    {
        data.map((e,i)=>{
            return <Card style={{ width: '18rem' }} key={i}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                </Card.Body>
            </Card>
        })
        
    }   
  </>
}

export default Showcard