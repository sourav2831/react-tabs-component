import { useState } from "react";
import Tab from "./Tab";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const onChange = (target) => {
    setIndex(target);
  };
  return (
    <div className="App">
      <Tab value={index} onChange={onChange}>
        <Tab.HeaderContainer>
          <Tab.Item index={0}>Tab1</Tab.Item>
          <Tab.Item index={1}>Tab2</Tab.Item>
          <Tab.Item index={2}>Tab3</Tab.Item>
        </Tab.HeaderContainer>
        <Tab.ContentContainer>
          <Tab.Content index={0}>
            <h1>Content 1</h1>
          </Tab.Content>
          <Tab.Content index={1}>
            <h1>Content 2</h1>
          </Tab.Content>
          <Tab.Content index={2}>
            <h1>Content 3</h1>
          </Tab.Content>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}

export default App;
