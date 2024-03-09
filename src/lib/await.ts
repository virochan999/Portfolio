interface AwaitProps<T> {
  promise: Promise<T>
  children: (value: T) => JSX.Element
}

const Await = async <T>({ promise, children }: AwaitProps<T>) => {
  let data = await promise
  return children(data)
}

export default Await
