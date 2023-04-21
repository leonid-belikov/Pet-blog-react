import Page from './page'

class UsersPage extends Page {
  get loadingTitle() {
    return $('#users-loading')
  }

  get usersList() {
    return $('#users-list')
  }

  get usersItems() {
    return $$('#user-element')
  }

  async loadData() {
    try {
      await this.open()
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 })
      await this.usersList.waitForDisplayed({ timeout: 2000 })
    } catch (e) {
      throw new Error('Не удалось загрузить пользователей')
    }
  }

  async deleteUser() {
    try {
      const usersCount = await this.usersItems.length
      if (!usersCount) {
        throw new Error('Пользователи не найдены')
      }
      await this.usersItems[0].$('#user-delete').click()
      const usersCountAfterDelete = await this.usersItems.length
      if (usersCount - usersCountAfterDelete === 0) {
        throw new Error('Удаление не произошло')
      }
      if (usersCount - usersCountAfterDelete > 1) {
        throw new Error('Удалено более 1 пользователя')
      }
    } catch (e) {
      throw new Error('Не удалось удалить пользователя.', e)
    }
  }

  open() {
    return super.open('/users-test')
  }
}

export default new UsersPage()
