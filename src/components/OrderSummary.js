import React from 'react'
import { Card, CardBody, CardHeader, Table, CardText } from 'reactstrap'
import { CartContext } from '../components/CartContext'
import { FormContext } from './FormContext'

const OrderSummary = props => {
    const [cartItems] = React.useContext(CartContext)
    const [formInputs] = React.useContext(FormContext)
    const subTotal = cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    const shipping = formInputs.shipping ? formInputs.shipping[2] : 10
    return (
        <Card className="mb-5">
            <CardHeader>
                <h6 className="mb-0">Order Summary</h6>
            </CardHeader>
            <CardBody className="py-4">
                <p className="text-muted text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                <CardText tag="table" className="table">
                    <tbody>
                        <tr>
                            <th className="py-4">Order Subtotal </th>
                            <td className="py-4 text-right text-muted">${subTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th className="py-4">Shipping and handling</th>
                            <td className="py-4 text-right text-muted"> ${shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th className="py-4">Tax</th>
                            <td className="py-4 text-right text-muted">$0.00</td>
                        </tr>
                        <tr>
                            <th className="pt-4">Total</th>
                            <td className="pt-4 text-right h3 font-weight-normal">${(subTotal + shipping).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </CardText>
            </CardBody>
        </Card>
    )
};

export default OrderSummary;