import React from 'react';
import ABo from '../../GuanKiann/ABo/ABo';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import Debug from 'debug';

var debug = Debug('itaigi:Kong有講法');

export default class 有講法 extends React.Component {
  render() {
    return (
    <div className='kongHuat'>
      <span className='分享'>哇！原來「{ this.props.華語關鍵字 }」是這樣子講的！快分享給你的朋友知道吧</span>
      <分享鍵 pathname={this.props.pathname}/>
      {this.props.內容.列表.map((g) => (
        <GuaGi id={g.外語項目編號}
          key={g.外語項目編號} 新詞文本={g.新詞文本}
          csrftoken={this.props.csrftoken}
          後端網址={this.props.後端網址}/>
      ))}
      <h3 className='ui horizontal divider header'>
        <i className='cloud upload icon'></i>
        閣會使按呢講，我來做伙添
      </h3>
      <ABo 華語關鍵字={this.props.華語關鍵字}
       後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
       編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
       />
      <h3 className='ui horizontal divider header'>
        <i className='outline comments icon'></i>
        來討論
        「<span className='ui pink header'>{this.props.華語關鍵字}</span>」
      </h3>
      <Disqus pathname={this.props.pathname}/>
    </div>
    );
  }
}
