import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends  React.Component {

    constructor(){
        super();
        this.state = {
            email : '',
            password: ''
    }
}

handleSubmit = event => {
    event.preventDefault();
    this.setState({email:'',password:''})
}

handleChange = event  => {
    const {value, name} = event.target;

    this.setState({[name]: value })

}

render () {

    return(

        <div className='sing-in'>
            <h2> I already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email" 
                type="email" 
                value={this.state.email}
                label="email"
                handleChange={this.handleChange}  
                required />
                
                <FormInput 
                name="password" 
                type="password"
                label="password" 
                value={this.state.password}
                handleChange={this.handleChange} 
                required />
                
                <CustomButton type="submit"> Sign In</CustomButton>
            </form>
        </div>
    );
}
}

export default SignIn;