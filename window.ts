export interface WindowShell {
  win: HTMLElement
  body: HTMLElement
}

export function buildWindow(): WindowShell {
  const win = document.createElement('div')
  win.style.position = 'fixed'
  win.style.left = '50%'
  win.style.top = '50%'
  win.style.transform = 'translate(-50%, -50%)'
  win.style.border = '1px solid'
  win.style.userSelect = 'none'
  win.style.background = '#fff'
  win.style.fontFamily = 'system-ui, sans-serif'

  const header = document.createElement('div')
  header.style.borderBottom = '1px solid #ccc'
  header.style.padding = '1rem'
  header.style.fontWeight = '600'
  header.textContent = 'New Character'
  win.append(header)

  const body = document.createElement('div')
  body.style.padding = '1rem'
  body.style.display = 'flex'
  body.style.gap = '1.5rem'
  win.append(body)

  return { win, body }
}
