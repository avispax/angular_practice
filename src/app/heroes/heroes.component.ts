import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  // HeroServiceインスタンスをコンストラクタで生成。ちなみにシングルトン。
  // この、引数で渡すような行為を「依存性の注入」という。慣れろ。
  constructor(
    private heroService: HeroService
  ) { }

  // 初期化はコンストラクタと異なり、FW的に最適なタイミングで行われる。
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // ヒーロー配列をサービスから取得。
  // その時、コールバック（Subscribe）で設定する。
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroz =>
      this.heroes = heroz);
  }

}
