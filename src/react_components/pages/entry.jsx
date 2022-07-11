import React from 'react';
import Content from '../views/content.jsx';
import HeaderContent from '../Header_content.jsx';
import HeaderBadge from '../header_badge.jsx';
import HeaderSearch from '../header_search.jsx';

// 讀到root後開始 div class app_header / div class app_body /content 會渲出(生成)這三個，但在html內不會顯示
class Entry extends React.Component {

  render() {
    return(
      <React.Fragment>
        <div className='app_header'>      {/* = div class= 'app_header'*/}
          <HeaderBadge />
          <HeaderContent/>
          <HeaderSearch/>
        </div>
        <div className='app_body'>   
          <Content/>
        </div>
      </React.Fragment>
    )
  }

}

export default Entry;
