import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:例句鈕仔');

export default class 例句鈕仔 extends React.Component {

  render() {
    let {  來開例句 } = this.props;
    return (
    <span className=''>
      <button
        onClick={來開例句.bind(this)}
        className='ui compact icon button'>
        <i className='icon content'></i>
      </button>
    </span>
    );
  }
}

