import React from 'react';
import Styles from './header.module.css';
import DataTypes from './DataTypes.js';

class HeaderItem1 extends React.Component {

	constructor(props) {
		super(props);
		this.categories = [
		{
			text: '國家森林遊樂園區',
			type: DataTypes.nationalForest, 
		},
		{
			text: '平地森林遊樂園區',
			type: DataTypes.flatForest,
		},
		{
			text: '林業文化園區',
			type: DataTypes.forestry,
		},
		{
			text: '林業鐵路',
			type: DataTypes.railway,
		},
		{
			text: '自然教育中心',
			type: DataTypes.Edu,
		},
		{
			text: '生態教育館',
			type: DataTypes.ecology,
		},
		{
			text: '自然步道',
			// type: ,
		},
		];
		this.state = {       
			showMenu: false,
			showSubmenu:false,
		};
	}

	componentDidMount() {     //元件產生完後，被呼叫 
		console.log('Mount');
	}

	componentWillUnmount() {
		console.log('Unmount'); //當component將要從DOM被移除的時候
	}

	// onMenuClick() {
	// 	console.log(this);
	// 	this.setState((state) => {
	// 		return {
	// 			showMenu: !state.showMenu,
	// 		}
	// 	});
	// }


	onMenuClick = () => {     //從標題被點時，開始加入state
		// console.log(this);
		// Method1: 用 object 更新
		// this.setState({
		// 	showMenu: true,
		// });
		// Method1: 用 function 更新
		this.setState((state) => {
			const showMenu = !state.showMenu;                            //當menu點到時，反轉當前狀態
			const showSubmenu = showMenu ? state.showSubmenu : false;    //當menu存在時，才會display submenu , 不存在則false
			// 相當於
			// let showSubmenu;
			// if(showMenu) {
			// 	showSubmenu = state.showSubmenu;
			// } else {
			// 	showSubmenu = false;
			// }
			return {
				showMenu: showMenu,
				showSubmenu: showSubmenu,
			}
		});
	}

	onSubmenuClick = (category) => {          //= const onSubmenuClcik= onSubmenuClick(category){return}   //這裡category是categories裡的物件      
		return (e) => {
			console.log(e);
			console.log(this, category);
			this.setState((state) => {     //給他們帶有state這個props.   //category=被點到的那個物件 //state是一個物件，所以丟入setstate()中的也必須是一個物件
				if(state.category && state.category === category) {   //如果出現submenu選單狀況下 又再點一次menu 反轉showSubmenu狀態
					const showSubmenu = !state.showSubmenu;
					console.log(showSubmenu,'showSubmenuuuuuuuuuuuuuuuuuuuuuu');
					return {                         //更新category這個物件裡面 不一樣的
						// category: category,           //沒有變,不用更新
						showSubmenu: showSubmenu,        //回傳被轉過的狀態          
						// items: showSubmenu ? this.props.getItemsByCategory(category) : [],  //這裡的category跟 參數category不一樣吧????
						//items?????????????????????
						//??????????????????????????
					};

				} else {                                                  //出現menu情況下，點menu後出現submenu
					const items = this.props.getItemsByCategory(category);  // items= 點到的 的info_xxx的整個資料
					const anchorEl = e.target;
					const bouding = anchorEl.getBoundingClientRect();
					console.log(items); 
					return {
						category: category,
						showSubmenu: true,
						// showSubmenu: !state.showSubmenu, //??????????可改成這樣嗎 這裡的showSubmenu還是會先取false嗎
						items: items, 
						submenuStyles: {
							position: 'fixed',
							left: `${bouding.right}px`,
							top: `${bouding.y}px`,
						}
					};
				}
				
				
			});
		};
	}

	onItemClick(item) {   
		return (e) => {
			e.stopPropagation();
			e.preventDefault();
			// console.log(e, item);
			// window.location.href= "https://google.com";
			// window.location.href = item.URL;
			window.open(item.URL, '_blank');
		}
	};

	onMouseDown = (e) => {
	 	e.stopPropagation();
	 	e.preventDefault();
	 }

	render() {
		const {
			getItemName,
		} = this.props;       //props只是因為他從外面傳進來
		const {
			onItemClick,
			onMenuClick,
			onSubmenuClick,
			onMouseDown,
			state,
		} = this;
		return <React.Fragment>
		<div className={Styles.header_item}>
			<div className={Styles.header_item1} onClick={onMenuClick} onMouseDown={onMouseDown}>景點類型</div>
			{
				state.showMenu && <ul className={Styles.submenu}> {/*  點了menu之後做的事情 */}
				{
					this.categories.map((category, index) => {
						return <li
							key={index}
							onClick={onSubmenuClick(category)} 
							onMouseDown={onMouseDown}>
							{category.text}
						</li>
					})
				}
				</ul>
			}
			{                                                             
				state.showSubmenu && <ul className={Styles.submenu} style={state.submenuStyles}>
				{
					state.items.map((item, index) => {   //這裡的items是點到的  的info_xxx的整個資料 是一個陣列裡面很多物件
					return <li key={index}>
						<a onClick={onItemClick(item)} onMouseDown={onMouseDown}>
						{getItemName(item)}
						</a>
					</li>;
					})
						
					}
				</ul>
			}
			
		</div>
		</React.Fragment>
	}
}
export default HeaderItem1;