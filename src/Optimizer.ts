import Canvas from "./Canvas"
import createChild from "./util/createChild"
import grayscale from "./util/grayscale"

class Optimizer {
  private image_canvas: Canvas
  private result_canvas: Canvas
  private temp_canvas: Canvas

  constructor(container: HTMLElement, max_height: number, max_width: number) {
    this.image_canvas = new Canvas(createChild<HTMLCanvasElement>(container, 'canvas'), max_height, max_width)
    this.result_canvas = new Canvas(createChild<HTMLCanvasElement>(container, 'canvas'), max_height, max_width)
    this.temp_canvas = new Canvas(createChild<HTMLCanvasElement>(container, 'canvas'), max_height, max_width)
  }

  start(image: HTMLImageElement) {
    this.image_canvas.drawImage(image)
    this.result_canvas.resize(image)
    this.temp_canvas.resize(image)

    this.temp_canvas.drawImage(image)

    this.result_canvas.putData(grayscale(this.temp_canvas.getData()))
  }
}

export default Optimizer
