import React, { Component } from "react";
import "./App.css";
import { debounce } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSearch: "",
      debounceSearch: "",
    };
  }
  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return (e) => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }
  handleDebounceChange = (e) => {
    this.setState({ debounceSearch: e.target.value });
  };
  componentWillUnmount() {
    this.handleDebounceChange.cancel();
  }
  render() {
    const { debounceSearch } = this.state;
    return (
      <div className="container">
        <header>
          <h1 className="card-title">Web Debounce Example</h1>
          <input
            className="form-inputbox"
            placeholder="Type Something..."
            onChange={this.debounceEvent(this.handleDebounceChange, 500)}
          />
        </header>

        <div className="output">
          <h1>{debounceSearch}</h1>
        </div>
      </div>
    );
  }
}

export default App;
