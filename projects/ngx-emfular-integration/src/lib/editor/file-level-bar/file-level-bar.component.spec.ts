import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileLevelBarComponent } from './file-level-bar.component';
import { DummyReferencable } from '../../test/dummy-referencable';

class HistoryStub {
  undo = jasmine.createSpy('undo');
  redo = jasmine.createSpy('redo');
  isUndoNotPossible = () => false;
  isRedoNotPossible = () => false;
}

class ModelServiceStub<M> {
  historyService = new HistoryStub();
  save = jasmine.createSpy('save');
  fileTitle = () => 'dummy';
}

describe('FileLevelBarComponent', () => {
  let component: FileLevelBarComponent<DummyReferencable>;
  let fixture: ComponentFixture<FileLevelBarComponent<DummyReferencable>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileLevelBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FileLevelBarComponent<DummyReferencable>);
    component = fixture.componentInstance;

    component.modelService = new ModelServiceStub<DummyReferencable>() as any;
    component.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
