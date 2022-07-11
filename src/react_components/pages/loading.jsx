import React from 'react';
import Styles from './index.module.css';

class Loading extends React.Component {

    render() {
        return <div className={Styles.wrapper}>
            <div className={Styles.content}>
                <div className={Styles.h5}>
                Loading...
                </div>
            </div>
        </div>
    }

}

export default Loading;
