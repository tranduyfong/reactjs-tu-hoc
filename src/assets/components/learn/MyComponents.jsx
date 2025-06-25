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
    // const temp = 'Toi ten la: '; // string
    // const arrayNumber = [1, 2, 3, 4]
    const person = {
        name: 'Tran Duy Phong',
        age: 23
    }
    return (
        <>
            <div className="abc">{JSON.stringify(person)}Tran Duy Phong</div>
            <div className="child">Child</div>
        </>
    );
}
export default MyComponent;