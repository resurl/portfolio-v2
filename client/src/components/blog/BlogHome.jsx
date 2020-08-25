import React from 'react'
import Article from './Article'

export default function BlogHome({ articles }) {

    const articleList = articles.map((article, idx) => 
        <Article title={article.node.title}
            body={article.node.content} id={article.node.id} key={idx} />
    )

    return (
        <div className='space-y-3 mb-8'>
            {articleList}        
        </div>
    )
}