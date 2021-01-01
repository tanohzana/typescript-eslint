import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { JSXClosingFragment } from '../../special/JSXClosingFragment/spec';
import type { JSXOpeningFragment } from '../../special/JSXOpeningFragment/spec';
import type { JSXChild } from '../../unions/JSXChild';

export interface JSXFragment extends BaseNode {
  type: AST_NODE_TYPES.JSXFragment;
  openingFragment: JSXOpeningFragment;
  closingFragment: JSXClosingFragment;
  children: JSXChild[];
}
