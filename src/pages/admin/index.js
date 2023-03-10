import Sidebar from "../../components/Admin/Sidebar";
import { Outlet } from "react-router-dom";

function Admin(props) {
  const { user } = props;
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
