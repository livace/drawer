function createChild<ElementType extends HTMLElement>(container: HTMLElement, element: string, callback?: (element: ElementType) => void): ElementType {
  const result = document.createElement(element) as ElementType
  if (callback !== undefined) {
    callback(result)
  }

  console.log(container)
  container.appendChild(result)

  return result
}

export default createChild
