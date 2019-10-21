import React from 'react'
import Room from './Room';
import CorrectRoom from './CorrectRoom'
import Successed from './Successed';
class App extends React.Component {

  state = {
    code: "",
    correctCode: false,
    point: 0,
    submitted: false,
  }

  updateCode = (e) => {
    this.setState({ code: e })
  }

  updatePoint = (e) => {
    this.setState({ point: e })
  }

  updateSubmit = () => {
    this.setState({ submitted: true })
  }

  searchSucessful = () => {
    this.setState({ correctCode: true })
  }

  render() {
    return (
      <div style={{ paddingTop: '100px' }}>
        {!this.state.correctCode &&
          <Room updateCode={this.updateCode} searchSucessful={this.searchSucessful} code={this.state.code} />
        }
        {this.state.correctCode && this.state.submitted === false &&
          < CorrectRoom updateSubmit={this.updateSubmit} point={this.state.point} updatePoint={this.updatePoint} code={this.state.code} />
        }
        {this.state.submitted
          && <Successed code={this.state.code} point={this.state.point} />
        }
      </div>
    )
  }

}

export default App;