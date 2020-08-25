exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allStrapiArticle {
                edges {
                    node {
                        strapiId
                    }
                }
            }
        }
        `).then( result => {
            if (result.errors) 
                throw result.errors;

            const articles = result.data.allStrapiArticle.edges;
            articles.forEach(({node}) => {
                createPage({
                    path: `/blog/article/${node.strapiId}`,
                    component: require.resolve('./src/templates/article_view.js'),
                    context: {
                        id: node.strapiId
                    }
                })
            })
        });
}