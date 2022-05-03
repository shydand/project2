import React from "react";
import "../src/DemoPopup.css";
import Form, {
  SimpleItem,
  GroupItem,
  TabbedItem,
  TabPanelOptions,
  Tab,
  Item
} from "devextreme-react/form";
import { useState } from "react";
import { Popup } from "devextreme-react";
import InnerPopup from "../src/InnerPopup";

function DemoPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <div>
          <Form colCount={3} id="form">
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
            <GroupItem caption="Ansprechpartner Probenahme">
              <GroupItem caption="Home Address">
                <SimpleItem dataField="Vorname" />
                <SimpleItem dataField="Name" />
                <SimpleItem dataField="Strasse1" />
                <SimpleItem dataField="Strasse2" />
                <SimpleItem dataField="Plz" />
                <SimpleItem dataField="Ort" />
                <SimpleItem dataField="Telefon" />
                <SimpleItem dataField="Mobil" />
                <SimpleItem dataField="E-Mail" />
              </GroupItem>
            </GroupItem>
            <GroupItem caption="Hausmeister">
              <SimpleItem dataField="Vorname" />
              <SimpleItem dataField="Name" />
              <SimpleItem dataField="Strasse1" />
              <SimpleItem dataField="Strasse2" />
              <SimpleItem dataField="Plz" />
              <SimpleItem dataField="Ort" />
              <SimpleItem dataField="Telefon" />
              <SimpleItem dataField="Mobil" />
              <SimpleItem dataField="E-Mail" />
            </GroupItem>
            <GroupItem caption="Zusätzliche Hinweise">
              <TabbedItem>
                <TabPanelOptions deferRendering={false} />
                <Tab title="Bemerkung 1">
                  <SimpleItem dataField="Dispo" />
                </Tab>
                <Tab title="Bemerkung 2">
                  <SimpleItem dataField="Probenehme" />
                </Tab>
              </TabbedItem>
            </GroupItem>
          </Form>
        </div>
        {props.children}
      </div>
      <InnerPopup trigger2="true"></InnerPopup>
    </div>
  ) : (
    ""
  );
}

export default DemoPopup;
