import { Component } from 'react';
import MeetingsRow from './MeetingRow'

class MeetingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allTasks: [],
            selectedTask: {
                id: 0,
                important: false,
                title: "",
                day: "",
                textInfor: ""
            } 
        }
        this.editTask = this.editTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    editTask(item) {
        this.props.editTask(item);
    }

    deleteTask(item) {
        this.props.deleteTask(item)
    }

    render() {
        var rows = [];
        this.props.allTasks.forEach(task => {
            rows.push(
                <MeetingsRow item={task} editTask={this.editTask} deleteTask={this.deleteTask}/>
            )
        })
        if (rows.length === 0) {
            return <h3>No meetings available.</h3>
        }

        return (
            <div className="meetings-section">
                <h2>Meetings List</h2>
                <p>Click on a row to edit meeting details.</p>
                <table className="meetings-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Zoom link</th>
                            <th>Is important?</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
             </div>
        );
    }
}
export default MeetingsList;