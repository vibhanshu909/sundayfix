/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.svg' {
  const content: any
  export default content
}

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
