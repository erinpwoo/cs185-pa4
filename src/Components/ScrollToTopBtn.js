import { Component, useEffect } from 'react'
import * as ReactDOM from 'react-dom'

class ScrollToTopBtn extends Component {
    constructor (props) {
        super(props);
        this.state = { 
            isVisible: false
        }
    }
    
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        var scroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if ((document.documentElement.scrollTop / scroll) >= .25) {
            // show scroll to top here
            this.setState({isVisible: true});
        } else {
            this.setState({isVisible: false});
        }
    }

    scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        return <button id="scrollToTopBtn" onClick={this.scrollToTop}>⬆</button>
    }
}
export default ScrollToTopBtn