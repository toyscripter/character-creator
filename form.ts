export interface TextField {
  el: HTMLElement
  input: HTMLInputElement
}

export function labeledTextField(labelText: string, value: string, onChange: (v: string) => void): TextField {
  const el = document.createElement('label')
  el.style.display = 'flex'
  el.style.flexDirection = 'column'
  el.style.gap = '0.25rem'
  el.style.fontSize = '0.85rem'
  const labelSpan = document.createElement('span')
  labelSpan.textContent = labelText
  const input = document.createElement('input')
  input.style.padding = '0.35rem'
  input.style.fontSize = '0.9rem'
  input.value = value
  input.addEventListener('input', () => onChange(input.value))
  el.append(labelSpan, input)
  return { el, input }
}

export interface ColorPicker {
  el: HTMLElement
  input: HTMLInputElement
}

export function labeledColorPicker(labelText: string, value: string, onChange: (v: string) => void): ColorPicker {
  const el = document.createElement('label')
  el.style.display = 'flex'
  el.style.flexDirection = 'column'
  el.style.gap = '0.25rem'
  el.style.fontSize = '0.85rem'
  const labelSpan = document.createElement('span')
  labelSpan.textContent = labelText
  const input = document.createElement('input')
  input.type = 'color'
  input.value = value
  input.addEventListener('input', () => onChange(input.value))
  el.append(labelSpan, input)
  return { el, input }
}

export interface SelectField {
  el: HTMLElement
  select: HTMLSelectElement
}

export function labeledSelect(labelText: string, value: string, options: { value: string; label: string }[], onChange: (v: string) => void): SelectField {
  const el = document.createElement('label')
  el.style.display = 'flex'
  el.style.flexDirection = 'column'
  el.style.gap = '0.25rem'
  el.style.fontSize = '0.85rem'
  const labelSpan = document.createElement('span')
  labelSpan.textContent = labelText
  const select = document.createElement('select')
  select.style.padding = '0.25rem'
  for (const opt of options) {
    const o = document.createElement('option')
    o.value = opt.value
    o.textContent = opt.label
    select.append(o)
  }
  select.value = value
  select.addEventListener('change', () => onChange(select.value))
  el.append(labelSpan, select)
  return { el, select }
}

export function button(text: string, onClick: () => void): HTMLElement {
  const btn = document.createElement('button')
  btn.textContent = text
  btn.style.padding = '0.4rem 1rem'
  btn.style.cursor = 'pointer'
  btn.addEventListener('click', onClick)
  return btn
}

export function formGroup(...children: HTMLElement[]): HTMLElement {
  const el = document.createElement('div')
  el.style.display = 'flex'
  el.style.flexDirection = 'column'
  el.style.gap = '0.75rem'
  el.append(...children)
  return el
}
