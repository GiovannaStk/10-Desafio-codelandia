import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-news',
  templateUrl: './bottom-news.component.html',
  styleUrls: ['./bottom-news.component.less']
})
export class BottomNewsComponent implements OnInit {

  listaNews = [{
    descricao: 'Novidades do novo curta de vidas ao vento',
    url: '../../../assets/img/news-bottom/Vidas-ao-Vento-Naoko.png'
  },
  {
    descricao: 'Hacks de GTA 5 confira',
    url: '../../../assets/img/news-bottom/GTA-5-PlayStation-5-Rockstar-Games-Sony-2020.png'
  },
  {
    descricao: 'LOL: Novidades do jogo',
    url: '../../../assets/img/news-bottom/key-visual 1.png'
  },
  {
    descricao: 'Novo filme da pixar super emocionante',
    url: '../../../assets/img/news-bottom/soul-disney-pixar-1220-1400x800-5.png'
  },
  {
    descricao: 'Nova temporada de vikings traz novidades...',
    url: '../../../assets/img/news-bottom/Vikings-Série-Derivada.png'
  },
  {
    descricao: 'Your name is only for you',
    url: '../../../assets/img/news-bottom/your-name-2 1.png'
  },

]

  constructor() { }

  ngOnInit(): void {
  }

}
