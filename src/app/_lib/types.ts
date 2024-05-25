import { ElementType } from "react";

export type KeyValueType<T> = {
  [key: string | number]: T;
};

export type UserType = {
  uid?: number | undefined;
  name?: string | undefined | null;
  email?: string | undefined | null;
  image?: string | undefined | null;
  groupId?: number | undefined;
  uuid?: string | undefined;
  key?: string | undefined;
};

export type GroupType = {
  id: number;
  name: string;
  order: number;
  slug: string;
  parentId: number | null;
  communityId: number;
};

export type UserItemType =  {
  group: number;
  name: string;
  email: string;
  image?: string | undefined | null;
  unreadMessageCount?: number | undefined | null;
  lastMessageContent?: string | undefined | null;
  lastMessageReceivedAt?: Date | undefined | null;
};

export type NavItemType = {
  name?: string;
  type: 'ITEM' | 'SPLITTER' | 'NEW_COMMUNITY' | 'WORKGROUP' | 'FAVORATE' | 'PROFILE';
  icon?: ElementType | null;
  link?: string | null;
  action?: Function;
  isLoadingChildren?: boolean;
  children?: NavItemType[];
};
