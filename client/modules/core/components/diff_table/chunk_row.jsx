import React from 'react';

export default React.createClass({
  render() {
    let {change} = this.props;

    return (
      <tr>
        <td className="dt-no-num" colSpan="2"></td>
        <td className="dt-code-block">{change.content}</td>
      </tr>
    );
  }
});
