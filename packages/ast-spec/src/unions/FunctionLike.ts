import type { ArrowFunctionExpression } from '../expression/ArrowFunctionExpression/spec';
import type { FunctionExpression } from '../expression/FunctionExpression/spec';
import type { TSEmptyBodyFunctionExpression } from '../expression/TSEmptyBodyFunctionExpression/spec';
import type { FunctionDeclaration } from '../statement/FunctionDeclaration/spec';
import type { TSDeclareFunction } from '../statement/TSDeclareFunction/spec';

export type FunctionLike =
  | ArrowFunctionExpression
  | FunctionDeclaration
  | FunctionExpression
  | TSDeclareFunction
  | TSEmptyBodyFunctionExpression;
