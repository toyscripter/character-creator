import { defaultState, drawAvatar } from './avatar.ts'
import type { AvatarState } from './avatar.ts'
import { buildCharacterForm } from './character-form.ts'
import { buildWindow } from './window.ts'

const state: AvatarState = { ...defaultState }

const { win, body } = buildWindow()
const { el: formEl } = buildCharacterForm(state, updatePreview)

const preview = document.createElement('div')
preview.style.display = 'flex'
preview.style.flexDirection = 'column'
preview.style.alignItems = 'center'
preview.style.gap = '0.5rem'

const canvas = document.createElement('canvas')
canvas.width = 160
canvas.height = 160
canvas.style.border = '1px solid #ccc'
canvas.style.borderRadius = '4px'

const previewLabel = document.createElement('span')
previewLabel.style.fontSize = '0.85rem'
previewLabel.style.color = '#555'

function updatePreview() {
  drawAvatar(canvas, state)
  previewLabel.textContent = state.name.trim() || 'Unnamed'
}

updatePreview()
preview.append(canvas, previewLabel)
body.append(preview, formEl)
document.body.append(win)
