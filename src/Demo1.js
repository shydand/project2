import React, { Component } from "react";
import {
  DataGrid,
  Editing,
  Paging,
  Selection
} from "devextreme-react/data-grid";
import "devextreme-react/text-area";
import notify from "devextreme/ui/notify";
import { employees } from "../src/data";

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };

    this.prepareEditor = this.prepareEditor.bind(this);
  }

  prepareEditor = (e) => {
    notify("row selected");
    this.props.setStateOfParent(true);
  };

  render() {
    return (
      <div id="data-grid-inner">
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
          width="90rem"
          height="50rem"
          onRowDblClick={this.prepareEditor}
        >
          <Paging enabled={true} />
          <Editing
            mode="row"
            allowUpdating={true}
            allowAdding={false}
            allowDeleting={false}
          />
          <Selection
            mode="single"
            selectAllMode={"allPages"}
            showCheckBoxesMode={"onClick"}
          ></Selection>
        </DataGrid>
      </div>
    );
  }
}

export default Demo1;
