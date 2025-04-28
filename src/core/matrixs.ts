export class MatrixState {
  /** 投影矩阵 */
  mProjectMatrix = new Array(16)
  /** 摄像机矩阵 */
  mVMatrix = new Array(16)
  /** 基本变换矩阵 */
  currentMatrix = new Array(16)
  /** 矩阵栈 */
  mStack = new Array(100)
}
