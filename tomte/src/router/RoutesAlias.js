export const ROUTE_ALIAS = {
  LOGIN: "/",
  HOME: "/home",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgotPassword",
  CHANGE_PASSWORD: "/setNewPassword",
};

export const isInsideTheApp = (path) => {
  return (
    path !== ROUTE_ALIAS.LOGIN &&
    path !== ROUTE_ALIAS.REGISTER &&
    path !== ROUTE_ALIAS.FORGOT_PASSWORD &&
    path !== ROUTE_ALIAS.CHANGE_PASSWORD
  );
};
