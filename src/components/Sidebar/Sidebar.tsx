import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./sidebar.scss";

interface SidebarProps {
  onClick: Function;
  drawerState: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { onClick, drawerState } = props;

  const onDrawerClose = () => {
    onClick(!drawerState);
  };

  const switchPrimaryColor = (primary: string, primaryHover: string) => {
    document.documentElement.style.setProperty("--primary-color", primary);
    document.documentElement.style.setProperty(
      "--primary-color-hover",
      primaryHover
    );
  };

  return (
    <div className="sidebar">
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={onDrawerClose}
        className="sidebar__drawer"
      >
        <div className="sidebar__drawer-content">
          <CloseIcon className="sidebar__close-menu" onClick={onDrawerClose} />
          <div className="sidebar__navigation">
            <h2>Themes</h2>
            <ul>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#3d89e9", "#1f7aed")}
              >
                <h2>Blue</h2>
                <span className="sidebar__color-box blue"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#23f0dc", "#18d4c2")}
              >
                <h2>Green</h2>
                <span className="sidebar__color-box green"></span>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => switchPrimaryColor("#f1622f", "#ea4e16")}
              >
                <h2>Red</h2>
                <span className="sidebar__color-box red"></span>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
