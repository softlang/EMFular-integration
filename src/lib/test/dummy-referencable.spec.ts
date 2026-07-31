import { describe, it, expect } from 'vitest';
import { DummyReferencable } from './dummy-referencable';

describe('DummyReferencable', () => {
  it('should create an instance', () => {
    expect(new DummyReferencable()).toBeTruthy();
  });
});
