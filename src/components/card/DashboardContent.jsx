import React from 'react'

const DashboardContent = ({ card_title, card_icon, card_info, last_text }) => {
    return (
        <>
            <div className="card_title mb-2 color_secondary d-flex align-items-center justify-content-between">
                <span>
                    {card_title}
                </span>
                {card_icon}
            </div>
            <div className="card_info">
                {card_info}
            </div>
            <div className="medium_text color_primary">
                {last_text}
            </div>
        </>
    )
}

export default DashboardContent