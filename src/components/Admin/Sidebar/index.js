import { Link } from "react-router-dom";
import Logo from "../../../assets/logos/Torche_Logo-01_White.png";
import Item from "./Item";
import * as Icon from "react-bootstrap-icons";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-[20vw] text-white bg-primary sticky top-0 left-0 h-screen py-8 px-6">
      <header>
        <img src={Logo} alt="Logo" className="h-20 -ml-2" />
      </header>
      <main className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-2 mt-14">
          <Item
            icon={<Icon.Grid size={20} />}
            title="Dashboard"
            href="dashboard"
          />
          <Item
            icon={<Icon.BriefcaseFill size={20} />}
            title="Lowongan"
            href="lowongan"
          />
          <Item
            icon={<Icon.PeopleFill size={20} />}
            title="Pelamar"
            href="pelamar"
          />
          <Item
            icon={<Icon.GearFill size={20} />}
            title="Pengaturan"
            href="pengaturan"
          />
        </ul>
        <p>
          {/* copyright torche education */}
          <Link to="/logout">Logout</Link>  
        </p>
      </main>
    </aside>
  );
}
