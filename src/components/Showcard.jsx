import React from 'react'
import Card from 'react-bootstrap/Card';

function Showcard({data}) {
  return <>
    {
        data.map((e,i)=>{
            return <Card style={{ width: '18rem', height: '300px' }} key={i}>
                  <Card.Img variant="top" className="card-img" src={e.image} />
                  <Card.Body>
                      <Card.Title className='card-title'>{e.title}</Card.Title>
                  </Card.Body>
                </Card>
             
               
        })
        
    } 
  </>
}

export default Showcard