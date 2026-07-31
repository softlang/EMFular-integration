import { describe, it, expect } from 'vitest';
import { IdHelper } from './id-helper';

describe('IdHelper', () => {
  it('should create an instance', () => {
    expect(new IdHelper()).toBeTruthy();
  });
});
