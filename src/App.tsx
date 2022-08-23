import React, {FC} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './App.less';
import DesktopLayout from "./components/layouts/DesktopLayout";
import LayoutWithSidebar from "./components/layouts/LayoutWithSidebar";
import DashboardHeader from './components/layouts/DashboardHeader';
import Login from "./pages/Login";
import EducationPortal from './pages/EducationDashboard';
import EducationDashboard from './pages/EducationDashboard/dashboard';
import DetailedDashboard from './pages/DetailedDashBoard/Index';
import AcademicPage from './pages/DetailedDashBoard/AcademicPage';
import AdminKPIPage from './pages/DetailedDashBoard/AdminKPIPage';
import ReviewMeeting from './pages/Review Meetings';

const App: FC = () => (
    <div className="App">
        <Router>
            {/*<Header/>*/}
            {<DashboardHeader />}
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/education-dashboard" component={EducationDashboard}/>
                <Route exact path="/detailed-dashboard" component={DetailedDashboard}/>
                <Route exact path="/detailed-academic" component={AcademicPage}/>
                <Route exact path="/detailed-administrative" component={AdminKPIPage}/>
                <Route exact path="/administrative-kpis/review-meetings" component={ReviewMeeting}/>
                <Route exact path="/" component={EducationPortal}/>
                <LayoutWithSidebar path={'/'} component={DesktopLayout}/>
                <Redirect
                    to={{
                        pathname: '/login',
                    }}
                />
            </Switch>
        </Router>
    </div>
);

export default App;
