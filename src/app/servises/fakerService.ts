import Product from '../models/product';
import { faker } from '@faker-js/faker';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DBURL = 'http://localhost:4100/Products/';

@Injectable()
export default class FakerService {
  constructor() {}

  getFakeProduct(): Product {
    var p = new Product();
    p.name = faker.commerce.productName();
    p.description = faker.commerce.productDescription();
    p.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWlCdUPty2siFMwCOiozjuk4T-vatLZ3UGkw&usqp=CAU';
    p.price = Number(faker.commerce.price());
    p.city = faker.address.city();
    p.sellersPhone = faker.phone.number('+972-##-###-####');
    p.seller = faker.company.name();
    p.image =
      this.images[Math.floor(Math.random() * (this.images.length - 0 + 1)) + 0];
    return p;
  }
  images: string[] = [
    'https://www.computerhope.com/cdn/computer-mouse.png',
    'https://www.reidbikes.com/wp-content/uploads/2022/02/2-4.png',
    'https://www.elle-et-vire.com/uploads/cache/400x400/uploads/recip/product/304/62f383f4a57cc_03451790196447-a1l1-ss00148d.png',
    'https://m.media-amazon.com/images/I/41f0Q3nnjlL._AC_.jpg',
    'https://cb2.scene7.com/is/image/CB2/VictoriaBlackVaseSHS21/$web_pdp_main_carousel_sm$/201006142100/victoria-black-vase.jpg',
    'https://cdn-images.article.com/products/SKU45/2890x1500/image42452.jpg',
    'https://cdn2.mulberrybushtoys.co.uk/content/images/thumbs/0010656_hattie-doll-small_450.jpeg',
    'https://m.media-amazon.com/images/I/61z-hrimvXL.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-butter-brands-1666984356.jpg?crop=0.669xw:1.00xh;0.197xw,0&resize=640:*',
    'https://d3m9l0v76dty0.cloudfront.net/system/photos/10324790/original/648be191af2019f038abb816d4ce433e.jpg',
    'https://m.media-amazon.com/images/I/81nUFx9sXoL._AC_SL1500_.jpg',
    'https://www.kantoaudio.com/wp-content/uploads/yu4bam_main.png',
    'https://post.healthline.com/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg',
    'https://media.wired.com/photos/621980b1aaf30ea1c35e400a/125:94/w_1822,h_1370,c_limit/Gear-Samsung-S22-Series.jpg',
    'https://m.media-amazon.com/images/I/71vnssOmpUL._AC_SX679_.jpg',
    'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/4A6C11A35D1249A7AC437B6CCD831B99/M10093625_5.jpg?fit=inside|540:540',
    'https://www.lamnia.com/images/525x525/59387_UC3264-01.jpg',
    'https://ae05.alicdn.com/kf/Hd9e5ab1a09fb4a088c0550ce35efbf06l/Chainsaw-Toy-Chainsaw-Playset-Power-Tool-w-Realistic-Sounds-Yardwork-Toy.jpg',
    'https://ids.si.edu/ids/deliveryService?id=NMAH-JN2014-3863&max=1000',
    'https://cdn.akamai.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1659619680',
    'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/m2jebqntr0yrsvhapqpf.jpg',
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    'https://media.timeout.com/images/105645687/image.jpg',
    'https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg',
    'https://media.cntraveler.com/photos/631fb09e65480b69a20b052a/master/w_2100,h_1500,c_limit/Best%20Water%20Bottles-2022_Yetti%20RAMBLER%2026%20OZ%20WATER%20BOTTLE.jpg',
    'https://images.thepencompany.com/3/nodes/810732.jpg?width=600&height=600&strategy=a',
    'https://www.wmfnordic.com/assets/image-cache/images/media/3D7B8EA2-1EAF-4693-BB14B2EA0E14FE42.a83d4af7.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/China%2C_Jiangxi_province%2C_Jingdezhen%2C_Ming_dynasty_%281368-1644%29%2C_Xuande_mark_-_Bowl_with_Decoration_of_the_%22Three_Friends%22_-_1953.631_-_Cleveland_Museum_of_Art.tif/lossy-page1-1200px-thumbnail.tif.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/68/PEO_M4_Carbine_RAS_M68_CCO.png',
    'https://secure.1net.me/pub/116227/mp3clip/0.jpg',
    'https://www.wikihow.com/images/thumb/c/c3/Improve-WiFi-Reception-Step-10-Version-2.jpg/v4-460px-Improve-WiFi-Reception-Step-10-Version-2.jpg.webp',
  ];
}
