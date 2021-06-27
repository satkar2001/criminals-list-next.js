export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(criminals => {
      return {
        params: { id: criminals.id.toString() }
      }
    })

    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
      props: { criminals: data }
    }
  }

  const Details = ({ criminals }) => {
    return (
      <div>
        <h1>Name:{ criminals.name }</h1>
        <p>Location of arrest:{ criminals.address.city }</p>
      </div>
    );
  }

  export default Details;