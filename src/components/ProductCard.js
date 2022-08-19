import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from "reactstrap";

const ProductCard = (props) => {
    const { product: {title, description, price, discountPercentage: discount, images } } = props;
    return (<Card
        style={{
            width: '18rem',
            margin: "auto"
        }}
    >
        <img
            alt="Sample"
            src={images[0]}
        />
        <CardBody>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                <div className="d-flex align-items-center justify-content-between">
                    <h2>${price}</h2>
                    <small className="text-success">{discount}% Off</small>
                </div>
            </CardSubtitle>
            <CardText>
                {description}
            </CardText>
            <Button>
                Buy Product
            </Button>
        </CardBody>
    </Card>)
}

export default ProductCard;