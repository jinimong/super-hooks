import { useClick } from "./hooks/useClick";
import { useTab } from "./hooks/useTab";
import { useTitle } from "./hooks/useTitle";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useBeforeLeave } from "./hooks/useBeforeLeave";
import { useFadeIn } from "./hooks/useFadeIn";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { useFullscreen } from "./hooks/useFullscreen";
import { useNotification } from "./hooks/useNotification";

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
  useBeforeLeave(() => console.log("Plz dont go"));
  const fadeIn = useFadeIn();
  const fadeInWithDelay = useFadeIn(3, 1);
  const onLine = useNetwork((status) => {
    console.log(status ? "This is online. :)" : "This is offline. :<");
  });
  const { y } = useScroll();
  const { element, triggerFullscreen } = useFullscreen();
  const triggerNotification = useNotification("알림이 있습니다.", {
    body: "Everything is OK?",
  });
  return (
    <div
      className="App"
      style={{
        height: "500vh",
      }}>
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
      <button {...fadeIn} onClick={enablePrevent}>
        protect
      </button>
      <button {...fadeInWithDelay} onClick={disablePrevent}>
        unprotect
      </button>
      <hr />
      <div>{onLine ? "Online" : "Offline"}</div>
      <hr />
      <div
        style={{
          height: "100px",
        }}>
        <img
          ref={element}
          src="https://random.dog/5d9b4f1f-ed47-47d2-95b4-ac58ac0834b7.jpg"
          style={{
            maxHeight: "100%",
          }}
          alt=""
        />
        <button onClick={triggerFullscreen}>Full Screen</button>
      </div>
      <hr />
      <button onClick={triggerNotification}>Get Notification</button>
      <hr />
      <div
        style={{
          position: "fixed",
          color: y > 1000 ? "red" : "blue",
        }}>
        scrollY : {y}
      </div>
    </div>
  );
};

export default App;
