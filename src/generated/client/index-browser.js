
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  image: 'image',
  positionId: 'positionId',
  groupId: 'groupId'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.PositionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  power: 'power'
};

exports.Prisma.GroupScalarFieldEnum = {
  id: 'id',
  order: 'order',
  slug: 'slug',
  name: 'name',
  parentId: 'parentId',
  communityId: 'communityId'
};

exports.Prisma.CommunityScalarFieldEnum = {
  id: 'id',
  isPrivate: 'isPrivate',
  isPublicRead: 'isPublicRead',
  isPublicWrite: 'isPublicWrite',
  category: 'category',
  slug: 'slug',
  name: 'name',
  latestPostDate: 'latestPostDate',
  managerId: 'managerId'
};

exports.Prisma.PostScalarFieldEnum = {
  id: 'id',
  title: 'title',
  text: 'text',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  communityId: 'communityId',
  userId: 'userId',
  commentCnt: 'commentCnt'
};

exports.Prisma.PostLargTextScalarFieldEnum = {
  id: 'id',
  text: 'text',
  postId: 'postId'
};

exports.Prisma.PostCommentScalarFieldEnum = {
  id: 'id',
  comment: 'comment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  postId: 'postId',
  userId: 'userId'
};

exports.Prisma.PostCommentLargTextScalarFieldEnum = {
  id: 'id',
  text: 'text',
  postCommentId: 'postCommentId'
};

exports.Prisma.ChatRoomScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt'
};

exports.Prisma.ChatCommentScalarFieldEnum = {
  id: 'id',
  comment: 'comment',
  createdAt: 'createdAt',
  roomId: 'roomId',
  userId: 'userId',
  metaId: 'metaId'
};

exports.Prisma.ChatCommentLargTextScalarFieldEnum = {
  id: 'id',
  text: 'text',
  chatCommentId: 'chatCommentId'
};

exports.Prisma.MetaDataScalarFieldEnum = {
  id: 'id',
  url: 'url',
  type: 'type',
  title: 'title',
  description: 'description',
  image: 'image',
  imageAlt: 'imageAlt',
  video: 'video'
};

exports.Prisma.LogAccessScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  ip: 'ip',
  agent: 'agent',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.CommunityCategory = exports.$Enums.CommunityCategory = {
  WORK: 'WORK',
  PROJECT: 'PROJECT',
  CLUB: 'CLUB'
};

exports.Prisma.ModelName = {
  User: 'User',
  Position: 'Position',
  Group: 'Group',
  Community: 'Community',
  Post: 'Post',
  PostLargText: 'PostLargText',
  PostComment: 'PostComment',
  PostCommentLargText: 'PostCommentLargText',
  ChatRoom: 'ChatRoom',
  ChatComment: 'ChatComment',
  ChatCommentLargText: 'ChatCommentLargText',
  MetaData: 'MetaData',
  LogAccess: 'LogAccess'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
