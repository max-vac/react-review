import React from 'react';
import List from './List.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      // console.log('name:', e.target.name);
      // console.log('value:', e.target.value);
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <div>
        {(this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName) ? <List/> :
          <form>
            <label>
              First Name:
            <input type="text" name="firstName" onChange={this.changeHandler}/>
            </label>
            <label>
              Last Name:
            <input type="text" name="lastName" onChange={this.changeHandler}/>
            </label>
            <input type="submit" value="Add Name" />
          </form>
        }
      </div>
    )
  }
}



export default App;