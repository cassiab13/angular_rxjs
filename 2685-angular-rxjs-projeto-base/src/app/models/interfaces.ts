/*Modelo que caracteriza o retorno da API, que pegue as informações que a gente precisa. Eu posso criar várias pastas com interfaces
ou um arquivo com todas as interfaces*/

/*Acessar a documentação do API Google Books - ver o status da resposta 200.
  Copiar o retorno da API
  Acessar o site Quicktype.io para transformar o retorno em uma interface do TS*/

export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface Item {
  volumeInfo: VolumeInfo
}

export interface LivrosResultado {
  items: Item[];
  totalItems: number
}
