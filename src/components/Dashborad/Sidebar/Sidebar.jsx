import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'
function Sidebar(){
    const links = [
        { icon: "fa-chart-line", title: "Status" , path:"/"},
        { icon: "fa-users", title: "User management" , path:"/Users" },
        { icon: "fa-building", title: "Project management" , path:"/Project"},
        { icon: "fa-building", title: "Developers management", path:"/Developers" },
        { icon: "fa-globe", title: "CMS" },
        { icon: "fa-message", title: "Live Chat" },
    ];

    return (
        <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
            <div className="px-4 fw-semibold fs-4 mb-3">Dashboard</div>

            <nav>
                {links.map((item, index) => (
                    <NavLink to={item.path} key={index} className={`${styles.navItem} py-4 px-3 d-flex align-items-center gap-3`}>
                        <i className={`fa-solid ${item.icon} ${styles.icon}`}></i>
                        <span className={styles.LinkTitle}>{item.title}</span>
                    </NavLink>
                ))}
            </nav>

        </aside>
    );
}

export default Sidebar;
