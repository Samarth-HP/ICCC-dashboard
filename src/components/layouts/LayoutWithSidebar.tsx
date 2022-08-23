import {Route} from "react-router-dom";

export default function LayoutWithSidebar({ component: Component, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Component {...props} />
            )}
        />
    );
}
