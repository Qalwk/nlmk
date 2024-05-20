import { Sidebar } from "@nlmk/ds-2.0"
import { useNavigate } from "react-router-dom"


const SideBar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Sidebar  orientation="vertical" key="vertical" allowFavorites onOpenUser="efsd" onClickLogo={() => navigate(-1) }>
              <Sidebar.MenuItem
              path="cars"
              label="Задание на добавление"
              position="top"
              icon="IconKovsh32"
              onClick={() => navigate("/create")}
            //   <Link to="/create"></Link>
            // onClick={() => { window.location.href = "/create" }}
            ></Sidebar.MenuItem>
            <Sidebar.MenuItem
              path="bands"
              label="bands"
              position="top"
              icon="IconBunkerOutlined32"
              // onClick={() => setCurrentPath('bands')}
            >
            </Sidebar.MenuItem>
            <Sidebar.MenuItem
              path="menu item"
              label="menu item"
              position="top"
              icon="IconLightningStroke32"
              // onClick={() => setCurrentPath('menu item')}
            />
            </Sidebar>
    </div>
  )
}

export default SideBar
