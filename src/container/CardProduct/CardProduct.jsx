import React, {Component, Fragment} from 'react';

class CardProduct extends Component{
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

        
    }

    handleMinus = () => {
        if(this.state.order > 0)
        {
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render(){
        return(
            <Fragment>
                <div className="card">
                <div className="img-thm-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/sayap_tengah.jpg" alt=""/>
                </div>
                <p className="prod-title">title</p>
                <p className="prod-price">Rp 1000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}></input>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
            </Fragment>
            
        )
    }
}

export default CardProduct;