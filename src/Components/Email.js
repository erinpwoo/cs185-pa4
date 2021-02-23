import { Component, React } from 'react';

class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitMsg: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit(event) {
        // Regex for valid email addresses: https://www.w3resource.com/javascript/form/email-validation.php
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email != '') {
            if (this.state.email.match(regex)) {
                this.setState({
                    submitMsg: "Email successfully recorded."
                })
            } else {
                this.setState({
                    submitMsg: "Invalid email address."
                })
            }
        } 
        event.preventDefault();
    }
    

    render() {
        return (
            <div class="email-form">
                <h3>Enter an email and click submit</h3>
                <form name="email" onSubmit={this.handleSubmit}>
                    <input type='text' name='input' value={this.state.email} onChange={this.handleChange}/>
                    <input type='submit' value='Submit'/>
                    <p id="submitMsg">{this.state.submitMsg}</p>
                </form>
            </div>
        );
    }
}
export default Email;