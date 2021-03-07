import { Component } from 'react'
import MeetingsList from './MeetingsList'

class Zoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            createMeeting: false,
            newTitle: '',
            newDate: '',
            newLink: '',
            isImportant: false,
            errorMsg: ""
        }
        this.onCreateMeeting = this.onCreateMeeting.bind(this)
        this.onNewMeetingSubmit = this.onNewMeetingSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.displayFullSchedule = this.displayFullSchedule.bind(this)
    }

    onCreateMeeting(event) {
        this.setState({
            createMeeting: true
        })
        event.preventDefault();
    }

    displayFullSchedule(event) {
        this.setState({
            createMeeting: false
        })
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validateInfo(title, date, link) {
        var errors = []
        // title
        if (title === '') {
            errors += "Title must be non-empty." + "<br>"
        }
        if (title.length > 30) {
            errors += "Title length must not exceed 30 characters.\n"
        }
        
        // date
        var today = new Date();
        var dateReg = /^\d{2}[/]\d{2}[/]\d{4}$/
        if (date.match(dateReg)) {
            if (!this.isDateValid(date, today)) {
                errors += "Please enter a future date. \n"
            }
        } else {
            errors += "Invalid date format. \n"
        }

        // zoom link
        if (!link.includes("zoom")) {
            errors += "Invalid Zoom link. \n"
        }
        return errors;
    }

    isDateValid(date, today) {
        var fields = date.split("/")
        if (parseInt(fields[2]) < today.getFullYear()) {
            return false;
        }
        if (parseInt(fields[0]) < today.getMonth()) {
            return false;
        }
        if (parseInt(fields[1]) <= today.getDate()) {
            return false;
        }
        return true;
    }

    onNewMeetingSubmit(event) {
        // validate input here
        var errors = this.validateInfo(this.state.newTitle, this.state.newDate, this.state.newLink)
        this.setState({
            errorMsg: errors
        })
        if (errors == "") {
            // submit to db
            // reset states
            this.setState({
                createMeeting: false,
                newTitle: '',
                newDate: '',
                newLink: '',
                isImportant: false,
                errorMsg: ''
            })
        }
        
        event.preventDefault();
    }

    render() {
        if (this.state.createMeeting) {
            return (
                <div className="zoom-manager">
                    <h1>Zoom Meeting Manager</h1>
                    <div className="meeting-form">
                        <h3>Create new meeting:</h3>
                        <form name="new-meeting" onSubmit={this.onNewMeetingSubmit}>
                            <input type='text' placeholder='Meeting title' name='newTitle' onChange={this.handleChange}/>
                            <input type='text' placeholder='Date (MM/DD/YYYY)' name='newDate' onChange={this.handleChange}/>
                            <input type='text' placeholder='Zoom link' name='newLink' onChange={this.handleChange}/>
                            <label>
                                Is important?
                                <input type='checkbox' name='isImportant' onChange={this.handleChange}/>
                            </label>
                            <input className="save-meeting" type='submit' value='Save meeting'/>
                            <button className="full-schedule" onClick={this.displayFullSchedule}>Full schedule</button>
                            <p id="errorMsg">{this.state.errorMsg}</p>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="zoom-manager">
                    <h1>Zoom Meeting Manager</h1>
                        <div className="meetings-main">
                        <button onClick={this.onCreateMeeting}>Create Meeting</button>
                        <MeetingsList/>
                    </div>
                </div>
            );
        }
        
    }
}
export default Zoom;