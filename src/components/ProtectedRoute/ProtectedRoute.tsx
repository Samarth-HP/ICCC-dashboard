import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }: any) => {
  const user = localStorage.getItem("user");
  const token = sessionStorage.getItem("user");
  const userExists = user && token;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return userExists ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
