import collectionItemFactory from '../collectionItem.factory';

describe('collectionItemFactory', () => {
  it('create works', () => {
    const collectionItem = collectionItemFactory.create();

    expect(collectionItem).toBeDefined();
    expect(collectionItem).not.toBeNull();
    expect(collectionItem.hasOwnProperty('id')).toBe(true);
    expect(collectionItem.hasOwnProperty('createdAt')).toBe(true);
    expect(collectionItem.hasOwnProperty('updatedAt')).toBe(true);
    expect(collectionItem.id.length === 36).toBe(true);
    expect(typeof collectionItem.id === 'string').toBe(true);
    expect(typeof collectionItem.createdAt === 'string').toBe(true);
    expect(typeof collectionItem.updatedAt === 'string').toBe(true);
  });

  it('update works', () => {
    const collectionItem = collectionItemFactory.update({
      id: 'bde3000b-6837-4dff-94e0-c1decf5b773d',
      testKey: 'test key',
      createdAt: '2012-09-12 15:17:12',
      updatedAt: '2012-09-12 15:17:12',
    });

    expect(collectionItem).toBeDefined();
    expect(collectionItem).not.toBeNull();
    expect(collectionItem.hasOwnProperty('id')).toBe(true);
    expect(collectionItem.hasOwnProperty('testKey')).toBe(true);
    expect(collectionItem.hasOwnProperty('createdAt')).toBe(true);
    expect(collectionItem.hasOwnProperty('updatedAt')).toBe(true);
    expect(typeof collectionItem.updatedAt === 'string').toBe(true);
    expect(collectionItem.id).toBe('bde3000b-6837-4dff-94e0-c1decf5b773d');
    expect(collectionItem.testKey).toBe('test key');
    expect(collectionItem.createdAt).toBe('2012-09-12 15:17:12');
    expect(collectionItem.updatedAt).not.toBe('2012-09-12 15:17:12');
  });
});
