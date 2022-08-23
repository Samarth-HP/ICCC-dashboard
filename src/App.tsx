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

const App: FC = () => (
    <div className="App">
        <Router>
            {/*<Header/>*/}
            {<DashboardHeader />}
            <Switch>

                <Route exact path="/login" component={Login}/>
                <Route exact path="/education-dashboard" component={EducationDashboard}/>
                <Route exact path="/detailed-dashboard" component={DetailedDashboard}/>
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
