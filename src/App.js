import { useClick } from "./hooks/useClick";
import { useTab } from "./hooks/useTab";
import { useTitle } from "./hooks/useTitle";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";

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
  const confirm = useConfirm(
    "Are you sure?",
    () => console.log("confirm !!"),
    () => console.log("cancel .."),
  );
  const { enablePrevent, disablePrevent } = usePreventLeave();
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
          {tab.title}
        </button>
      ))}
      <div onClick={confirm}>{currentTab.text}</div>
      <hr />
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default App;
