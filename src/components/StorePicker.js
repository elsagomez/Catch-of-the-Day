import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    };
    myInput = React.createRef();

    goToStore = (event) => {
        //1. Stop form from submitting
        event.preventDefault();
        //2. get the text from input
        const storeName = this.myInput.current.value;
        //3. change the page to /store/whatevertheyenter
        this.props.history.push(`/store/${storeName}`)

    }

render() {

    return (
    <form className="store-selector" onSubmit={this.goToStore}>
        <h1>Store Picker</h1>
        <h3>Please Enter a Store</h3>
        <input 
            type="text" 
            ref={this.myInput} 
            required placeholder="Store Name" 
            defaultValue ={getFunName()} />
        <button type="submit">Visit Store</button>
    </form>
    
    ) 
}
}

export default StorePicker;