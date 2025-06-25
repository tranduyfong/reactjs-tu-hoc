// const MyComponent = () => {
//     return (
//         <div>Tran Duy Phong</div>
//         <div>Error</div>
//     );
// }
//           LOI DO NO CHi TRA VE 1 PARENT TRONG RETURN

import './style.css';

// FRAGMENT
const MyComponent = () => {
    return (
        <>
            <div className="abc">Tran Duy Phong</div>
            <div className="child">Child</div>
        </>
    );
}
export default MyComponent;