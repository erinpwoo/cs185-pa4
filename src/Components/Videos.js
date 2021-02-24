import { Component } from 'react';
import Modal from './Modal'

class Videos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            source: '',
            mediaType: 'VIDEOS'
        };
        this.openModal = this.openModal.bind(this)
    }

    openModal(event) {
        this.setState({
            isModalOpen: true,
            source: event.target.getAttribute('src')
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick)
    }

    handleClick = (event) => {
        if (event.target.id == 'modal-window') {
            let img = document.getElementById("modal-img")
            if (img.tagName == "VIDEO") {
                img.pause();
            }
            this.setState({
                isModalOpen: false,
                source: ''
            })
        }
    }

    render() {
        return (
            <div class="videos">
                { this.state.source && <Modal source={this.state.source} mediaType={this.state.mediaType}/> }
                <div class="content-body">
                    <div class="row">
                        <video src={'/videos/IMG_1713.MOV'} onClick={this.openModal}></video>
                        <video src={'/videos/IMG_2311.MOV'} onClick={this.openModal}></video>
                        <video src={'/videos/IMG_0272.MOV'} onClick={this.openModal}></video>
                        <video src={'/videos/IMG_1039.MOV'} onClick={this.openModal}></video>
                        <video src={'/videos/IMG_0833.MOV'} onClick={this.openModal}></video>
                        <video src={'/videos/IMG_0490.MOV'} onClick={this.openModal}></video>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Videos;