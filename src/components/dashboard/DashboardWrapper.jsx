import React, { useState } from 'react'
import HeaderAndDrawer from './HeaderAndDrawer'

const DashboardWrapper = ({ children }) => {
    const [togleSideBar, setTogleSideBar] = useState(false)
    const [togleMobSideBar, setTogleMobSideBar] = useState(false)
    const handleMobNav = () => {
        setTogleSideBar(!togleSideBar)
        setTogleMobSideBar(!togleMobSideBar)
    }
    return (
        <div className="body_wrapper">
            <HeaderAndDrawer setTogleSideBar={setTogleSideBar} togleSideBar={togleSideBar} handleMobNav={handleMobNav} />
            <div className={togleSideBar ? 'body_content togle_side_drawer' : 'body_content'}>
                {
                    togleMobSideBar && <div className="sideNavOverLay" onClick={handleMobNav}></div>
                }

                {children}</div>
        </div>
    )
}

export default DashboardWrapper