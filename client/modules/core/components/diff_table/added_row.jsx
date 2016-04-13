import React from 'react';

export default React.createClass({
  render() {
    const {change} = this.props;

    return (
      <tr className="dt-addition">
        <td className="dt-line-num dt-empty-cell"></td>
        <td className="dt-line-num">{change.head}</td>
        <td className="dt-code" dangerouslySetInnerHTML={{__html: change.content}}></td>
      </tr>
    );
  }
});
