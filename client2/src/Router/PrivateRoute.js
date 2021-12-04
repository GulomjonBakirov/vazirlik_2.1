import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "../components/Loading";

export default function PrivateRoute({ children }) {
  const { loading, isAuthanticated } = useSelector((state) => state.auth);
  const auth = localStorage.getItem("access_token");
  return auth ? children : <Navigate to="/login" />;
}
