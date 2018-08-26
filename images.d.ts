declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '*.css' {
  interface Styles {
    [key: string]: string
  }

  const styles: Styles

  export default styles
}
