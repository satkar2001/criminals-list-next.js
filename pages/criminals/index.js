import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';
export const getStaticProps=async()=>
{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    return{
        props:{criminals:data}
    }
}
const criminals = ({criminals}) => {
    return (
        <div>
            <h2>All Criminals</h2>
            {criminals.map(criminals=>(
                <Link href={'/criminals/'+criminals.id} key={criminals.id}>
                    <a className={styles.single}>
                        <h3>{criminals.name}</h3>
                    </a>
               </Link>
            ))}
        </div>
      );
}

export default criminals;
