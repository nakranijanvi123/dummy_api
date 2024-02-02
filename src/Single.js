import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaCartArrowDown,FaShoppingCart,FaAngleDown} from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

function Single() {
    let [data, setdata] = useState([]);
    

    useEffect(() =>{
        axios.get('https://dummyjson.com/products/')
        .then(function (response) {
            setdata(response.data);
        })
        .catch(function (error) {
            console.log(error);
        },[]);
       
    },[])
    return (
        <>
            <div className="top-header p-2">
        <Container>
          <Row>
            <Col>
              <div className=" d-flex">
                <div className="logo">
                  <img src={require('./img/logo.SVG')}></img>
                </div>
                <div className="serch-bar d-flex">
                  <input className="serch-text" type="serch-bar" placeholder="Search for Products, Brands and More" title="Search for Products, Brands and More" autoComplete="off" style={{ width: "100%", border: "none", marginRight: "10px" }}></input>
                  <FaSearch className="serch-icon me-2"></FaSearch>
                </div>
                <div>
                  <button className='fw-bold pb-4' style={{ border: 'none', background: 'white', color: '#2874f0', height: '26px', width: '100px', margin: '7px 15px' }}>Login</button>
                </div>
                <div style={{ marginTop: '7px' }}>
                  <span className='me-2  ms-4 fw-medium'>Become a Seller</span>
                  <span className='me-2 ms-4  fw-medium'>More < FaAngleDown></FaAngleDown></span>
                  <FaShoppingCart className='ms-4  '></FaShoppingCart><span className=' ms-2 fw-medium'>Cart</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
            </div>
            {/* ------------------------------------------------------------------------------------------ */}
            <div>
                <Container>  
                    <Row className='single-pro'>
                        <Col className="single1" lg={6}>
                            <div>
                                <img src={data.thumbnail}></img>
                            </div>
                        </Col>
                        <Col className="single2" lg={6}>
                            <div className="d-flex">  
                            <div className="text1">
                            <div className="title"><FaHeart className="heart"></FaHeart> {data.id}-{data.title}</div>
                            <button className="btn2">4.5<IoIosStar></IoIosStar></button> <span className="rating">88 Rating & 10 Reviews</span>
                            <span className="logo1"> <img src={require('./img/logo1.png')}></img></span>
                            <div className="description"> - {data.description}</div>
                            <div> - {data.price}</div>
                            <div> - {data.discountPercentage}</div>
                            <div> - {data.rating}</div>
                            <div> - {data.stock}</div>
                            <div> - {data.brand}</div>
                            <div> - {data.category}</div>
                            <button className="btn1"><FaCartArrowDown></FaCartArrowDown> Add to Cart</button>

                        </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Single;