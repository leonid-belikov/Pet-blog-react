export function openLinkInNewTab (link: string): void {
  let element: HTMLAnchorElement | null = document.createElement('a')
  element.setAttribute('href', link)
  element.setAttribute('target', '_blank')
  element.setAttribute('rel', 'noopener noreferrer')
  element.click()
  element = null
}

export function scrollToElementById (id: string): void {
  const target = document.getElementById(id)
  target?.scrollIntoView({ behavior: 'smooth' })
}
