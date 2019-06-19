import React from 'react';
import './App.css'
import Item from './Item'

const Component = React.Component;
const Fragment = React.Fragment;

class App extends Component {

  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      inputValue: '',
      list: ['精油开背', '基础按摩'],
      input: {}
    }
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    })
  }

  //note: just a test note
  addList() {
    if (this.state.inputValue)
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      });
    else
      alert('请填入服务内容！！！')
  }

  deleteItem(index) {
    // !不能直接操作this.state
    console.log(index);
    let thenList = this.state.list;
    thenList.splice(index, 1);
    this.setState({
      list: thenList
    })
  }

  // todo:
  // note: react是单向数据流
  render() {
    return (
      <Fragment>
        <div>
          {/*note:这里需要使用htmlFor以区分*/}
          <label htmlFor="gc">加入服务:</label>
          <input id='gc' value={this.state.inputValue}
                 ref={(input) => this.input = input}
                 onChange={this.inputChange}/>
          <button onClick={this.addList}>添加服务</button>
        </div>
        <ul>
          {/*修改this*/}
          {/* todo: 为什么这里 会报错dangerouslySetInnerHTML={{__html:item}}*/}
          {
            this.state.list.map((item, index) => {
              return <Item
                content={item}
                key={index + item}
                index={index}
                // name=''
                deleteItem={this.deleteItem}/>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default App;
