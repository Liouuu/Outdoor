import React from 'react';
import Styles from './react.module.css';
import searchIconImg from '../openData/searchicon.png';

class HeaderSearch extends React.Component {    //react components開頭必須是大寫
	render() {       
		return (                             //react中用花括弧是因為要直接使用js
	    <div className={Styles.controls_right}>
		    <div className={Styles.search_icon}>   
				<img
					src={searchIconImg}
					alt='search' 
					/>
			</div>
		</div>
		)
	}
}
export default  HeaderSearch;