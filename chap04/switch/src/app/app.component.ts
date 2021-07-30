import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <form>
      <select name="season" [(ngModel)]="season">
      <option value="">四季を選択</option>
      <option value="spring">春</option>
      <option value="summer">夏</option>
      <option value="autumn">秋</option>
      <option value="winter">冬</option>
      </select>
    </form>
    <div [ngSwitch]="season">
      <span *ngSwitchCase="'spring'">春はあけぼの。
やうやう白くなりゆく山際、少しあかりて、紫だちたる雲の細くたなびきたる。</span>
      <span *ngSwitchCase="'summer'">夏は夜。
月の頃はさらなり。闇もなほ、蛍のおほく飛びちがひたる。また、ただ一つ二つなど、ほのかにうち光りて行くもをかし。雨など降るもをかし。</span>
      <span *ngSwitchCase="'autumn'">秋は夕暮れ。
夕日のさして山の端いと近うなりたるに、烏の、寝どころへ行くとて、三つ四つ、二つ三つなど飛び急ぐさへあはれなり。まいて、雁などのつらねたるが、いと小さく見ゆるは、いとをかし。日入り果てて、風の音、虫の音など、はた言ふべきにあらず。</span>
      <span *ngSwitchCase="'winter'">冬はつとめて。
雪の降りたるは言ふべきにもあらず、霜のいと白きも、またさらでもいと寒きに、火など急ぎおこして、炭持てわたるも、いとつきづきし。昼になりて、ぬるくゆるびもていけば、火桶の火も、白い灰がちになりてわろし。</span>
      <span *ngSwitchDefault>選択してください</span>
    </div>`
})
export class AppComponent  {
  season = '';
}
