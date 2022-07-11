import ImageSlider from './ImageSlider.js';
import {SliderData} from '../openData/basic_info_add_img.js'; //imporrt時用花誇號是因為來源檔案有指定名稱

function Carousel() {
  

    const getSliderimages =SliderData.filter(e => e.images)
    console.log(getSliderimages);
    return <ImageSlider slides={getSliderimages} />;
  
 // SliderData要是一個陣列，裡面有很多物件
// export const SliderData = [
//     {
//         images:
//             'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//         images:
//             'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
//     },
//     {
//         images:
//             'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//         images:
//             'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
//     },
//     {
//         images:
//             'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
//     }
// ];



}

export default Carousel;