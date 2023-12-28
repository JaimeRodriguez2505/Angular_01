import { Component } from '@angular/core';

interface ImageItem {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {
  images: ImageItem[] = [
    {
      title: 'Imagen 1',
      description: 'Descripción de la Imagen 1',
      imageUrl: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg'
    },
    {
      title: 'Imagen 2',
      description: 'Descripción de la Imagen 1',
      imageUrl: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720'
    },
    {
      title: 'Imagen 3',
      description: 'Descripción de la Imagen 1',
      imageUrl: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
    },
    {
      title: 'Imagen 4',
      description: 'Descripción de la Imagen 1',
      imageUrl: 'https://png.pngtree.com/background/20230612/original/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-picture-image_3180467.jpg'
    },
  ];
}
