import { Outlet } from "react-router-dom";

function Project () {
    const projectData = {
        profile: "Projects Names",
        // 1. هنا بنحدد أسماء الأعمدة اللي هتظهر فوق في الـ <th>
        columns: ["#", "First Name", "Project", "company"], 
        users: [
            { id: 1, firstName: "Mazen", lastName: "CMS", username: "MazComp" },
            { id: 2, firstName: "Youssef", lastName: "E-Commerce", username: "YOuCOmp" }
        ]
    };
    return (

    <>
    <Outlet context={projectData}/>
    </>

    );
}
export default Project ;