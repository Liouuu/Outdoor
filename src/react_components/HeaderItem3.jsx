import React from 'react';
import Styles from './header.module.css';
import ClassesTypes from './ClassesTypes.js';
import Classes from './ClassesTypes.js';

class HeaderItem3 extends React.Component {
        constructor(props) {
        super(props);   
        this.state = {
        showMenu: false,
        showSubmenu:false,
        };  
        this.menu1=
        [{
                text: '奧萬大自然教育中心',
                type: ClassesTypes.awd,
        },
        {
                text: '觸口自然教育中心',
                type: ClassesTypes.cc,
        },
        {
                text: '池南自然教育中心',
                type: ClassesTypes.hn,
        },
        {
                text: '雙流自然教育中心',
                type: ClassesTypes.sl,
        },
        {
                text: '知本自然教育中心',
                type: ClassesTypes.cb,
        },
        {
                text: '東眼山自然教育中心',
                type: ClassesTypes.di,
        },
        {
                text: '八仙山自然教育中心',
                type: ClassesTypes.bs,
        },
        {
                text: '羅東自然教育中心',
                type: ClassesTypes.ld,
        },
        ]
        }


        onMenuClick = () => {          
        this.setState((state) => {
                const showMenu = !state.showMenu;                                
                const showSubmenu = showMenu ? state.showSubmenu : false;        
                // const showSubmenu = showMenu ? state.showSubmenu : false; 
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
        
        onMouseDown = (e) => {        
                e.stopPropagation();
                e.preventDefault();
        }
      
        onItemClick(item) {   
		return (e) => {
			e.stopPropagation();
			e.preventDefault();
			window.open(item.Url, '_blank');
		}
	};


        onSubmenuClick = (category) => {        
		return (e) => {
		        // console.log(e);
			// console.log(this, category);
			this.setState((state) => {          
			if(state.category && state.category === category) {   
				const showSubmenu = !state.showSubmenu;
				return {                               
					showSubmenu: showSubmenu, //更新狀態
					};

			} else {              //出現menu情況下，出現submenu
                                const classitem = this.props.getIClassByLocation(category);
				// const classitem = this.props.getIClassByLocation(category);
				const anchorEl = e.target;
				const bouding = anchorEl.getBoundingClientRect();
				console.log(classitem); 
				return {
					category: category,
					showSubmenu: true,
					classitem: classitem, 
					submenuStyles: {
						position: 'fixed',
						left: `${bouding.right}px`,
						top: `${bouding.y}px`,
					}
				};
			}
			})
		}
	}

           
        render() {
        const {
        getClassNameByLocation
        } = this.props;

        const {
        onMenuClick,
        onSubmenuClick,
        onMouseDown,
        onItemClick,
        state,
        } = this;

	return <React.Fragment>
        <div className={Styles.header_item}>
	<div className={Styles.header_item1} onClick={onMenuClick} onMouseDown={onMouseDown}>課程、活動</div>
        {
	        state.showMenu && <ul className={Styles.submenu}>   
	        {
	        this.menu1.map((category, index) => {   
	        return <li key={index}>  
                        <a onClick={onSubmenuClick(category)} onMouseDown={onMouseDown}>  
	        	{category.text}
	        	</a>
	        </li>;
                })		
                }
                </ul>		
	}
        {
                state.showSubmenu && <ul  className={Styles.submenu} Styles={state.Submenustyles}>
                <li></li>
                {    
                state.classitem.map((item, index) => {      
	        return <li key={index}>  
	        <a onClick={onItemClick(item)} onMouseDown={onMouseDown}>
	        {getClassNameByLocation(item)}
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
export default HeaderItem3;