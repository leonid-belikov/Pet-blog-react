import LoginPage from '../pages/default/login.page'
import SecurePage from '../pages/default/secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})
