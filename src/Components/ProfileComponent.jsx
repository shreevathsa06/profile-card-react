import profile_icon from "../assets/avatar.jpg"

function ProfileComponent() {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-bg"></div>
                    <div className="profile-pic-container">
                        <img src={profile_icon} alt="profile pitcure" className="profile-pic" />
                    </div>
                </div>

                <div className="profile-info">
                    <div className="profile-name">John Wick</div>
                    <div className="profile-age-location">
                        <span className="age">32</span>
                        <span className="location">London</span>
                    </div>


                    <div className="profile-stats">
                        <div className="stat-item">
                            <div className="stat-number">80k</div>
                            <div className="stat-label">Followers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">803k</div>
                            <div className="stat-label">Likes</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1.4K</div>
                            <div className="stat-label">Photos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent