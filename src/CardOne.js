import React, {useState} from "react";
import { Button, ListGroup, Row, Container, Col, Card } from "react-bootstrap";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdCollectionsBookmark } from "react-icons/md";
import img from "./hermes.svg";
import one from "./allservices.json";

export const CardOne = () => {

  const [cardsData,setCardsData] = useState([]);

  const getCardsData = (id='') => {
    const data = one.find(d => d.id === id);
    console.log(data)

    document.getElementById("demo").innerHTML= 'Count is '+data.count    
    setCardsData(data.content);
  
  };
  return (
    <div>
     
      <ListGroup horizontal className="buttons">
        <ListGroup.Item className="list">
          
          <Button variant="outline-primary" onClick={() => getCardsData('all')}>
            
            <p>
              <GiDeliveryDrone />
            </p>
            <p>All</p>
            <p>from £2.65</p>
          </Button>
          <h3 id="demo"></h3>
        </ListGroup.Item>
        <ListGroup.Item className="list">
          <Button variant="outline-primary" onClick={() => getCardsData('collection')}>
            <p>
              <MdCollectionsBookmark />
            </p>
            <p>Collection</p>
            <p>from £2.65</p>
          </Button>
        </ListGroup.Item>
      </ListGroup>
      
        <Row>
        
          {
            cardsData.map(c => (
              
              <Col xs={12} md={4}>
                <h2>{c.title} </h2>
              {console.log("data", one)}
  
              {
                c.items.map((cardData) => (
                  <Card style={{ width: "25rem" }}>
                    {console.log(cardData)}
                  <Card.Header style={{ display: "flex" }}>
                    <div style={{ width: "120px", padding: "20px 10px" }}>
                      {/* <img src="https://ph-test.parcelvision.net/content/images/select-service/hermes.svg" /> */}
                    </div>
                    <h3>{cardData.title}</h3>
                    <div
                      style={{
                        borderLeft: "1px solid #dad9d9",
                        padding: "0 10px",
                        width: "33%",
                      }}
                    >
                      <span>
                        <span>Delivery by</span>
                        <p>{cardData.deliver}</p>
                      </span>
                    </div>
                    <div style={{ width: "33%", textAlign: "right" }}>
                      <img src="https://ph-test.parcelvision.net/content/images/select-service/icons/icon_info_grey.svg" />
                    </div>
                  </Card.Header>
                  {console.log(cardData.item)}
                  {
                  cardData.item.map((citem) => ( 
                  <Card.Body>                  
                    <Card.Text >                    
                  
                      <div style={{ display: "flex", padding: "20px 10px" }}>
                        <div class="collection-time-section">
                          <span>Drop by {citem.drop.text}</span>
                          <div
                            class="view-head-right"
                            data-isvatapplicable="Y"
                            data-isupsnitoeu="N"
                          >
                            <h3 class="text-price">
                              <span>
                                <span class="ship-cost">{citem.price}</span>
                              </span>
                            </h3>
  
                            {/* <h4 class="text-price-ext">
                              £ <span class="new-price">7.04</span>
                              <span class="inc-vat"></span>
                            </h4> */}
                          </div>
                        </div>
                        <div>
                          <Button variant="success">BOOK NOW</Button>
                        </div>
                      </div>
                      
                    </Card.Text>
                    
                  </Card.Body>
                  ))
                }
                </Card>
                ))
              }
  
              {/* {one.map((all, index, i) => {
                console.log(all);
  
                return (
                 <> </>
                );
              })} */}
            </Col>
            ))
          }

        </Row>
     
    </div>
  );
};
