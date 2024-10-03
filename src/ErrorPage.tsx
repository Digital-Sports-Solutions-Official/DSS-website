/* Noah Klein */

import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>404 Not found</h1>
      <p>
        <i>{error.error.message || error.statusText || "Unknown error"}</i>
      </p>
    </div>
  );
}
