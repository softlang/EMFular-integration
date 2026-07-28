import { vi } from 'vitest';

export class HistoryServiceStub {
    undo = vi.fn();
    redo = vi.fn();
    isUndoNotPossible = () => false;
    isRedoNotPossible = () => false;
}
