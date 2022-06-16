import Content from "./compo/content/content";
import Header from "./compo/header/header";
import LeftSideBar from "./compo/leftsidebar/leftsidebar";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      {/* leftsidebar */}
      <LeftSideBar></LeftSideBar>
      {/* content */}
      <Content></Content>
    </div>
  );
}

export default App;
