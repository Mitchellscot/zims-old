import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import {useSelector} from 'react-redux';

function ProtectedRoute(props) {
  const user = useSelector((store) => store.user);
  const {
    authRedirect,
    ...otherProps
  } = props;
  const ComponentToProtect = props.component || (() => props.children);

  let ComponentToShow;

  if (user.token) {
    ComponentToShow = ComponentToProtect;
  } else {
    ComponentToShow = LoginPage;
  }

  if (user.token && authRedirect != null) {
    return <Redirect exact from={otherProps.path} to={authRedirect} />;
  } else if (!user.token && authRedirect != null) {
    ComponentToShow = ComponentToProtect;
  }

  return (
    <Route
      {...otherProps}
    >
      <ComponentToShow />
    </Route>

  );
}

export default ProtectedRoute;
