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
            isImportant: false
        }
        this.onCreateMeeting = this.onCreateMeeting.bind(this)
        this.onNewMeetingSubmit = this.onNewMeetingSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onCreateMeeting(event) {
        this.setState({
            createMeeting: true
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

    onNewMeetingSubmit(event) {
        // validate input here
        // submit to db
        // reset states
        this.setState({
            createMeeting: false,
            newTitle: '',
            newDate: '',
            newLink: '',
            isImportant: false
        })
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
                            <input type='text' placeholder='Date' name='newDate' onChange={this.handleChange}/>
                            <input type='text' placeholder='Time' name='newLink' onChange={this.handleChange}/>
                            <label>
                                Is important?
                                <input type='checkbox' name='isImportant' onChange={this.handleChange}/>
                            </label>
                            <input type='submit' value='Submit'/>
                        </form>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="zoom-manager">
                    <h1>Zoom Meeting Manager</h1>
                    <button onClick={this.onCreateMeeting}>Create Meeting</button>
                    <MeetingsList/>
                </div>
            );
        }
        
    }
}
export default Zoom;