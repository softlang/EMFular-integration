import { HistoryServiceStub } from './history-service-stub';

export class ModelServiceStub<M> {
    historyService = new HistoryServiceStub();
    save = jasmine.createSpy('save');
    fileTitle = () => 'dummy';
}
