import React from 'react';
import Styles from './header.module.css';
import HeaderItem1 from './HeaderItem1';
import HeaderItem2 from './HeaderItem2';
import HeaderItem3 from './HeaderItem3';
import HeaderItem4 from './HeaderItem4';
import info_natural from '../openData/info_naturalEducation.js';
import info_ecology from '../openData/info_ecology.js';
import info_flatForest from '../openData/info_flatForest.js';
import info_forestry from '../openData/info_forestry.js';
import info_nationalForest from '../openData/info_nationalForest.js';
import info_railway from '../openData/info_railway.js';
import info_trail from '../openData/info_trail.js';
import Types from './DataTypes.js';
import Classes from '../openData/classes.js';
import ClassesTypes from './ClassesTypes';

function getItems(type) {     //回傳各自的info全部資料       
	switch(type) {
		case Types.Edu:  
		return info_natural;
		case Types.nationalForest:
		return info_nationalForest;
		case Types.ecology:
		return info_ecology;
		case Types.flatForest:
		return info_flatForest;
		case Types.forestry:
		return info_forestry;
		case Types.railway:
		return info_railway;
		default:
		return info_trail;
	}
}

function getItemsByCategory(category) {   //拿到對應(info_xxx)
	const items = getItems(category.type);   
	// console.log(`-getItemsByCategory [${category.type}]-`, items);
	return items;
}

function getItemName(item) {
	switch(item.TYP || item.typ) {      //條件判斷
		case Types.Edu:
		return item.AduName;
		case Types.nationalForest:
		return item.ra_name;
		case Types.flatForest:
		return item.RA_name
		case Types.ecology:
		return item.AduName;
		case Types.forestry:
		return item.RA_name;
		case Types.railway:
		return item.RA_name;
		default:
		return item.TR_CNAME;
		break;
	}
}

function getIClassByLocation(category){     
	const classitem = getClasses(category.type); 
	return classitem ;
}

function getClasses(item){         //item=ClassesTypes.xxx='xxx中心'
let a = Classes.filter(obj =>obj.AduName === item)
return a
}

function getClassNameByLocation(item) {
	switch(item.AduName) {       //條件判斷
		case ClassesTypes.awd:
		return item.NAduName;
		case ClassesTypes.cc:
		return item.NAduName;
		case ClassesTypes.hn:
		return item.NAduName
		case ClassesTypes.sl:
		return item.NAduName;
		case ClassesTypes.cb:
		return item.NAduName;
		case ClassesTypes.di:   
		return item.NAduName;
		case ClassesTypes.bs:
		return item.NAduName;
		case ClassesTypes.ld:
		return item.NAduName;
		break;
	}
}

function HeaderContent (){
	return (    	                        
	<div className={Styles.header_wrapper}>   
		<div className={Styles.header_content}>
			<HeaderItem1
				getItemsByCategory={getItemsByCategory} 
				getItemName={getItemName}
			/>                     
			<HeaderItem3
				getIClassByLocation={getIClassByLocation}
				getClassNameByLocation={getClassNameByLocation}
			/>
			{/* <HeaderItem4/> */}

		</div>
	</div>
	)
}
export default HeaderContent;
