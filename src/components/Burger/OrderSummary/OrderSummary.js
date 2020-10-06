import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] did Update');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>  {
            return(
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>
                    A delicioud burger with the following ingredients:
                </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <h2>Total Price: ${this.props.price}</h2>
                <h3>Continue to Checkout?</h3>
                <Button btnType={'Danger'} clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType={'Success'} clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
    
}

export default OrderSummary;