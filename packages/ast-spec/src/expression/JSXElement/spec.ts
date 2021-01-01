import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { JSXClosingElement } from '../../special/JSXClosingElement/spec';
import type { JSXOpeningElement } from '../../special/JSXOpeningElement/spec';
import type { JSXChild } from '../../unions/JSXChild';

export interface JSXElement extends BaseNode {
  type: AST_NODE_TYPES.JSXElement;
  openingElement: JSXOpeningElement;
  closingElement: JSXClosingElement | null;
  children: JSXChild[];
}
