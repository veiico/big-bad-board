import { datesFactory } from '../dates.factory';

describe('datesFactory', () => {
  it('format exists', () => {
    expect(datesFactory.format).toBeDefined();
    expect(datesFactory.format).not.toBeNull();
    expect(typeof datesFactory.format === 'string').toBe(true);
    expect(datesFactory.format.length > 1).toBe(true);
  });

  it('getFormattedDate works', () => {
    const date = datesFactory.getFormattedDate();

    expect(date).toBeDefined();
    expect(date).not.toBeNull();
    expect(typeof date === 'string').toBe(true);
    expect(date.length > 1).toBe(true);
    expect(date.length === datesFactory.format.length).toBe(true);
  });

  it('getCreationDate works', () => {
    const date = datesFactory.getCreationDate();

    expect(date).toBeDefined();
    expect(date).not.toBeNull();
    expect(date.hasOwnProperty('createdAt')).toBe(true);
    expect(typeof date.createdAt === 'string').toBe(true);
    expect(date.createdAt.length === datesFactory.format.length).toBe(true);
  });

  it('getUpdateDate works', () => {
    const date = datesFactory.getUpdateDate();

    expect(date).toBeDefined();
    expect(date).not.toBeNull();
    expect(date.hasOwnProperty('updatedAt')).toBe(true);
    expect(typeof date.updatedAt === 'string').toBe(true);
    expect(date.updatedAt.length === datesFactory.format.length).toBe(true);
  });

  it('getManipulationDates works', () => {
    const date = datesFactory.getManipulationDates();

    expect(date).toBeDefined();
    expect(date).not.toBeNull();
    expect(date.hasOwnProperty('createdAt')).toBe(true);
    expect(date.hasOwnProperty('updatedAt')).toBe(true);
    expect(typeof date.createdAt === 'string').toBe(true);
    expect(typeof date.updatedAt === 'string').toBe(true);
    expect(date.createdAt.length === datesFactory.format.length).toBe(true);
    expect(date.updatedAt.length === datesFactory.format.length).toBe(true);
  });
});
