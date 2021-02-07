import { useClick } from "./hooks/useClick";
import { useTab } from "./hooks/useTab";
import { useTitle } from "./hooks/useTitle";

const tabs = [
  {
    title: "Section 1",
    text: "I'm the text of Section 1",
  },
  {
    title: "Section 2",
    text: "I'm the text of Section 2",
  },
];

const App = () => {
  const { currentTab, setTabIndex } = useTab(0, tabs);
  const setTitle = useTitle(currentTab.title);
  const title = useClick(() => window.alert("say hello"));
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
      {tabs.map((tab, index) => (
        <button
          key={tab.title}
          onClick={() => {
            setTabIndex(index);
            setTitle(tab.title);
          }}>
          {currentTab.title}
        </button>
      ))}
      <div>{currentTab.text}</div>
    </div>
  );
};

export default App;
