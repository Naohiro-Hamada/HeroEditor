/* tslint:disable:no-unused-variable */
import { ContactComponent } from './contact.component';

import { async, inject } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { By } from '@angular/platform-browser';

////////  SPECS  /////////////
describe('ContactComponent', () => {
  beforeEach(() => {
    // テスト用モジュールのセットアップ
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [FormsModule],
      providers: []
    });
  });

  it('component test', async(() => {
    let fixture = TestBed.createComponent(ContactComponent);
    fixture.whenStable().then(() => {
      console.log(fixture.componentRef);
      let inputBox = fixture.debugElement.query(By.css('input')).nativeElement;
      console.log(inputBox.value);
      expect(inputBox.value).toEqual('Original Name');
    });
  }));
});