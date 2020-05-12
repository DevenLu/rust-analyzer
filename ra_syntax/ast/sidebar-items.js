initSidebarItems({"enum":[["ArrayExprKind",""],["AssocItem",""],["AttrInput",""],["AttrKind",""],["BinOp",""],["CommentPlacement",""],["CommentShape",""],["Effect",""],["ElseBranch",""],["Expr",""],["ExternItem",""],["FieldDefList",""],["FieldKind",""],["FormatSpecifier",""],["GenericArg",""],["GenericParam",""],["LiteralKind",""],["ModuleItem",""],["NameOrNameRef",""],["NominalDef",""],["Pat",""],["PathSegmentKind",""],["PrefixOp",""],["RangeOp",""],["RecordInnerPat",""],["SelfParamKind",""],["Stmt",""],["StructKind",""],["TypeBoundKind",""],["TypeRef",""],["VisibilityKind",""]],"mod":[["edit","This module contains functions for editing syntax trees. As the trees are immutable, all function here return a fresh copy of the tree, instead of doing an in-place modification."],["make","This module contains free-standing functions for creating AST fragments out of smaller pieces."]],"struct":[["Abi",""],["Alias",""],["ArgList",""],["ArrayExpr",""],["ArrayType",""],["AssocTypeArg",""],["AstChildren","An iterator over `SyntaxNode` children of a particular AST type."],["Attr",""],["AwaitExpr",""],["BinExpr",""],["BindPat",""],["BlockExpr",""],["BoxExpr",""],["BoxPat",""],["BreakExpr",""],["CallExpr",""],["CastExpr",""],["Comment",""],["CommentIter",""],["CommentKind",""],["Condition",""],["ConstArg",""],["ConstDef",""],["ConstParam",""],["ContinueExpr",""],["DotDotPat",""],["DynTraitType",""],["EffectExpr",""],["EnumDef",""],["EnumVariant",""],["EnumVariantList",""],["ExprStmt",""],["ExternBlock",""],["ExternCrateItem",""],["ExternItemList",""],["FieldExpr",""],["FnDef",""],["FnPointerType",""],["ForExpr",""],["ForType",""],["IfExpr",""],["ImplDef",""],["ImplTraitType",""],["IndexExpr",""],["ItemList",""],["Label",""],["LambdaExpr",""],["LetStmt",""],["LifetimeArg",""],["LifetimeParam",""],["Literal",""],["LiteralPat",""],["LoopExpr",""],["MacroCall",""],["MacroDef",""],["MacroItems",""],["MacroPat",""],["MacroStmts",""],["MatchArm",""],["MatchArmList",""],["MatchExpr",""],["MatchGuard",""],["MetaItem",""],["MethodCallExpr",""],["Module",""],["Name",""],["NameRef",""],["NeverType",""],["OrPat",""],["Param",""],["ParamList",""],["ParenExpr",""],["ParenPat",""],["ParenType",""],["Path",""],["PathExpr",""],["PathPat",""],["PathSegment",""],["PathType",""],["PlaceholderPat",""],["PlaceholderType",""],["PointerType",""],["PrefixExpr",""],["QuoteOffsets",""],["RangeExpr",""],["RangePat",""],["RawString",""],["RecordField",""],["RecordFieldDef",""],["RecordFieldDefList",""],["RecordFieldList",""],["RecordFieldPat",""],["RecordFieldPatList",""],["RecordLit",""],["RecordPat",""],["RefExpr",""],["RefPat",""],["ReferenceType",""],["RetType",""],["ReturnExpr",""],["SelfParam",""],["SlicePat",""],["SlicePatComponents",""],["SliceType",""],["SourceFile",""],["StaticDef",""],["String",""],["StructDef",""],["TokenTree",""],["TraitDef",""],["TryExpr",""],["TupleExpr",""],["TupleFieldDef",""],["TupleFieldDefList",""],["TuplePat",""],["TupleStructPat",""],["TupleType",""],["TypeAliasDef",""],["TypeArg",""],["TypeArgList",""],["TypeBound",""],["TypeBoundList",""],["TypeParam",""],["TypeParamList",""],["UnionDef",""],["UseItem",""],["UseTree",""],["UseTreeList",""],["Visibility",""],["WhereClause",""],["WherePred",""],["WhileExpr",""],["Whitespace",""]],"trait":[["ArgListOwner",""],["AstNode","The main trait to go from untyped `SyntaxNode`  to a typed ast. The conversion itself has zero runtime cost: ast and syntax nodes have exactly the same representation: a pointer to the tree root and a pointer to the node itself."],["AstToken","Like `AstNode`, but wraps tokens rather than interior nodes."],["AttrsOwner",""],["DocCommentsOwner",""],["HasFormatSpecifier",""],["HasQuotes",""],["HasStringValue",""],["LoopBodyOwner",""],["ModuleItemOwner",""],["NameOwner",""],["TypeAscriptionOwner",""],["TypeBoundsOwner",""],["TypeParamsOwner",""],["VisibilityOwner",""]]});