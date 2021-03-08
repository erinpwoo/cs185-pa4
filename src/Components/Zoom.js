import { Component } from 'react'
import MeetingsList from './MeetingsList'

class Zoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allTasks: [],
            isCreateMeeting: false,
            isEditMeeting: false,
            newTitle: '',
            newDate: '',
            newLink: '',
            isImportant: false,
            errorMsg: "",
            selectedTask: {
                id: 0,
                important: false,
                title: "",
                day: "",
                textInfor: ""
            }
        }
        this.onCreateMeeting = this.onCreateMeeting.bind(this)
        this.onNewMeetingSubmit = this.onNewMeetingSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.displayFullSchedule = this.displayFullSchedule.bind(this)
        this.fetchTasks = this.fetchTasks.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.onEditMeetingSubmit = this.onEditMeetingSubmit.bind(this)
        this.ISOToString = this.ISOToString.bind(this)
        this.stringToISO = this.stringToISO.bind(this)
    }

    componentDidMount() {
        this.fetchTasks();
    }

    deleteTask(task) {
        fetch("http://localhost:5000/tasks/" + task.id, {
            method: "DELETE"
        })
        .then(this.fetchTasks())
        var defaultState = {
            id: 0,
            important: false,
            title: "",
            day: "",
            textInfor: ""
        }
        this.setState({
            isEditMeeting: false,
            isCreateMeeting: false,
            selectedTask: defaultState,
            newTitle: '',
            newDate: '',
            newLink: '',
            isImportant: false,
            errorMsg: "",
        })
    }

    editTask(task) {
        var taskState = {
            id: task.id,
            important: task.important,
            title: task.title,
            day: this.ISOToString(task.day),
            textInfor: task.textInfor
        }
        this.setState({
            isEditMeeting: true,
            newTitle: task.title,
            newDate: this.ISOToString(task.day),
            newLink: task.textInfor,
            isImportant: task.important,
            selectedTask: taskState,
            errorMsg: ''
        })
    }

    fetchTasks() {
        this.setState( () => {
            fetch("http://localhost:5000/tasks")
            .then(res => res.json())
            .then(result => 
                this.setState({
                    allTasks: result
                })
            )
            .catch(console.log("error"));
        })
    }

    updateTask() {
        var task = this.state.selectedTask
        fetch("http://localhost:5000/tasks/" + this.state.selectedTask.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        var taskState = {
            id: 0,
            important: false,
            title: "",
            day: "",
            textInfor: ""
        }
        this.setState({
            selectedTask: taskState,
            newTitle: '',
            newDate: '',
            newLink: '',
            isImportant: false
        })
    }

    postTask() {
        var id = this.state.allTasks[this.state.allTasks.length - 1].id + 1
        var newDate = new Date(this.state.newDate)
        var task = {
            "id": id,
            "important": this.state.isImportant,
            "title": this.state.newTitle,
            "day": newDate.toISOString(),
            "textInfor": this.state.newLink
        }
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
    }

    onCreateMeeting(event) {
        this.setState({
            isCreateMeeting: true
        })
        event.preventDefault();
    }

    displayFullSchedule(event) {
        this.setState({
            isCreateMeeting: false,
            isEditMeeting: false
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
            errors += "Title must be non-empty.\n"
        }
        if (title.length > 30) {
            errors += "Title length must not exceed 30 characters.\n"
        }
        
        // date
        var today = new Date();
        var dateReg = /^\d{1,2}[/]\d{1,2}[/]\d{4}$/
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
        if (parseInt(fields[0]) < (today.getMonth() + 1)) {
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
            this.postTask();
            // reset states
            this.setState({
                isCreateMeeting: false,
                newTitle: '',
                newDate: '',
                newLink: '',
                isImportant: false,
                errorMsg: ''
            })
        }
        event.preventDefault();
    }

    ISOToString(iso) {
        var date = new Date(iso)
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    } 

    stringToISO(date) {
        return new Date(date).toISOString()
    }

    onEditMeetingSubmit(event) {
        var taskState = {
            id: this.state.selectedTask.id,
            important: this.state.isImportant,
            title: this.state.newTitle,
            day: this.stringToISO(this.state.newDate),
            textInfor: this.state.newLink
        }
        this.setState({
            selectedTask: taskState,
            errorMsg: ''
        }, () => {
            var errors = this.validateInfo(this.state.newTitle, this.state.newDate, this.state.newLink)
            this.setState({
                errorMsg: errors
            })
            if (errors == "") {
                // submit to db
                this.updateTask();
                // reset states
                this.setState({
                    isCreateMeeting: false,
                    isEditMeeting: false,
                    newTitle: '',
                    newDate: '',
                    newLink: '',
                    isImportant: false,
                    errorMsg: ''
                })
            }
        })
        event.preventDefault();
    }

    render() {
        if (this.state.isCreateMeeting) {
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
        } else if (this.state.isEditMeeting) {
            return (
                <div className="zoom-manager">
                    <h1>Zoom Meeting Manager</h1>
                    <div className="meeting-form">
                        <h3>Create new meeting:</h3>
                        <form name="new-meeting" onSubmit={this.onEditMeetingSubmit}>
                            <input type='text' defaultValue={this.state.selectedTask.title} name='newTitle' onChange={this.handleChange}/>
                            <input type='text' defaultValue={this.state.selectedTask.day} name='newDate' onChange={this.handleChange}/>
                            <input type='text' defaultValue={this.state.selectedTask.textInfor} name='newLink' onChange={this.handleChange}/>
                            <label>
                                Is important?
                                <input type='checkbox' checked={this.state.selectedTask.important} name='isImportant' onChange={this.handleChange}/>
                            </label>
                            <input className="save-meeting" type='submit' value='Save meeting'/>
                            <button className="full-schedule" onClick={this.displayFullSchedule}>Full schedule</button>
                            <p id="errorMsg">{this.state.errorMsg}</p>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="zoom-manager">
                    <h1>Zoom Meeting Manager</h1>
                        <div className="meetings-main">
                            <MeetingsList fetchTasks={this.fetchTasks} allTasks={this.state.allTasks} editTask={this.editTask} deleteTask={this.deleteTask}/>
                        <button onClick={this.onCreateMeeting}>Create Meeting</button>
                    </div>
                </div>
            );
        }
        
    }
}
export default Zoom;