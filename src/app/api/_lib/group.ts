import { Group } from '@/generated/client';
import prisma from '@/app/_lib/db';

const groups: {
  updatedAt: number | null;
  items: { [id: number]: Group };
} = {
  updatedAt: null,
  items: {},
};

export async function updateList(isForce = false): Promise<void> {
  if (isForce || !groups.updatedAt || groups.updatedAt < Date.now() - 10000) {
    const list = await prisma.group.findMany();
    for (const group of list) {
      groups.items[group.id] = group;
    }
    groups.updatedAt = Date.now();
  }
}

export async function getGroupList(): Promise<Group[]> {
  await updateList();
  return Object.values(groups.items);
}

export async function getGroupWithParents(groupId: number): Promise<Group[]> {
  await updateList();
  const list: Group[] = [];
  function getGroup(groupId: number) {
    const item = groups.items[groupId];
    if (item) {
      list.push(item);
      if (item.parentId) {
        getGroup(item.parentId);
      }
    }
  }
  getGroup(groupId);
  return list;
}
