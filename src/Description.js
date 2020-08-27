import React, { Component } from 'react';
import {Subjects} from './subjects'
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import './description.css';

class Description extends Component{
    
    render(){
        const description =Subjects.map(subjects =>{
        return(
            <div key={subjects.id} className="col-12 col-md-5 m-1">
                 
                  <Card>
                    <CardImg width="100%" height="200vh" src={subjects.img}/>
                    <CardBody>
                    <CardTitle >{subjects.title}</CardTitle>
                    <CardText>{subjects.text}</CardText>
                    </CardBody>
                </Card>
                  
          </div>
        )
        });
    return(
        <div className="container">
            <div className="row">
                {description}
            </div>
        </div>
    )
    }
}
export default Description;