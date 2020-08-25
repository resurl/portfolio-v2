import React from 'react'
import Article from './Article'

export default function ArticleView({ articles }) {

    const articleList = articles.map((article, idx) => 
        <Article title={article.node.title}
            body={article.node.content} key={idx} />
    )

    return (
        <div className='space-y-3'>
            {articleList}        
        </div>
    )
}