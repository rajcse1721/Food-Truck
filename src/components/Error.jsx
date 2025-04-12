import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  console.log(err);
  return (
    <div>
      <h1>😔Oops! Page Not found</h1>
      <h3>something went wrong!</h3>
      <h4>
        {status} : {statusText}
      </h4>
    </div>
  );
};

export default Error;
