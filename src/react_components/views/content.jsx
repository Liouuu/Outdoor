import React from 'react';
import Styles from '../body.module.css';
import Carousel from '../Carousel'

class Content extends React.Component {    //react components開頭必須是大寫

	render() {        // 只能有一層根元素
		return (
		<div className={Styles.wrapper}>   
			{/* <div className={Styles.container}>
				<div className={Styles.content}>   */}
				<Carousel />






				
				</div>
		// 	</div>
		// </div>
		)
	}
}
export default Content;

