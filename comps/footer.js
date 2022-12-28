const Footer = () => {

    let Year = new Date().getFullYear();
    return ( 
        <div>
             Copyright {Year} Ninja List
        </div>
     );
}
 
export default Footer;