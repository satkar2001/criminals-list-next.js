import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/robb.png" width={128} height={77} />
            </div>
            <Link href="/"><a>home</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/criminals"><a>criminals </a></Link>
        </nav>
     );
}

export default Navbar;