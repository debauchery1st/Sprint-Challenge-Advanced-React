import React from "react";
import Player from "./Player";
import SortBar from "./SortBar";
import "./Players.css";
class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      theme: "",
      sorted: []
    };
  }
  Athletes = () =>
    this.state.sorted.length > 0 ? this.state.sorted : this.props.apiState.data;
  componentDidMount() {
    // console.log("cdm");
    const clone = { ...this.state };
    clone.loaded = this.props.loaded;
    if (clone.loaded) this.setState(clone);
  }
  componentDidUpdate() {
    // console.log("cdu");
    if (this.state.loaded) return;
    const clone = { ...this.state };
    clone.loaded = this.props.loaded;
    this.setState(clone);
  }
  sortKeys = () =>
    (this.Athletes() &&
      Object.keys(this.Athletes()[0]).filter(name => name !== "id")) ||
    [];

  listAthletes = () =>
    this.Athletes()
      ? this.Athletes().map((a, i) => <Player key={i} stats={a} />)
      : "";

  sortObjArr = strKey => {
    const sortedAthletes = this.Athletes().sort(
      (a, b) => a[strKey].charCodeAt(0) - b[strKey][0].charCodeAt(0)
    );
    const clone = { ...this.state };
    clone.sorted = sortedAthletes;
    this.setState(clone);
  };
  render() {
    return (
      <section
        className={
          this.state.theme.length > 0
            ? ["Players", "-", this.state.theme].join("")
            : "Players"
        }
      >
        <SortBar sortKeys={this.sortKeys()} sortObjArr={this.sortObjArr} />
        {this.listAthletes()}
      </section>
    );
  }
}

export default Players;
