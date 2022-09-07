import React, { FC, useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.less";
import DesktopLayout from "./components/layouts/DesktopLayout";
import LayoutWithSidebar from "./components/layouts/LayoutWithSidebar";
import DashboardHeader from "./components/layouts/DashboardHeader";
import Login from "./pages/Login";
import EducationPortal from "./pages/EducationDashboard";
import EducationDashboard from "./pages/EducationDashboard/dashboard";
import DetailedDashboard from "./pages/DetailedDashBoard/Index";
import AcademicPage from "./pages/DetailedDashBoard/AcademicPage";
import AdminKPIPage from "./pages/DetailedDashBoard/AdminKPIPage";
import ReviewMeeting from "./pages/Review Meetings";
import FrameLink from "./pages/DetailedDashBoard/FrameLink";
import PrivateRoute from "./components/ProtectedRoute/ProtectedRoute";

export const IframeContextContext = React.createContext({
  updateHasFirstIframeLoaded: null,
  hasFirstIframeLoaded: null,
} as any);

const App: FC = () => {
  const [hasFirstIframeLoaded, setHasFirstIframeLoaded] = useState(false);
  useEffect(() => {
    localStorage.removeItem("hasFirstIframeLoaded");
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/sw.js",
            {
              scope: "/",
            }
          );

          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
            window.location.reload();
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    };
    registerServiceWorker();
  }, []);

  function updateHasFirstIframeLoaded(v: boolean) {
    setHasFirstIframeLoaded(v);
  }

  return (
    <div className="App">
      <IframeContextContext.Provider
        value={{ hasFirstIframeLoaded, updateHasFirstIframeLoaded }}
      >
        <Router>
          {/*<Header/>*/}
          {<DashboardHeader />}
          <Switch>
            <Route exact path="/login" component={Login} />

            <Route
              exact
              path="/education-dashboard"
              component={EducationDashboard}
            />
            <PrivateRoute exact path="/detailed-dashboard">
              <DetailedDashboard />
            </PrivateRoute>
            <Route exact path="/link/:name" component={FrameLink} />
            <Route exact path="/detailed-academic" component={AcademicPage} />
            <Route
              exact
              path="/detailed-administrative"
              component={AdminKPIPage}
            />
            <Route
              exact
              path="/administrative-kpis/review-meetings"
              component={ReviewMeeting}
            />

            <Route exact path="/" component={EducationPortal} />
            <LayoutWithSidebar path={"/"} component={DesktopLayout} />
            {/* <Redirect
              to={{
                pathname: "/login",
              }}
            /> */}
          </Switch>
        </Router>
      </IframeContextContext.Provider>
    </div>
  );
};

export default App;
