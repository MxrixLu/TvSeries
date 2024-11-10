import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-lis',
  templateUrl: './serie-lis.component.html',
})
export class SerieLisComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }


  promedioSeasons: number = 0;

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
      this.promedioSeasons = totalSeasons / this.series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

}
