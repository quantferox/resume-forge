import { Fragment } from "react/jsx-runtime";
import ResumePage1 from "../pages/ResumePage1/ResumePage1";
import ResumePage2 from "../pages/ResumePage2/ResumePage2";

const App = () => {
  return (
    <Fragment>
      <ResumePage1 />
      <ResumePage2 />
    </Fragment>
  );
};

App.displayName = "app.App";
export default App;
