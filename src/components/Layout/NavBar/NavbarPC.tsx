import React from "react"
import { useNavigate } from "react-router-dom";
import Fab from "@material-ui/core/Fab"
import { navigationItems } from "../../Routes/RouterView"

const NavBarPC = (): JSX.Element => {

    const navigate = useNavigate();

    const onClick = (pathname: string) => {
        navigate(pathname)
    }

    return (
        <div>
            {
                navigationItems?.map(item => (
                    <Fab
                        key={item.to}
                        variant="extended"
                        onClick={() => onClick(item.to)}
                    // color={item.color}
                    // aria-label={item.label}
                    >
                        {item.icon} &nbsp;
                        {item.title}
                    </Fab>
                ))
            }
        </div>
    )
}

export default NavBarPC