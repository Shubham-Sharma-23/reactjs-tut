import * as React from 'react';
import Toasts from '../containers/toasts-container';

const onClick = () => {
    console.log('ddd');
}
class ToastEx extends React.Component {

    constructor() {
        super();
    }
    onClickHandler = (flag, event) => {
        console.log(this.props)
        if (flag === 'error') {
            this.props.showError({ msg: `Error ${this.refs.textBox.value} `, autoHide: false });
        } else if (flag === 'success') {
            this.props.showSuccess({ msg: `Success ${this.refs.textBox.value} ` })
        }
        this.refs.textBox.value = '';

    };
    render() {

        return (
            <div className="home-container row">
                <div className="explanation col-md-12">
                    <p>Toasts can be dismissed manually by clicking the &times; icon. Toasts will automatically dismiss after 3,500 milliseconds.</p>
                    <p>The Redux state of the application is logged in the Console.</p>
                </div>
                <div className='col-md-4'>
                    <input type="text" className="form-control" id="text" ref='textBox' aria-describedby="" placeholder="Type something" />
                </div>
                <div className='col-md-4'>
                    <button className="btn btn-danger" onClick={() => this.onClickHandler('error')} >Show Error Toast</button>
                </div>
                <div className='col-md-4'>
                    <button className="btn btn-primary" onClick={(event) => this.onClickHandler('success', event)} >Show Success Toast</button>
                </div>
                <Toasts />
            </div>
        );
    }
};

export default ToastEx;