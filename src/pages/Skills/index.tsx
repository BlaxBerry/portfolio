import { Link, Outlet } from "react-router-dom";

const IndexPage = (): JSX.Element => {
    return (
        <>
            <div>
                <Link to={'front'}>Front</Link>
                <Link to={'back'}>Back</Link>
            </div>

            <Outlet />
        </>
    )
}

export default IndexPage