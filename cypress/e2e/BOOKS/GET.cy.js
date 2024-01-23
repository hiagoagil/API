describe('Testing API BOOKs', () => {
    it('GET', () => {
        cy.request({
            method: 'GET',
            url: 'Books'
        })
        .then((response) =>{
            expect(response.status).to.equal(200)
        })
    });
});