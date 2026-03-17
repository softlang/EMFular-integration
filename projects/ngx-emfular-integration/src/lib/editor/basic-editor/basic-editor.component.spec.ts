import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditorComponent } from './basic-editor.component';

describe('BasicEditorComponent', () => {
  let component: BasicEditorComponent;
  let fixture: ComponentFixture<BasicEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
