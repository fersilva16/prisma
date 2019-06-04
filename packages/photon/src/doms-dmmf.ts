import { DMMF } from './runtime'
import { ExternalDMMF } from './runtime/dmmf-types'

export const domsDmmf: ExternalDMMF.Document = {
  datamodel: {
    enums: [
      {
        name: 'ENUM',
        values: ['A', 'B', 'C'],
        dbName: null,
      },
    ],
    models: [
      {
        name: 'Blog',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            type: 'Int',
            isGenerated: false,
          },
          {
            name: 'name',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            type: 'String',
            isGenerated: false,
          },
          {
            name: 'viewCount',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            type: 'Int',
            isGenerated: false,
          },
          {
            name: 'posts',
            kind: 'relation',
            dbName: null,
            isList: true,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'Post',
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
          },
          {
            name: 'authors',
            kind: 'relation',
            dbName: null,
            isList: true,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'Author',
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
          },
        ],
      },
      {
        name: 'Author',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            type: 'Int',
            isGenerated: false,
          },
          {
            name: 'name',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'String',
            isGenerated: false,
          },
          {
            name: 'authors',
            kind: 'relation',
            dbName: null,
            isList: true,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'Blog',
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
          },
        ],
      },
      {
        name: 'Post',
        isEmbedded: false,
        dbName: null,
        fields: [
          {
            name: 'id',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: true,
            type: 'Int',
            isGenerated: false,
          },
          {
            name: 'title',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'String',
            isGenerated: false,
          },
          {
            name: 'anotherText',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            type: 'String',
            isGenerated: false,
          },
          {
            name: 'blog',
            kind: 'relation',
            dbName: null,
            isList: false,
            isRequired: true,
            isUnique: false,
            isId: false,
            type: 'Blog',
            relationToFields: [],
            relationOnDelete: 'NONE',
            isGenerated: false,
          },
          {
            name: 'anotherString',
            kind: 'scalar',
            dbName: null,
            isList: false,
            isRequired: false,
            isUnique: false,
            isId: false,
            type: 'String',
            isGenerated: false,
          },
        ],
      },
    ],
  },
  schema: {
    inputTypes: [
      {
        name: 'PostWhereInput',
        fields: [
          {
            name: 'AND',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'OR',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'NOT',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_not',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_not_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_lt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_lte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_not',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'title_not_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'title_lt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_lte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_gt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_gte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_not_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_not_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'title_not_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_not',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'anotherText_not_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'anotherText_lt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_lte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_gt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_gte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_not_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_not_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText_not_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_not',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'anotherString_not_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'anotherString_lt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_lte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_gt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_gte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_not_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_not_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherString_not_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'blog',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'AuthorWhereInput',
        fields: [
          {
            name: 'AND',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'OR',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'NOT',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_not',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_not_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_lt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_lte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'name_not_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'name_lt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_lte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_gt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_gte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_every',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_some',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_none',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogWhereInput',
        fields: [
          {
            name: 'AND',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'OR',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'NOT',
            inputType: {
              type: 'BlogWhereInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_not',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_not_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'id_lt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_lte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'id_gte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'name_not_in',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'name_lt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_lte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_gt',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_gte',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_contains',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_starts_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'name_not_ends_with',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount_not',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'viewCount_not_in',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'viewCount_lt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount_lte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount_gt',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'viewCount_gte',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'posts_every',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'posts_some',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'posts_none',
            inputType: {
              type: 'PostWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_every',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_some',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors_none',
            inputType: {
              type: 'AuthorWhereInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogWhereUniqueInput',
        fields: [
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'AuthorWhereUniqueInput',
        fields: [
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'PostWhereUniqueInput',
        fields: [
          {
            name: 'id',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'PostCreateWithoutBlogInput',
        fields: [
          {
            name: 'title',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'anotherString',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'PostCreateManyWithoutPostsInput',
        fields: [
          {
            name: 'create',
            inputType: {
              type: 'PostCreateWithoutBlogInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'connect',
            inputType: {
              type: 'PostWhereUniqueInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
        ],
      },
      {
        name: 'AuthorCreateWithoutAuthorsInput',
        fields: [
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'AuthorCreateManyWithoutAuthorsInput',
        fields: [
          {
            name: 'create',
            inputType: {
              type: 'AuthorCreateWithoutAuthorsInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'connect',
            inputType: {
              type: 'AuthorWhereUniqueInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
        ],
      },
      {
        name: 'BlogCreateInput',
        fields: [
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'viewCount',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'posts',
            inputType: {
              type: 'PostCreateManyWithoutPostsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors',
            inputType: {
              type: 'AuthorCreateManyWithoutAuthorsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogCreateWithoutAuthorsInput',
        fields: [
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'viewCount',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'posts',
            inputType: {
              type: 'PostCreateManyWithoutPostsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogCreateManyWithoutAuthorsInput',
        fields: [
          {
            name: 'create',
            inputType: {
              type: 'BlogCreateWithoutAuthorsInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'connect',
            inputType: {
              type: 'BlogWhereUniqueInput',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
        ],
      },
      {
        name: 'AuthorCreateInput',
        fields: [
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors',
            inputType: {
              type: 'BlogCreateManyWithoutAuthorsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogCreateWithoutPostsInput',
        fields: [
          {
            name: 'name',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'viewCount',
            inputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'authors',
            inputType: {
              type: 'AuthorCreateManyWithoutAuthorsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'BlogCreateOneWithoutBlogInput',
        fields: [
          {
            name: 'create',
            inputType: {
              type: 'BlogCreateWithoutPostsInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'connect',
            inputType: {
              type: 'BlogWhereUniqueInput',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'PostCreateInput',
        fields: [
          {
            name: 'title',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'anotherString',
            inputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'blog',
            inputType: {
              type: 'BlogCreateOneWithoutBlogInput',
              kind: 'object',
              isRequired: true,
              isList: false,
            },
          },
        ],
      },
    ],
    outputTypes: [
      {
        name: 'Post',
        fields: [
          {
            name: 'id',
            args: [],
            outputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'title',
            args: [],
            outputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'anotherText',
            args: [],
            outputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'blog',
            args: [],
            outputType: {
              type: 'Blog',
              kind: 'object',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'anotherString',
            args: [],
            outputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'Author',
        fields: [
          {
            name: 'id',
            args: [],
            outputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'name',
            args: [],
            outputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'AuthorWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'AuthorOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Blog',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
        ],
      },
      {
        name: 'Blog',
        fields: [
          {
            name: 'id',
            args: [],
            outputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'name',
            args: [],
            outputType: {
              type: 'String',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'viewCount',
            args: [],
            outputType: {
              type: 'Int',
              kind: 'scalar',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'posts',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'BlogWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'BlogOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Post',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'authors',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'BlogWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'BlogOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Author',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
        ],
      },
      {
        name: 'Query',
        fields: [
          {
            name: 'blogs',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'BlogWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'BlogOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Blog',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'blog',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'BlogWhereUniqueInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Blog',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'authors',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'AuthorWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'AuthorOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Author',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'author',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'AuthorWhereUniqueInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Author',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
          {
            name: 'posts',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'PostWhereInput',
                  kind: 'object',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'orderBy',
                inputType: {
                  type: 'PostOrderByInput',
                  kind: 'enum',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'skip',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'after',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'before',
                inputType: {
                  type: 'String',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'first',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
              {
                name: 'last',
                inputType: {
                  type: 'Int',
                  kind: 'scalar',
                  isRequired: false,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Post',
              kind: 'object',
              isRequired: false,
              isList: true,
            },
          },
          {
            name: 'post',
            args: [
              {
                name: 'where',
                inputType: {
                  type: 'PostWhereUniqueInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Post',
              kind: 'object',
              isRequired: false,
              isList: false,
            },
          },
        ],
      },
      {
        name: 'Mutation',
        fields: [
          {
            name: 'createBlog',
            args: [
              {
                name: 'data',
                inputType: {
                  type: 'BlogCreateInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Blog',
              kind: 'object',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'createAuthor',
            args: [
              {
                name: 'data',
                inputType: {
                  type: 'AuthorCreateInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Author',
              kind: 'object',
              isRequired: true,
              isList: false,
            },
          },
          {
            name: 'createPost',
            args: [
              {
                name: 'data',
                inputType: {
                  type: 'PostCreateInput',
                  kind: 'object',
                  isRequired: true,
                  isList: false,
                },
              },
            ],
            outputType: {
              type: 'Post',
              kind: 'object',
              isRequired: true,
              isList: false,
            },
          },
        ],
      },
    ],
    enums: [
      {
        name: 'BlogOrderByInput',
        values: ['id_ASC', 'id_DESC', 'name_ASC', 'name_DESC', 'viewCount_ASC', 'viewCount_DESC'],
      },
      {
        name: 'AuthorOrderByInput',
        values: ['id_ASC', 'id_DESC', 'name_ASC', 'name_DESC'],
      },
      {
        name: 'PostOrderByInput',
        values: [
          'id_ASC',
          'id_DESC',
          'title_ASC',
          'title_DESC',
          'anotherText_ASC',
          'anotherText_DESC',
          'anotherString_ASC',
          'anotherString_DESC',
        ],
      },
    ],
  },
  mappings: [],
}
