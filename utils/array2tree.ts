/**
 * @author mango
 * @description 数组转树方法
 */

import { isNil, merge } from 'lodash-es';

import type { Nil } from '@utils/types';
import type { ExtractKey } from '@utils/types.utility';

export type TreeNode<T> = {
  children: TreeNode<T>[]
} & T;

export interface FieldsName<T> {
  _id: ExtractKey<T, string>
  _parentId: ExtractKey<T, string | Nil>
}

export interface Params<T> {
  names?: Partial<FieldsName<T>>
}

export default function array2tree<T extends object = object>(source: T[], params?: Params<T>) {
  type CurTreeNode = TreeNode<T>;

  const { names } = params ?? {};

  const { _id, _parentId } = merge({
    _id: 'id',
    _parentId: 'parentId',
  }, names) as FieldsName<T>;

  const tree: CurTreeNode[] = [];

  const map = new Map<string, CurTreeNode>();

  const temp = new Map<string, CurTreeNode[]>();

  for (const iterator of source) {
    const id = iterator[_id] as string;
    const parentId = iterator[_parentId] as string;

    const children = temp.get(id) ?? [];
    const current: CurTreeNode = { ...iterator, children };

    map.set(id, current);

    if (isNil(parentId)) {
      tree.push(current);
      continue;
    }

    const parent = map.get(parentId);

    if (isNil(parent)) {
      const temporary = temp.get(parentId);

      if (isNil(temporary)) {
        temp.set(parentId, [current]);
        continue;
      }

      temporary.push(current);
      continue;
    }

    parent.children.push(current);
  }

  return tree;
}
