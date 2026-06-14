import type { AvatarState, Shape } from './avatar.ts'
import { randomState } from './avatar.ts'
import { labeledTextField, labeledColorPicker, labeledSelect, button, formGroup } from './form.ts'

export interface CharacterFormElements {
  el: HTMLElement
  nameInput: HTMLInputElement
  bgInput: HTMLInputElement
  shapeSelect: HTMLSelectElement
  scInput: HTMLInputElement
}

export function buildCharacterForm(
  state: AvatarState,
  onChange: () => void,
): CharacterFormElements {
  const nameField = labeledTextField('Character Name', state.name, (v) => {
    state.name = v
    onChange()
  })

  const bgField = labeledColorPicker('Background Color', state.bgColor, (v) => {
    state.bgColor = v
    onChange()
  })

  const shapeField = labeledSelect('Shape', state.shape, [
    { value: 'rect', label: 'Rectangle' },
    { value: 'circle', label: 'Circle' },
  ], (v) => {
    state.shape = v as Shape
    onChange()
  })

  const scField = labeledColorPicker('Shape Color', state.shapeColor, (v) => {
    state.shapeColor = v
    onChange()
  })

  const randomBtn = button('Randomize', () => {
    const r = randomState()
    if (r.bgColor) { state.bgColor = r.bgColor; bgField.input.value = r.bgColor }
    if (r.shapeColor) { state.shapeColor = r.shapeColor; scField.input.value = r.shapeColor }
    if (r.shape) { state.shape = r.shape; shapeField.select.value = r.shape }
    onChange()
  })
  randomBtn.style.background = 'none'
  randomBtn.style.border = '1px solid #888'
  randomBtn.style.color = '#555'

  const createBtn = button('Create', () => {
    console.log(state)
  })
  createBtn.style.background = '#4a90d9'
  createBtn.style.color = '#fff'
  createBtn.style.border = 'none'

  const btnRow = document.createElement('div')
  btnRow.style.display = 'flex'
  btnRow.style.gap = '0.5rem'
  btnRow.style.justifyContent = 'flex-end'
  btnRow.append(randomBtn, createBtn)

  const el = formGroup(
    nameField.el,
    bgField.el,
    shapeField.el,
    scField.el,
    btnRow,
  )

  return {
    el,
    nameInput: nameField.input,
    bgInput: bgField.input,
    shapeSelect: shapeField.select,
    scInput: scField.input,
  }
}
