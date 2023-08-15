import { Navigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";

// eslint-disable-next-line react/prop-types
function ProtectedRout({ children }) {
  const { user } = UserAuth(); //use context
  if (!user) {
    return <Navigate to={"/"} />;
  } else {
    return <div>{children}</div>;
  }
}

export default ProtectedRout;
