import createChild from "./util/createChild";

class ImageLoader {
  constructor(element: HTMLElement, callback: (image: HTMLImageElement) => void) {
    createChild<HTMLInputElement>(element, 'input', (input: HTMLInputElement) => {
      input = input
      input.type = 'file'

      input.oninput = () => {
        const file_reader = new FileReader();
        file_reader.onload = () => {
          const image = new Image()
          image.onload = () => {
            callback(image)
          };
          image.src = file_reader.result as string;
        };
        file_reader.readAsDataURL(input.files![0]);
      }
    })
  }
}

export default ImageLoader
