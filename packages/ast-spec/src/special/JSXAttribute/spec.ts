import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { JSXExpression } from '../../unions/JSXExpression';
import type { Literal } from '../../unions/Literal';
import type { JSXIdentifier } from '../JSXIdentifier/spec';

export interface JSXAttribute extends BaseNode {
  type: AST_NODE_TYPES.JSXAttribute;
  name: JSXIdentifier;
  value: JSXExpression | Literal | null;
}
