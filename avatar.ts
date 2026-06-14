export type Shape = 'rect' | 'circle'

export interface AvatarState {
  name: string
  bgColor: string
  shape: Shape
  shapeColor: string
}

export const defaultState: AvatarState = {
  name: '',
  bgColor: '#4a90d9',
  shape: 'rect',
  shapeColor: '#ffffff',
}

const rand = (max: number) => Math.floor(Math.random() * max)

export const randHex = () =>
  `#${Array.from({ length: 6 }, () => '0123456789abcdef'[rand(16)]).join('')}`

export const randomState = (): Partial<AvatarState> => ({
  bgColor: randHex(),
  shapeColor: randHex(),
  shape: Math.random() > 0.5 ? 'rect' : 'circle',
})

export function drawAvatar(canvas: HTMLCanvasElement, state: AvatarState) {
  const ctx = canvas.getContext('2d')!
  const s = canvas.width
  ctx.clearRect(0, 0, s, s)

  ctx.fillStyle = state.bgColor
  ctx.fillRect(0, 0, s, s)

  const padding = s * 0.15
  const innerSize = s - padding * 2

  ctx.fillStyle = state.shapeColor
  if (state.shape === 'circle') {
    ctx.beginPath()
    ctx.arc(s / 2, s / 2, innerSize / 2, 0, Math.PI * 2)
    ctx.fill()
  } else {
    ctx.fillRect(padding, padding, innerSize, innerSize)
  }
}
