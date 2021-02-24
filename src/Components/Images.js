import { Component } from 'react';
import Modal from './Modal'
class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            source: '',
            mediaType: 'IMAGES',
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
            <div class="images">
                { this.state.isModalOpen && <Modal source={this.state.source} mediaType={this.state.mediaType}/> }
                <div class="content-body">
                    <div class="row">
                        <img src={'/images/IMG_0252.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_0970.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1005.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1020.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1639.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1706.JPG'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1753.JPG'} onClick={this.openModal}/>
                        <img src={'/images/IMG_2086.JPG'} onClick={this.openModal}/>
                        <img src={'/images/IMG_2323.JPG'} onClick={this.openModal}/>
                        <img src={'/images/IMG_2808.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_6730.jpg'} onClick={this.openModal}/>
                        <img src={'/images/IMG_1735.JPG'} onClick={this.openModal}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Images;