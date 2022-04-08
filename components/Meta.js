import Head from "next/head";

 


const Meta = ({title, keywords, description}) => {
    return (
         <Head>
             <title>{title}</title>
             <meta charset="utf-8"/>
             <meta httpQquive="X-UA-Compatible" content="IE-edge"/>
             <meta name="viewport" content="width=divice-width, initial-scale=1" />
             <meta name="description" content={description}/>
             <meta name="keywords" content={keywords} />

         </Head>
    );
};

export default Meta;