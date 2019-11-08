import columnFactory from '../column.factory';

describe('columnFactory', () => {
  it('create works', () => {
    const column = columnFactory.create({ title: 'column', tasks: [] });

    expect(column).toBeDefined();
    expect(column).not.toBeNull();
    expect(column.title).toBe('column');
    expect(column.tasks).toStrictEqual([]);

    expect(column.hasOwnProperty('id')).toBe(true);
    expect(column.hasOwnProperty('createdAt')).toBe(true);
    expect(column.hasOwnProperty('updatedAt')).toBe(true);
    expect(column.id.length === 36).toBe(true);
    expect(typeof column.id === 'string').toBe(true);
    expect(typeof column.createdAt === 'string').toBe(true);
    expect(typeof column.updatedAt === 'string').toBe(true);
  });
});
