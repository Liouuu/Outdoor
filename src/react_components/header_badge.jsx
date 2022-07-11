import React from 'react';
import Styles from './react.module.css';


class HeaderBadge extends React.Component {    //react components開頭必須是大寫
	render() {       
		return (                             
	    <div className={Styles.badge_search_wrapper}>   
			<img src="https://static.liontech.com.tw/ConsoleAPData/PublicationStatic/lion_tw_b2c_travel/zh-tw/theme/_ModelFile/PictureAndText/4243/dc61f24f3c90455e898980b476101cd0.png"/>
		</div>
		)
	}
}
export default  HeaderBadge;




