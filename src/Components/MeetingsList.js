import { Component } from 'react';
import TabList from './TabList';

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
    }

    componentDidMount() {
        this.props.fetchTasks();
    }

    render() {
        var rows = [];
        this.props.allTasks.forEach(task => {
            rows.push(
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.day}</td>
                    <td>{task.textInfor}</td>
                    <td>{task.important? "Yes" : "No"}</td>
                </tr>
            )
        })
        if (rows.length === 0) {
            return <h3>No meetings available.</h3>
        }

        return (
            <div className="meetings-section">
                <h2>Meetings List</h2>
                <table className="meetings-list">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Zoom link</th>
                            <th>Is important?</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
             </div>
        );
    }
}
export default MeetingsList;