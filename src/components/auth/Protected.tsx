import { Navigate } from "react-router-dom";
function Protected({
  isSignedIn,
  children,
}: {
  isSignedIn: boolean;
  children: JSX.Element;
}) {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default Protected;
