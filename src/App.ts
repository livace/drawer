import Optimizer from './Optimizer'
import ImageLoader from './ImageLoader'
import './App.css'
import createChild from './util/createChild'
class App {
  private container: HTMLElement
  private optimizer: Optimizer
  private loader: ImageLoader

  constructor(container: HTMLElement) {
    this.container = container

    this.optimizer = new Optimizer(createChild<HTMLDivElement>(this.container, 'div'), 300, 300)
    this.loader = new ImageLoader(
      createChild<HTMLDivElement>(
        this.container,
        'div'
      ),
      (image: HTMLImageElement) => {
        this.optimizer.start(image)
      }
    )
  }

  serve() {

  }
}

export default App
