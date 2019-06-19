import React from 'react';
import PropTypes from 'prop-types'

const Component = React.Component;

class Item extends Component {

  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
  }

  handlerClick() {
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <div onClick={this.handlerClick}>
        {this.props.name}-{this.props.content}
      </div>
    );
  }
}

//note:组件传值限制
Item.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  // name: PropTypes.string.isRequired
};

Item.defaultProps = {
  name: 'gc'
}

export default Item