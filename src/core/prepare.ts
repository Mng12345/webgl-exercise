export const initCanvas = (container: HTMLDivElement): HTMLCanvasElement => {
  container.innerHTML = ''
  const canvas = document.createElement('canvas')
  const rect = container.getBoundingClientRect()
  canvas.width = rect.width
  canvas.height = rect.height
  container.appendChild(canvas)
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'
  canvas.style.backgroundColor = '#000'
  return canvas
}
