import User from "../User-db/user.json"
import Followers from "../Followers/Followers";
import Views from "../Views/Views";
import Likes from "../Likes/Likes";
function Stats (){
    return (
        <ul className="stats">
    <Followers quantity={User.stats.followers}/>
    <Views quantity={User.stats.views}/>
    <Likes quantity={User.stats.likes}/>
        </ul>
    )
};

export default Stats;