import styles from './Sidebar.module'
function Sidebar(){
    const links = [
        { icon: "fa-chart-line", title: "Status" },
        { icon: "fa-users", title: "User management" },
        { icon: "fa-building", title: "Project management" },
        { icon: "fa-building", title: "Developers management" },
        { icon: "fa-globe", title: "CMS" },
        { icon: "fa-message", title: "Live Chat" },
    ];

    return (
        <aside class={`min-vh-100 py-4 ${styles.sidebar}`}>
            <div className="title">Dashboard</div>

            <nav>
                {links.map((item, index) => (
                    <div className="navItem" key={index}>
                        <i className={`fa-solid ${item.icon}`}></i>
                        <span className="LinkTitle">{item.title}</span>
                    </div>
                ))}
            </nav>

        </aside>
    );
}

export default Sidebar;