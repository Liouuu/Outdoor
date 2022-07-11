import React from 'react';
import Styles from './index.module.css';

class PageNotFound extends React.Component {

    render() {
        return <div className={Styles.wrapper}>
            <div className={Styles.content}>
                <div className={Styles.h5}>
                PageNotFound
                </div>
            </div>
        </div>
    }

}

export default PageNotFound;
