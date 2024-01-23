import { faker } from '@faker-js/faker'
describe('Testing API BOOKs', () => {
  const book = {
    title: faker.internet.domainName(),
    description: faker.string.uuid(),
    page: faker.number.int({ min: 1, max: 100 }),
    excerpt: faker.string.uuid(),
    date: faker.date.anytime()
  }
  it('POST', () => {
    cy.request({
      method: 'POST',
      url: 'Books',
      body: {
        title: book.title,
        description: book.description,
        pageCount: book.page,
        excerpt: book.description,
        publishDate: book.date
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})