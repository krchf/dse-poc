export interface Composition {
  id: string
  name: string
  xmlUrl: string
  description?: string
}

// export type CompositionCollection = {
//   [id: string]: Composition
// }

export type CompositionCollection = Composition[]
