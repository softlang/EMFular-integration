import { HistoryServiceStub } from './history-service-stub';
import { vi } from 'vitest';

export class ModelServiceStub<M> {
    historyService = new HistoryServiceStub();
    save = vi.fn();
    fileTitle = () => 'dummy';
}