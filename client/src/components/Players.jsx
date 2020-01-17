import React from "react";
import Player from "./Player";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  Athletes = () => this.props.apiState.data;
  componentDidMount() {
    console.log("cdm");
    const clone = { ...this.state };
    clone.loaded = this.props.loaded;
    if (clone.loaded) this.setState(clone);
  }
  componentDidUpdate() {
    console.log("cdu");
    if (this.state.loaded) return;
    const clone = { ...this.state };
    clone.loaded = this.props.loaded;
    this.setState(clone);
  }
  render() {
    return (
      <ul>
        {this.Athletes()
          ? this.Athletes().map((a, i) => <Player key={i} stats={a} />)
          : ""}
      </ul>
    );
  }
}

export default Players;
