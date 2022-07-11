import React from 'react';
import * as Styles from './index.module.css';

class ErrorView extends React.Component {

    onReloadClick = () => {
        window.location.reload();
    }

    render() {
        const {
            error,
        } = this.props;
        return error ?
        <div className={Styles.wrapper}>
            <div className={Styles.content}>
                <div>
                    <div className={Styles.h5}>Oops, something went wrong:</div>
                    <div className={Styles.body1}>{error?.message}</div>
                </div>
                <button fullWidth className={Styles.outlined} onClick={this.onReloadClick}>Reload the page</button>
            </div>
        </div> :
        <React.Fragment/>
    }

}

export default ErrorView;
