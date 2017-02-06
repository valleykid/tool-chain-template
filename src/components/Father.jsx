import React from 'react';
import Son from './Son.jsx';

class Father extends React.Component {
  constructor() {
    super();
    this.state = {
      son: null,
    };
  }
  changeHandler(e) {
    this.setState({
      son: e.target.value,
    });
  }
  render() {
    return (<div>
      <Son onChange={this.changeHandler.bind(this)} />
      <p>这里显示 Son 组件的内容：{this.state.son}</p>
      <p>children内容：{this.props.children}</p>
    </div>);
  }
}

export default Father;
