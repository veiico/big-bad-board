import taskFactory from '../task.factory';

describe('taskFactory', () => {
  it('create works', () => {
    const task = taskFactory.create({ title: 'task' });

    expect(task).toBeDefined();
    expect(task).not.toBeNull();
    expect(task.title).toBe('task');

    expect(task.hasOwnProperty('id')).toBe(true);
    expect(task.hasOwnProperty('createdAt')).toBe(true);
    expect(task.hasOwnProperty('updatedAt')).toBe(true);
    expect(task.id.length === 36).toBe(true);
    expect(typeof task.id === 'string').toBe(true);
    expect(typeof task.createdAt === 'string').toBe(true);
    expect(typeof task.updatedAt === 'string').toBe(true);
  });
});
