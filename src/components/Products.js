import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import data from "../Data/products.json";
import ProductCard from "./ProductCard";


const Products = () => {

    const [products] = useState(data.products);
    return (
        <>
            <Container>
                <Row xs="2">
                    {
                        products && products.map(product => {
                            return (
                                <Col xs={12} sm={12} md={6} lg={4} className="my-3" key={product.id} >
                                    <ProductCard product={product}/>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </>
    )
}

export default Products;