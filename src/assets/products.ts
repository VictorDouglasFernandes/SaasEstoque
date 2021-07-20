export const products: ProductInterface[] = [
  { id: 1, name: 'Shampoo Dove', units: 10, img: "../../assets/images/shampoo-dove.jpg" },
  { id: 2, name: 'Livro Mente Milionária', units: 6, img: "../../assets/images/livro-mente-milionaria.jpg" },
  { id: 3, name: 'Mouse HP', units: 3, img: "../../assets/images/mouse-hp.jpg" },
  { id: 4, name: 'Coca Cola 2L', units: 20, img: "../../assets/images/coca-cola-2l.jpg" },
  { id: 5, name: 'Iphone X', units: 2, img: "../../assets/images/iphone-x.jpg" },
  { id: 6, name: 'Camisa Lacoste', units: 8, img: "../../assets/images/camisa-lacoste.jpg" },
  { id: 7, name: 'Lego Star Wars ', units: 2, img: "../../assets/images/lego-star-wars.jpg" },
  { id: 8, name: 'Capacete LS2', units: 1, img: "../../assets/images/capacete-ls2.jpg" },
  { id: 9, name: 'Colar Prateado', units: 14, img: "../../assets/images/colar-prateado.jpg" },
  { id: 10, name: 'Guarda-Chuva', units: 7, img: "../../assets/images/guarda-chuva.jpg" },
  { id: 11, name: 'Bicicleta Caloi', units: 1, img: "../../assets/images/bicicleta-caloi.jpg" },
  { id: 12, name: 'Livro Harry Potter', units: 4, img: "../../assets/images/livro-harry-potter.jpg" },
  { id: 13, name: 'Carregador USB-C', units: 11, img: "../../assets/images/carregador-usb-c.jpg" },
  { id: 14, name: 'Máscara de tecido', units: 70, img: "../../assets/images/mascara-de-tecido.jpg" },
  { id: 15, name: 'Capa de Iphone X', units: 35, img: "../../assets/images/capa-iphone-x.jpg" },
];

export interface ProductInterface {
  id: number;
  name: string;
  units: number;
  img?: string;
  description?: string;
}
