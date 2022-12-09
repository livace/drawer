class Canvas {
  private html_canvas: HTMLCanvasElement
  private max_width: number
  private max_height: number

  constructor(html_canvas: HTMLCanvasElement, max_width: number, max_height: number) {
    this.html_canvas = html_canvas
    this.max_width = max_width
    this.max_height = max_height
  }

  drawImage(image: HTMLImageElement): void {
    const [height, width] = this.resize(image)
    console.log(height, width)

    const context = this.html_canvas.getContext('2d')!
    context.drawImage(image, 0, 0, width, height)
  }

  resize(image: HTMLImageElement): [height: number, width: number] {
    const [height, width] = this.getSize(image)
    this.html_canvas.width = width;
    this.html_canvas.height = height;

    return [height, width]
  }

  getData(): ImageData {
    const context = this.html_canvas.getContext('2d')!

    return context.getImageData(0, 0, this.html_canvas.width, this.html_canvas.height)
  }

  putData(image_data: ImageData): void {
    const context = this.html_canvas.getContext('2d')!

    context.putImageData(image_data, 0, 0)
  }

  private getSize(image: HTMLImageElement): [number, number] {
    const [height, width] = (() => {
      if (image.height / image.width > this.max_height / this.max_width) {
        const height = this.max_height
        const width = this.max_height / image.height * image.width

        return [height, width]
      } else {
        const width = this.max_width
        const height = this.max_width / image.width * image.height

        return [height, width]
      }
    })()

    return [Math.round(height), Math.round(width)]
  }
}

export default Canvas
