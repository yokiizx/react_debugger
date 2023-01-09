import React from 'react';

class App extends React.Component {
  state = {
    count: 0
  };
  componentDidMount() {
    // for (let i = 0; i < 5; i++) {
    //   // this.setState({ count: this.state.count + 1 }, () => {
    //   //   console.log(this.state.count)
    //   // })
    //   this.setState(
    //     (state) => ({
    //       count: state.count + 1
    //     }),
    //     () => {
    //       console.log(this.state.count);
    //     }
    //   );
    //   console.log('111', this.state.count);
    // }
  }
  handleClick = () => {
    // const promise = new Promise((resolve) => {
    //   resolve(1)
    // }).then(() => {
    //   for (let i = 0; i < 5; i++) {
    //     this.setState({ count: this.state.count + 1 })
    //     console.log(this.state.count)
    //   }
    // })
    // console.log("📌📌📌 ~ App ~ promise ~ promise", promise)
    // for (let i = 0; i < 5; i++) {
    //   this.setState({ count: this.state.count + 1 })
    //   console.log(this.state.count)
    // }
  };
  render() {
    return (
      <div>
        hello react
        <br />
        <button id="btn" onClick={() => this.handleClick()}>
          TEST
        </button>
      </div>
    );
  }
}

export default App;
