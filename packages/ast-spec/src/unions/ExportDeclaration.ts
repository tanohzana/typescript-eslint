import type { ClassExpression } from '../expression/ClassExpression/spec';
import type { ClassDeclaration } from '../statement/ClassDeclaration/spec';
import type { FunctionDeclaration } from '../statement/FunctionDeclaration/spec';
import type { TSDeclareFunction } from '../statement/TSDeclareFunction/spec';
import type { TSEnumDeclaration } from '../statement/TSEnumDeclaration/spec';
import type { TSInterfaceDeclaration } from '../statement/TSInterfaceDeclaration/spec';
import type { TSModuleDeclaration } from '../statement/TSModuleDeclaration/spec';
import type { TSTypeAliasDeclaration } from '../statement/TSTypeAliasDeclaration/spec';
import type { VariableDeclaration } from '../statement/VariableDeclaration/spec';

export type ExportDeclaration =
  | ClassDeclaration
  | ClassExpression
  | FunctionDeclaration
  | TSDeclareFunction
  | TSEnumDeclaration
  | TSInterfaceDeclaration
  | TSModuleDeclaration
  | TSTypeAliasDeclaration
  | VariableDeclaration;
