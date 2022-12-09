function grayscale(image_data: ImageData): ImageData {
  let data = image_data.data

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }

  return new ImageData(data, image_data.width, image_data.height)
}

export default grayscale
