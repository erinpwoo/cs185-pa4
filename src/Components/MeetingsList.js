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
        this.fetchTasks = this.fetchTasks.bind(this)
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

    render() {
        this.fetchTasks();
        var rows = [];
        this.state.allTasks.forEach(task => {
            rows.push(
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.day}</td>
                    <td>{task.textInfor}</td>
                </tr>
            )
        })
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
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
             </div>
        );
    }
}
export default MeetingsList;