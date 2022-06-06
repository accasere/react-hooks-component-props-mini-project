import React from "react";
import Article from './Article'

function ArticleList({posts}){
    const articles = posts.map( (e) => (
        <Article 
            key={e.id}
            title={e.title}
            date={e.date}
            preview={e.preview}
        />
    ));
    console.log(articles);
    return(
        <main>
            {articles}
        </main> 
    );
}

export default ArticleList; 