import { useRouteError } from "react-router-dom";

const _404 = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div>Oops! Page not found</div>
      <div>{error.error.message}</div>
    </>
  );
};

export default _404;
