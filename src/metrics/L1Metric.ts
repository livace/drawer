import { assert } from 'console'
import Metric from './Metric'

class L1Metric implements Metric {
  private source: Uint8ClampedArray

  constructor(source: ImageData) {
    this.source = source.data
  }

  score(image: ImageData): number {
    assert(image.data.length === this.source.length)
    let result = 0

    for (let i = 0; i < this.source.length; i++) {
      result += Math.abs(this.source[i] - image.data[i])
    }

    return result
  }
}

export default L1Metric
