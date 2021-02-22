function Tab (props) {
    const addStyle = () => {
        if (props.out.id === props.activeTab) {
            return {
                backgroundColor: 'teal',
                color: 'white',
                fontSize: '20px',
                display: 'flexbox',
                padding: '10px 60px',
                border: '0',
                outline: '0'
            }
        } else {
            return {
                backgroundColor: 'darkslategray',
                color: 'white',
                fontSize: '20px',
                display: 'flexbox',
                padding: '10px 60px',
                border: '0',
                outline: '0'
            }
        }
    }

    return (
        <button style = {addStyle()} onClick={props.changeTab.bind(this, props.out.id)}> {props.out.title}</button>
    );
}

export default Tab;