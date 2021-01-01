import type { ClassExpression } from '../expression/ClassExpression/spec';
import type { ClassDeclaration } from '../statement/ClassDeclaration/spec';
import type { ExportAllDeclaration } from '../statement/ExportAllDeclaration/spec';
import type { ExportDefaultDeclaration } from '../statement/ExportDefaultDeclaration/spec';
import type { ExportNamedDeclaration } from '../statement/ExportNamedDeclaration/spec';
import type { FunctionDeclaration } from '../statement/FunctionDeclaration/spec';
import type { TSDeclareFunction } from '../statement/TSDeclareFunction/spec';
import type { TSEnumDeclaration } from '../statement/TSEnumDeclaration/spec';
import type { TSImportEqualsDeclaration } from '../statement/TSImportEqualsDeclaration/spec';
import type { TSInterfaceDeclaration } from '../statement/TSInterfaceDeclaration/spec';
import type { TSModuleDeclaration } from '../statement/TSModuleDeclaration/spec';
import type { TSNamespaceExportDeclaration } from '../statement/TSNamespaceExportDeclaration/spec';
import type { TSTypeAliasDeclaration } from '../statement/TSTypeAliasDeclaration/spec';

// TODO - breaking change remove this
export type DeclarationStatement =
  | ClassDeclaration
  | ClassExpression
  | ExportAllDeclaration
  | ExportDefaultDeclaration
  | ExportNamedDeclaration
  | FunctionDeclaration
  | TSDeclareFunction
  | TSEnumDeclaration
  | TSImportEqualsDeclaration
  | TSInterfaceDeclaration
  | TSModuleDeclaration
  | TSNamespaceExportDeclaration
  | TSTypeAliasDeclaration;
