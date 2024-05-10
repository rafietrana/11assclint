import { Outlet } from "react-router-dom";
 

 

const Layout = () => {
    return (
        <div>
     
            <Outlet></Outlet>
        <p> This is Footer </p>
        </div>
    );
};

export default Layout;