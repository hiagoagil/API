import { faker } from '@faker-js/faker'

describe('Testing full API cycle - POST, PUT, DELITE and GET', () => {

    const book = {
        title: faker.internet.domainName(),
        description: faker.string.uuid(),
        page: faker.number.int({ min: 1, max: 100 }),
        excerpt: faker.string.uuid(),
        date: faker.date.anytime()
    }

    it('Ensure functionality of POST, PUT, DELETE, and GET operations for books', () => {

        cy.request({
            method: 'POST',
            url: 'Books',
            body: {
                id: '01',
                title: book.title,
                description: book.description,
                pageCount: book.page,
                excerpt: book.description,
                publishDate: book.date
            }
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body.title).to.equal(book.title)
            const id = res.body.id
            return cy.request({
                method: 'PUT',
                url: `Books/${id}`,
                body: {
                    id: '01',
                    title: 'EditandoLivro',
                    description: 'EditandoLivro'
                }
            }).then((res) => {
                expect(res.status).to.equal(200)
                expect(res.body.title).to.equal('EditandoLivro')
                const id = res.body.id
                return cy.request ({
                    method: 'DELETE',
                    url: `Books/${id}`
                })
            }).then((res) => {
                expect(res.status).to.equal(200)
                return cy.request({
                    method: 'GET',
                    url: 'Books'
                })
            }).then((res) => {
                expect(res.status).to.equal(200)
            })
           

        })

    })
});