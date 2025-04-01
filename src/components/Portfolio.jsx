import { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
    };
  }

  onSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  render() {
    const { filters, selected } = this.state;

    return (
      <div className="container">
        <div className="toolbar-container">
          <Toolbar
            filters={filters}
            selected={selected}
            onSelectFilter={this.onSelectFilter}
          />
        </div>
        <div className="image-container">
          <ProjectList selected={selected} />
        </div>
      </div>
    );
  }
}
