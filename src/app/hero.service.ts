import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from "./mock-heroes";
import { MessageService } from './message.service';

// サーバー通信は非同期であるべき。
import { Observable, of } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

//このサービスは、ヒーローデータを色々と処理するサービスクラス。
//このクラスにより、herosコンポーネントやhero-detailコンポーネントなどが
//データの受け渡に専念することができる。
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private msgService: MessageService
  ) { }

  //Observable実装
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes.
    this.msgService.add('HeroService: fetched heroes.')
    return of(HEROES);
  }
}
