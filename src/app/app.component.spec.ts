import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SerieLisComponent } from './serie/serie-lis/serie-lis.component';

describe('AppComponent', () => {
 beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [RouterTestingModule, HttpClientModule],
     declarations: [AppComponent, SerieLisComponent],
   }).compileComponents();
 });

 it('should create the app', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app).toBeTruthy();
 });

 it(`should have as title 'TVSeries'`, () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.title).toEqual('TvSeries');
 });

});