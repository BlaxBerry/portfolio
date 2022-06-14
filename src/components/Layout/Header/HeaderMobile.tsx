import React from "react"
import AppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import logo from "../../../assets/logo/favicon.ico"

const HeaderMobile = (): JSX.Element => {
    return (
        <>
            {/* 顶部应用栏 */}
            <AppBar>
                <Toolbar>
                    {/* title  */}
                    <Avatar src={logo} alt="logo" style={{
                        width: 30, height: 30, marginRight: 10
                    }} />
                    <Typography variant="h6" >Portfolio</Typography>

                    <div style={{ flexGrow: 1 }} />

                    {/* TODO: menu button */}
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            {/* 占位栏 高度等于顶部应用栏 */}
            <Toolbar />
        </>
    )
}

export default HeaderMobile