import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <nav>
            <div className="logo">
                <h1> Ninja Lis </h1>
            </div>
            <Link href="/"> Home </Link>
            <Link href="/about"> About </Link>
            <Link href="/ninjas"> Ninja Listing </Link>
        </nav>
        </div> 
        
    );
}
 
export default Navbar;