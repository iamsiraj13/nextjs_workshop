import Link from "next/link";
import React from "react";

const Home = ({ newsList }) => {
  return (
    <section style={{backgroundColor:"#FBF7F0"}}>

    <div className="container py-4" >
      <div className="row">
        {newsList.map((news) => (
          <div className="col-lg-4 col-md-6" key={news.id}>
            <div className="shadow m-2 p-4 bg-white " >
              <h3 className="text-capitalize ">{news.title.substring(0,20)}</h3>
              <p>{news.body.substring(0, 100)}</p>
              <Link href="/news/[id]" as={`/news/${news.id}`}>
                <a className="btn btn-success">Read More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
        </section>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");

  const newsList = await res.json();
  return {
    props: {
      newsList,
    },
  };
};

export default Home;
