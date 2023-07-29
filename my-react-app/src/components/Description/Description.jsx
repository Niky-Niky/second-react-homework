import User from "../User-db/user.json";
import Image from "../Image/Image";
import Name from "../Name/Name";
import Tag from "../Tag/Tag";
import Location from "../Location/Location";

function Description({avatar}){
    return (
    <div className="description">
<Image src={User.avatar}/>
<Name name={User.username}/>
<Tag tag={User.tag}/>
<Location location={User.location}/>
    </div>
    )
};

export default Description;