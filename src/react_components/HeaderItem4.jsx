import React from 'react';
import Styles from './header.module.css';

class HeaderItem4 extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
      
    render() {
        const {
        } = this;
		return <React.Fragment>
        <div className={Styles.header_item}>
	    <div className={Styles.header_item1} onClick={onItemClick}>即時天氣、紫外線</div>
        </div>    
		</React.Fragment>
	}

}

export default HeaderItem4;
