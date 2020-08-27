import React from 'react'
import Article from './Article'

export default function BlogHome({ articles }) {

    const articleList = articles.map((article, idx) => 
        <Article title={article.node.title}
            body={article.node.content} time={article.node.published_at} id={article.node.id} key={idx} />
    )


    return (
        <div className='space-y-6 mb-8 overflow-scroll'>
            {articleList.reverse()}        
        </div>
    )
}