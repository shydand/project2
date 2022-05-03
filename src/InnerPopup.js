import React from "react";
import "../src/DemoPopup.css";
import Form, { SimpleItem, GroupItem, Item } from "devextreme-react/form";

function InnerPopup(props) {
  return props.trigger2 ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <button className="close-btn" onClick={() => props.ser(false)}>
          close
        </button> */}
        <div>
          <Form colCount={1} id="form">
            <Item dataField="Position" editorType="dxSelectBox" />
            <GroupItem caption="Objektanschrift">
              <SimpleItem dataField="AE-Nr." />
              <SimpleItem dataField="Kundennummer" />
              <SimpleItem dataField="TWA" />
              <SimpleItem dataField="Name" />
              <SimpleItem dataField="Strasse1" />
              <SimpleItem dataField="Strasse2" />
              <SimpleItem dataField="Plz" />
              <SimpleItem dataField="Ort" />
            </GroupItem>
          </Form>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default InnerPopup;
