import { Route, Switch } from "react-router";
import ProjectsContainer from "../projects/projectContainer";
import ProjectsPage from "../projectPage/projectPage"
function MainContent() {

    return (
        <div className="mainContentContainer">
            <ProjectsContainer/>
        </div>
    );
  }

  export default MainContent;
