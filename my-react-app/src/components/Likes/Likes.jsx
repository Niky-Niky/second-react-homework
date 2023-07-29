function Likes ({quantity}){
    return (
        <li className="likes">
      <span className="label">Likes </span>
      <span className="quantity">{quantity}</span>
    </li>
    )
};

export default Likes;