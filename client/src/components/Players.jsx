import React from "react";
import Player from "./Player";
import SortBar from "./SortBar";
import "./styles/Players.css";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      theme: "",
      sorted: [],
      sorter: props.sorter,
      order: { name: "asc", country: "asc", searches: "asc" }
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
  getCategories = () =>
    (this.Athletes() &&
      Object.keys(this.Athletes()[0]).filter(name => name !== "id")) ||
    [];

  listAthletes = () =>
    this.Athletes()
      ? this.Athletes().map((a, i) => <Player key={i} stats={a} />)
      : "";

  handleSort = strKey => {
    this.setState({
      ...this.state,
      sorted: this.props.sorter(strKey, this.Athletes())
    });
    return this.state.sorted;
  };

  render() {
    return (
      <span
        className={
          this.state.theme.length > 0
            ? ["Players", "-", this.state.theme].join("")
            : "Players"
        }
      >
        <SortBar sortKeys={this.getCategories()} handleSort={this.handleSort} />
        {this.listAthletes()}
      </span>
    );
  }
}

export default Players;
