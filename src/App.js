import React, { Component } from "react";
import Demo1 from "./Demo1";
import DemoPopup from "./DemoPopup";

class App extends Component {
  constructor(props) {
    super(props);
    this.setStateOfParent.bind(this);
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
      isPopupvisible: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  // Creating below function to set state
  // of this (parent) component.
  setStateOfParent = (newState) => {
    this.setState({ showHideDemo2: newState });
  };

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
      default:
    }
  }

  render() {
    const { showHideDemo1 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Demo1 setStateOfParent={this.setStateOfParent} />}
        <hr />

        <DemoPopup
          trigger={this.state.showHideDemo2}
          setTrigger={this.setStateOfParent}
        />

        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.hideComponent("showHideDemo2")}>
            Click to hide Demo2 component
          </button>
        </div>
      </div>
    );
  }
}

export default App;
