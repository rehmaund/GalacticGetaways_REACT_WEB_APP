import { Link } from "react-router-dom";

export function ProfileComponent(user, likes, following, follows) {
    return (
        <div className="row w-100 mx-0 px-0">
            <div className="col-12 position-relative px-0">
                <img className="w-100 rounded" alt="" src={`images/${user.type}_banner.png`}></img>
                <img className="h-75 position-absolute rounded start-0 bottom-0" alt="" src={`images/${user.type}_pfp.jpg`}></img>
            </div>
            <div className="row my-2">
                <div className="col-4 pt-2 mt-2">
                    <h1 className="fw-bold">{user.display_name}</h1>
                    <h4 className="text-secondary">@{user.username}</h4>
                    {/* <h6><span className="fw-bold me-2">{follows}</span> Followers</h6>
                    <h6><span className="fw-bold me-2">{following}</span> Following</h6> */}
                </div>
                <div className="col-3 position-relative">
                    <div className="position-absolute bottom-0 start-0">
                        <div className={user.location === "" ? "d-none" : 'd-flex align-items-start'}>
                            <i className="fa fa-solid fa-location-dot me-3"></i><h6>{user.location}</h6>
                        </div>
                        <div className={user.email === "" ? "d-none" : 'd-flex align-items-start'}>
                            <i className="fa fa-solid fa-envelope me-3"></i><h6>{user.email}</h6>
                        </div>
                        <div className={user.phone === "" ? "d-none" : 'd-flex align-items-start'}>
                            <i className="fa fa-solid fa-phone me-3"></i><h6>{user.phone}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3 position-relative">
                    <div className="position-absolute bottom-0 start-0">
                        <h6 className={user.type == 'MODERATOR' ? '' : 'd-none'}><span className="fw-bold me-2">{user.actions_taken}</span> Actions Taken</h6>
                        <h6><span className="fw-bold me-2">{user.total_likes}</span> Likes</h6>
                        <h6><span className="fw-bold me-2">{user.total_comments}</span> Comments</h6>
                        <h6 className={user.type == 'HUMAN' ? '' : 'd-none'}><span className="fw-bold me-2">{user.total_recs}</span> Recommendations</h6>
                    </div>
                </div>
                <div className="col-2 position-relative">
                    <Link to="/tuiter/edit-profile/">
                        <button className="w-100 rounded-pill btn btn-light fw-bold position-absolute top-50 end-0">
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row my-3 mx-0">
                <div className="col-8 card bg-secondary">
                    <div className="card-body">
                        <h4 className="card-title">Bio</h4>
                        <p className="card-text">{user.bio}</p>
                    </div>
                </div>
                <div className="col-4 card bg-primary">
                    <div className="card-body">
                        <h4 className="card-title">Wants to visit</h4>
                        <p className="card-text">{user.wants_visit}</p>
                    </div>
                </div>
            </div>
            <div className="row my-3 mx-0">
                <h2>Recent Activity</h2>

            </div>
        </div>
    );
}
