export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return{
            parmas: {id:ninja.id.toString()}
        }
    })
    return {
        paths,
        fallback: false;
    }
}

const Detalis = () => {
    return ( 
        <div>Datelis Page</div>
     );
}
 
export default Detalis;