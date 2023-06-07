import React, { useState } from "react";
import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "../ResizeHandle";
import styles from "../styles.module.css";
import LeftPane from "../components/LeftPane";
import Login from "./Login";
import MainPane from "../components/MainPane";
import RightPane from "../components/RightPane";
import RegisterForm from "../components/RegisterForm";

export default function App() {
  const [showFirstPanel, setShowFirstPanel] = useState(true);
  const [showLastPanel, setShowLastPanel] = useState(true);

  return (
      <div className={styles.Container}>
        <div className={styles.TopRow}>
          <a
            className={styles.Link}
            href="https://github.com/bvaughn/react-resizable-panels"
          >
            github.com/bvaughn/react-resizable-panels
          </a>

          <p>
            <button
              className={styles.Button}
              onClick={() => setShowFirstPanel(!showFirstPanel)}
            >
              {showFirstPanel ? "hide" : "show"} Content panel
            </button>
            &nbsp;
            <button
              className={styles.Button}
              onClick={() => setShowLastPanel(!showLastPanel)}
            >
              {showLastPanel ? "hide" : "show"} Reference panel
            </button>
          </p>
        </div>
        <div className={styles.BottomRow}>
          <PanelGroup autoSaveId="example" direction="horizontal">
            {showFirstPanel && (
              <>
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={1}
                >
                  <div className={styles.PanelContent}>
                    <LeftPane />
                  </div>
                </Panel>
                <ResizeHandle />
              </>
            )}
            <Panel className={styles.Panel} collapsible={true} order={2}>
              <RegisterForm />
            </Panel>
            {showLastPanel && (
              <>
                <ResizeHandle />
                <Panel
                  className={styles.Panel}
                  collapsible={true}
                  defaultSize={20}
                  order={3}
                >
                  <div className={styles.PanelContent}>
                    <MainPane />
                  </div>
                </Panel>
              </>
            )}
          </PanelGroup>
        </div>
      </div>


  );
}
