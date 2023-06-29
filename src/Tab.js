import { createContext, useContext } from "react";
import "./Tab.css";

const TabContext = createContext();

const Tab = ({ children, value, onChange }) => {
  return (
    <TabContext.Provider value={{ value, onChange }}>
      <div className="tab-container">{children}</div>
    </TabContext.Provider>
  );
};

Tab.HeaderContainer = ({ children }) => {
  return <div className="tab-header-container">{children}</div>;
};

const Item = ({ index, children }) => {
  const { value, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      className={`tab-item ${index === value ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className="tab-content-container">{children}</div>;
};

const Content = ({ index, children }) => {
  const { value } = useContext(TabContext);
  return index === value ? <div>{children}</div> : null;
};

Tab.Item = Item;
Tab.Content = Content;
export default Tab;
