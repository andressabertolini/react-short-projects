import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

const Navbar = () => {
    return(
        <nav>
            <Image 
                src={Logo}
                alt="Logo"
                width={50}
                quality={100}
                placeholder="blur"
            />
            <h1>Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    );
}

export default Navbar;