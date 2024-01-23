import {faker} from '@faker-js/faker'
describe('Testing API BOOKs', () => {
    const book = {
        title: faker.internet.domainName(),
        description: faker.string.uuid(),
        page: faker.number.int({ min: 1, max: 100 }),
        excerpt: faker.string.uuid(),
        date: faker.date.anytime()
    }
    it('DELETE', () => {
        cy.postbook(book)
            .then((response) => {
                const id = response.body.id
                cy.request({
                    method: 'DELETE',
                    url: `Books/${id}`,
                }).then((response) => {
                    expect(response.status).to.equal(200)
                })
            })
    })
})