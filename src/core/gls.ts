import { ElMessage } from 'element-plus'

export const getGl = (canvas: HTMLCanvasElement): WebGL2RenderingContext => {
  const gl = canvas.getContext('webgl2')
  if (gl === null) {
    const err = `your browser doesn't support webgl2.`
    ElMessage.error(err)
    throw new Error(err)
  }
  return gl
}

export const enum ShaderType {
  Vertex,
  Fragment,
}

export const loadStringShader = (
  gl: WebGL2RenderingContext,
  shaderType: ShaderType,
  source: string,
): WebGLShader => {
  const shader = gl.createShader(
    shaderType === ShaderType.Vertex ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER,
  )
  if (shader === null) {
    const errMessage = `failed to create ${shaderType === ShaderType.Vertex ? 'Vertex' : 'Fragment'} shader.`
    ElMessage.error(errMessage)
    throw new Error(errMessage)
  }
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!compiled && !gl.isContextLost()) {
    const info = gl.getShaderInfoLog(shader)
    const errMessage = `failed to compile ${shaderType === ShaderType.Vertex ? 'Vertex' : 'Fragment'} shader: ${info}`
    ElMessage.error(errMessage)
    gl.deleteShader(shader)
    throw new Error(errMessage)
  }
  return shader
}

export const createProgram = (
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
): WebGLProgram => {
  const vShader = loadStringShader(gl, ShaderType.Vertex, vertexShaderSource)
  const fShader = loadStringShader(gl, ShaderType.Fragment, fragmentShaderSource)
  const program = gl.createProgram()
  gl.attachShader(program, vShader)
  gl.attachShader(program, fShader)
  gl.linkProgram(program)
  const linked = gl.getParameter(gl.LINK_STATUS)
  if (!linked && !gl.isContextLost()) {
    const info = gl.getProgramInfoLog(program)
    const errMessage = `failed to link program: ${info}`
    ElMessage.error(errMessage)
    gl.deleteProgram(program)
    gl.deleteShader(vShader)
    gl.deleteShader(fShader)
    throw new Error(errMessage)
  }
  gl.useProgram(program)
  gl.enable(gl.DEPTH_TEST)
  return program
}
