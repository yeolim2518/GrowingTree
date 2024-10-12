import { Navigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout.jsx";
import AdminMainLayout from "../components/admin/AdminMainLayout.jsx";
import AdminCounseling from "../pages/admin/AdminCounseling.jsx";
import AdminCounselingDetail from "../pages/admin/AdminCounselingDetail.jsx";
import AdminEstimate from "../pages/admin/AdminEstimate.jsx";
import AdminEstimateDetail from "../pages/admin/AdminEstimateDetail.jsx";
import AdminLogin from "../pages/admin/AdminLogin.jsx";
import AdminStatics from "../pages/admin/AdminStatics.jsx";

const routes = [
  {
    path: '/admin-login',
    element: <AdminLayout><AdminLogin /></AdminLayout>,
  },
  {
    path: '/admin',
    element: <Navigate to="/admin/counseling" replace />
  },
  {
    path: '/admin/counseling',
    element: <AdminMainLayout><AdminCounseling /></AdminMainLayout>,
  },
  {
    path: '/admin/counseling/:id',
    element: <AdminMainLayout><AdminCounselingDetail /></AdminMainLayout>,
  },
  {
    path: '/admin/estimate',
    element: <AdminMainLayout><AdminEstimate /></AdminMainLayout>,
  },
  {
    path: '/admin/estimate/:id',
    element: <AdminMainLayout><AdminEstimateDetail /></AdminMainLayout>,
  },
  {
    path: '/admin/statics',
    element: <AdminMainLayout><AdminStatics /></AdminMainLayout>,
  },
];

export default routes;
