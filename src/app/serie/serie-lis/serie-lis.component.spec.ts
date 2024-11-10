/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { SerieLisComponent } from './serie-lis.component';
import { HttpClientModule } from '@angular/common/http';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

describe('SerieListComponent', () => {
 let component: SerieLisComponent;
 let fixture: ComponentFixture<SerieLisComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ SerieLisComponent ],
     providers: [ SerieService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(SerieLisComponent);
   component = fixture.componentInstance;


   for(let i = 0; i < 6; i++) {
     const serie = new Serie(
       faker.number.int(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.number.int()
       );
     component.series.push(serie);
   }
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have h5 tag with the serie.name', () => {
   debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
     expect(h5.nativeElement.textContent).toContain(component.series[i].name)
   });
 });

 it('should have p tag with the serie.editorial.name', () => {
   debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
     expect(p.nativeElement.textContent).toContain(component.series[i].name)
   });
 });


});