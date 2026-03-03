export class HistoryServiceStub {
    undo = jasmine.createSpy('undo');
    redo = jasmine.createSpy('redo');
    isUndoNotPossible = () => false;
    isRedoNotPossible = () => false;
}
