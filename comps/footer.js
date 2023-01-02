const Footer = () => {

    let Year = new Date().getFullYear();
    return ( 
        <footer>
             Copyright {Year} Ninja List
        </footer>
     );
}
 
export default Footer;