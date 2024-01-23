Cypress.Commands.add('postbook', book => {
    cy.request({
        method: 'POST',
        url: 'Books',
        body: {
          title: book.title,
          description: book.description,
          pageCount: book.ageCount,
          excerpt: book.excerpt,
          publishDate: book.publishDate
        }
      })
})