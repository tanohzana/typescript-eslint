import type { JSXEmptyExpression } from '../special/JSXEmptyExpression/spec';
import type { JSXExpressionContainer } from '../special/JSXExpressionContainer/spec';
import type { JSXSpreadChild } from '../special/JSXSpreadChild/spec';

export type JSXExpression =
  | JSXEmptyExpression
  | JSXExpressionContainer
  | JSXSpreadChild;
