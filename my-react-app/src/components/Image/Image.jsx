// /* eslint-disable jsx-a11y/alt-text */
// import User from './components/User-db/user.json';
function Image({src}){
    console.log(src)
    return (
    <img src = {src} 
         alt = 'A guy in r3d' 
         className="avatar"
    />
    ) 
};

export default Image;