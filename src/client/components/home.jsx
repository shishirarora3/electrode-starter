/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React, {PureComponent, Component} from "react";
import Perf from "react-addons-perf";
import "../styles/normalize.css";
import "../styles/raleway.css";
/**/

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["item1", "item2"]
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState({
      items: ["baz", ...this.state.items]
    });
  };

  componentWillUpdate() {
    Perf.start();
  }

  componentDidUpdate() {
    Perf.stop();
    Perf.printOperations();
  }

  render() {
    const {items} = this.state;
    return <div>
      {items.map((item, i) => {
        return <li key={i}>
          <div>{item}</div>
          <input/>
        </li>
      })}
      <button onClick={this.clickHandler}>+ Add</button>
    </div>
  }
}
