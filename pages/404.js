import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link'
const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
    setTimeout(()=>{
    router.push('/');
    },4000)
    },[])
    return (
        <div className="not-found">
         <h1>ooopppss...</h1>
         <h2>looks like the page cant be found</h2>
         <p>go back to the <Link href="/"><a> homepage </a></Link></p>
        </div>
    );
}

export default NotFound;