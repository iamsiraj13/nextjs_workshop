 
const SingleNews = ({newsItem}) => {
    return (
        <div className="container py-5"> 
            <div className="col-md-8 mx-auto shadow p-4"> 
                <h2 className="text-capitalize">{newsItem.title}</h2>
                <p>{newsItem.body}</p>
            </div>
        </div>
    );
};


export const getStaticProps = async (context) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + context.params.id);
  
    const newsItem = await res.json();
    return {
      props: {
        newsItem,
      },
    };
  };

  export const getStaticPaths = async()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const newsList = await res.json();
      const ids = newsList.map((newsItem) => newsItem.id);
      const paths = ids.map((id)=>({params: {id: id.toString()}}))
      return {
          paths,
          fallback:false
      }


  }

export default SingleNews;