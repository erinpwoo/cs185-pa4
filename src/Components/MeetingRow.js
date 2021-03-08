import { Component } from 'react'

class MeetingsRow extends Component {
    constructor(props) {
        super(props);
        this.onTrashClick = this.onTrashClick.bind(this)
    }
    onTrashClick(event) {
        this.props.deleteTask(this.props.item)
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        if (this.props.item.important) {
            return (    
                <tr className="highlighted" onClick={() => this.props.editTask(this.props.item)} key={this.props.item.id}>
                    <td>{this.props.item.id}</td>
                    <td>{this.props.item.title}</td>
                    <td>{this.props.item.day}</td>
                    <td><a href={this.props.item.textInfor}>{this.props.item.textInfor}</a></td>
                    <td>{this.props.item.important? "Yes" : "No"}</td>
                    <td>
                        <input type="image" className="trash" src={process.env.PUBLIC_URL + '/images/trash.png'} onClick={this.onTrashClick}></input>   
                    </td>
                </tr>
            )
        }
        return (     
            <tr onClick={() => this.props.editTask(this.props.item)} key={this.props.item.id}>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.day}</td>
                <td><a href={this.props.item.textInfor}>{this.props.item.textInfor}</a></td>
                <td>{this.props.item.important? "Yes" : "No"}</td>
                <td>
                    <input type="image" className="trash" src={process.env.PUBLIC_URL + '/images/trash.png'} onClick={this.onTrashClick}></input>   
                </td>
            </tr>
        )
    }
}

export default MeetingsRow;

