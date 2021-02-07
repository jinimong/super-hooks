import { useTab } from "./hooks/useTab";

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
  const { tab, setTabIndex } = useTab(0, tabs);
  return (
    <div className="App">
      <h1>Hello</h1>
      {tabs.map((tab, index) => (
        <button key={tab.title} onClick={() => setTabIndex(index)}>
          {tab.title}
        </button>
      ))}
      <div>{tab.text}</div>
    </div>
  );
};

export default App;
