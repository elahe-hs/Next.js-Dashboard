import MenuLink from './menuLink/menuLink'
import Image from 'next/image';
import styles from './sidebar.module.scss';
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  

const Sidebar = () => {
    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_user}>
                <Image src="/noavatar.png" alt="" width={50} height={50} />
                <div className={styles.sidebar_userDetail}>
                    <span className={styles.sidebar_username}>Elahe Hashemi</span>
                    <span className={styles.sidebar_usertitle}>Administrator</span>
                    </div>
            </div>
          <ul className={styles.sidebar_list}>
          {menuItems.map((cat) => (
              <li key={cat.title}>
                  <span  className={styles.sidebar_cat}>{cat.title}</span>
                  {cat.list.map((item) => (
                    <MenuLink item={item} key={item.title} />
                  ))}
              </li>  
                ))}
          </ul>
          <button className={styles.sidebar_btn}>
            <MdLogout />
            Logout
            </button>
        </div>
    )
}

export default Sidebar