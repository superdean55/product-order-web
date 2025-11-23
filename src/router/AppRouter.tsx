import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import MainLayout from "../components/layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { ROUTE_PATHS } from "./routes";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ProfilePage } from "../pages/user/ProfilePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path={ROUTE_PATHS.LOGIN} element={<LoginPage />} />
            <Route path={ROUTE_PATHS.REGISTER} element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["ADMIN", "USER"]} />}>
            <Route path={ROUTE_PATHS.PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
