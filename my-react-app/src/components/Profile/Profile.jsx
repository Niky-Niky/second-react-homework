import Description from "../Description/Description";
import Stats from "../Stats/Stats";
function Profile({avatar}){
    return (
    <div className="profile">
    <Description/>
    <Stats/>
    </div>
    )
};

export default Profile;