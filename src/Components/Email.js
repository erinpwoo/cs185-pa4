import { Component, React } from 'react';

class Email extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef
    }
    // Regex for valid email addresses: https://www.w3resource.com/javascript/form/email-validation.php
    validateEmail(email, submitMsg) {
        var submitMsg = document.getElementById("submitMsg");
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (submitMsg != null) {
        submitMsg.style.visibility = "visible";
            if (email.match(regex)) {
                submitMsg.textContent = "Email successfully recorded."
            } else {
                submitMsg.textContent = "Invalid email address."
            }
        }   
    }
    render() {
        return (
            <div class="email-form">
                <h3>Enter an email and click submit</h3>
                <form name="email">
                    <input type='text' name='input' ref={this.inputRef}/>
                </form>
                <button id="submit-btn" onClick={this.validateEmail(document.email.input.value)}>Submit</button>
                <p id="submitMsg">Submit message.</p>
            </div>
        );
    }
}
export default Email;