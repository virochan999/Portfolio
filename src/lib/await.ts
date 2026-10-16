interface AwaitProps<T> {
  promise: Promise<T>
  children: (value: T) => React.JSX.Element
}

const Await = async <T>({ promise, children }: AwaitProps<T>) => {
  const data = await promise
  return children(data)
}

export default Await
