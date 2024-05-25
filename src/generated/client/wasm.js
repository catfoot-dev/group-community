
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/devgiantcat/Documents/Projects/yaong-ware/src/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "relationJoins"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"driverAdapters\", \"relationJoins\"]\n  output          = \"../src/generated/client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id            Int       @id @default(autoincrement())\n  name          String    @db.VarChar(32)\n  email         String    @unique @db.VarChar(255)\n  image         String    @db.VarChar(255)\n\n  positionId    Int\n  position      Position  @relation(fields: [positionId], references: [id])\n\n  groupId       Int?\n  group         Group?    @relation(fields: [groupId], references: [id])\n\n  posts         Post[]\n  postComments  PostComment[]\n\n  communities   Community[]\n  managedCommunities Community[] @relation(\"CommunityManager\")\n\n  chatRooms     ChatRoom[]\n  chatCommets   ChatComment[]\n\n  access        LogAccess[]\n}\n\nmodel Position {\n  id            Int       @id @default(autoincrement())\n  name          String    @db.VarChar(32)\n  power         Int\n\n  users         User[]\n}\n\nmodel Group {\n  id            Int       @id @default(autoincrement())\n  order         Int\n  slug          String    @db.VarChar(32) @unique()\n  name          String    @db.VarChar(32)\n\n  parentId      Int?\n  parent        Group?    @relation(\"GroupParentChildren\", fields: [parentId], references: [id])\n  children      Group[]   @relation(\"GroupParentChildren\")\n\n  users         User[]\n\n  communityId   Int       @unique\n  community     Community @relation(fields: [communityId], references: [id])\n}\n\nenum CommunityCategory {\n  WORK\n  PROJECT\n  CLUB\n}\n\nmodel Community {\n  id              Int               @id @default(autoincrement())\n  isPrivate       Boolean           @default(false)\n  isPublicRead    Boolean           @default(false)\n  isPublicWrite   Boolean           @default(false)\n  category        CommunityCategory @default(WORK)\n  slug            String            @db.VarChar(32) @unique()\n  name            String            @db.VarChar(32)\n  latestPostDate  DateTime?\n\n  group           Group?\n\n  posts           Post[]\n\n  managerId       Int?\n  manager         User?             @relation(\"CommunityManager\", fields: [managerId], references: [id])\n\n  users           User[]\n}\n\nmodel Post {\n  id            Int       @id @default(autoincrement())\n  title         String    @db.VarChar(100)\n  text          String    @db.VarChar(255)\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n\n  largeText     PostLargText?\n\n  communityId   Int\n  community     Community @relation(fields: [communityId], references: [id])\n\n  userId        Int\n  user          User      @relation(fields: [userId], references: [id])\n\n  meta          MetaData[]\n\n  commentCnt    Int\n  comments      PostComment[]\n\n  @@index(createdAt(sort: Desc))\n  @@index(communityId)\n  @@index(userId)\n}\n\nmodel PostLargText {\n  id            Int       @id @default(autoincrement())\n  text          String    @db.Text()\n\n  postId        Int       @unique\n  post          Post      @relation(fields: [postId], references: [id])\n}\n\nmodel PostComment {\n  id            Int       @id @default(autoincrement())\n  comment       String    @db.VarChar(255)\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n\n  largeComment  PostCommentLargText?\n\n  postId        Int\n  post          Post      @relation(fields: [postId], references: [id])\n\n  userId        Int\n  user          User      @relation(fields: [userId], references: [id])\n\n  @@index([postId, createdAt(sord: Desc)])\n  @@index([userId, createdAt(sord: Desc)])\n}\n\nmodel PostCommentLargText {\n  id            Int       @id @default(autoincrement())\n  text          String    @db.Text()\n\n  postCommentId Int       @unique\n  postComment PostComment @relation(fields: [postCommentId], references: [id])\n}\n\nmodel ChatRoom {\n  id            Int       @id @default(autoincrement())\n  createdAt     DateTime  @default(now())\n\n  user          User[]\n\n  comments      ChatComment[]\n}\n\nmodel ChatComment {\n  id            Int       @id @default(autoincrement())\n  comment       String    @db.VarChar(255)\n  createdAt     DateTime  @default(now())\n\n  largeComment  ChatCommentLargText?\n\n  roomId        Int\n  room          ChatRoom  @relation(fields: [roomId], references: [id])\n\n  userId        Int\n  user          User      @relation(fields: [userId], references: [id])\n\n  metaId        Int?\n  meta          MetaData? @relation(fields: [metaId], references: [id])\n}\n\nmodel ChatCommentLargText {\n  id            Int       @id @default(autoincrement())\n  text          String    @db.Text()\n\n  chatCommentId Int       @unique\n  chatComment ChatComment @relation(fields: [chatCommentId], references: [id])\n}\n\nmodel MetaData {\n  id            Int       @id @default(autoincrement())\n  url           String    @unique @db.VarChar(255)\n  type          String    @db.VarChar(32)\n  title         String    @db.VarChar(32)\n  description   String    @db.VarChar(100)\n  image         String?   @db.VarChar(255)\n  imageAlt      String?   @db.VarChar(255)\n  video         String?   @db.VarChar(255)\n\n  posts         Post[]\n  comments      ChatComment[]\n}\n\nmodel LogAccess {\n  id            Int       @id @default(autoincrement())\n  uuid          String    @unique @db.VarChar(64)\n  ip            String    @db.VarChar(16)\n  agent         String    @db.VarChar(100)\n  updatedAt     DateTime  @updatedAt\n\n  userId        Int\n  user          User      @relation(fields: [userId], references: [id])\n}\n",
  "inlineSchemaHash": "6f74af439f08fedd5b915b81e0ff832867aa5e2c5abf5a968b53eb4ff884e20d",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"positionId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"position\",\"kind\":\"object\",\"type\":\"Position\",\"relationName\":\"PositionToUser\"},{\"name\":\"groupId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"group\",\"kind\":\"object\",\"type\":\"Group\",\"relationName\":\"GroupToUser\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToUser\"},{\"name\":\"postComments\",\"kind\":\"object\",\"type\":\"PostComment\",\"relationName\":\"PostCommentToUser\"},{\"name\":\"communities\",\"kind\":\"object\",\"type\":\"Community\",\"relationName\":\"CommunityToUser\"},{\"name\":\"managedCommunities\",\"kind\":\"object\",\"type\":\"Community\",\"relationName\":\"CommunityManager\"},{\"name\":\"chatRooms\",\"kind\":\"object\",\"type\":\"ChatRoom\",\"relationName\":\"ChatRoomToUser\"},{\"name\":\"chatCommets\",\"kind\":\"object\",\"type\":\"ChatComment\",\"relationName\":\"ChatCommentToUser\"},{\"name\":\"access\",\"kind\":\"object\",\"type\":\"LogAccess\",\"relationName\":\"LogAccessToUser\"}],\"dbName\":null},\"Position\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"power\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PositionToUser\"}],\"dbName\":null},\"Group\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Group\",\"relationName\":\"GroupParentChildren\"},{\"name\":\"children\",\"kind\":\"object\",\"type\":\"Group\",\"relationName\":\"GroupParentChildren\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"GroupToUser\"},{\"name\":\"communityId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"community\",\"kind\":\"object\",\"type\":\"Community\",\"relationName\":\"CommunityToGroup\"}],\"dbName\":null},\"Community\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"isPrivate\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"isPublicRead\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"isPublicWrite\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"category\",\"kind\":\"enum\",\"type\":\"CommunityCategory\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"latestPostDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"group\",\"kind\":\"object\",\"type\":\"Group\",\"relationName\":\"CommunityToGroup\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"CommunityToPost\"},{\"name\":\"managerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"manager\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CommunityManager\"},{\"name\":\"users\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CommunityToUser\"}],\"dbName\":null},\"Post\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"largeText\",\"kind\":\"object\",\"type\":\"PostLargText\",\"relationName\":\"PostToPostLargText\"},{\"name\":\"communityId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"community\",\"kind\":\"object\",\"type\":\"Community\",\"relationName\":\"CommunityToPost\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PostToUser\"},{\"name\":\"meta\",\"kind\":\"object\",\"type\":\"MetaData\",\"relationName\":\"MetaDataToPost\"},{\"name\":\"commentCnt\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"PostComment\",\"relationName\":\"PostToPostComment\"}],\"dbName\":null},\"PostLargText\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"post\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToPostLargText\"}],\"dbName\":null},\"PostComment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"largeComment\",\"kind\":\"object\",\"type\":\"PostCommentLargText\",\"relationName\":\"PostCommentToPostCommentLargText\"},{\"name\":\"postId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"post\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"PostToPostComment\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PostCommentToUser\"}],\"dbName\":null},\"PostCommentLargText\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"postCommentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"postComment\",\"kind\":\"object\",\"type\":\"PostComment\",\"relationName\":\"PostCommentToPostCommentLargText\"}],\"dbName\":null},\"ChatRoom\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ChatRoomToUser\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"ChatComment\",\"relationName\":\"ChatCommentToChatRoom\"}],\"dbName\":null},\"ChatComment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"largeComment\",\"kind\":\"object\",\"type\":\"ChatCommentLargText\",\"relationName\":\"ChatCommentToChatCommentLargText\"},{\"name\":\"roomId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"room\",\"kind\":\"object\",\"type\":\"ChatRoom\",\"relationName\":\"ChatCommentToChatRoom\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ChatCommentToUser\"},{\"name\":\"metaId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"meta\",\"kind\":\"object\",\"type\":\"MetaData\",\"relationName\":\"ChatCommentToMetaData\"}],\"dbName\":null},\"ChatCommentLargText\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"text\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"chatCommentId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"chatComment\",\"kind\":\"object\",\"type\":\"ChatComment\",\"relationName\":\"ChatCommentToChatCommentLargText\"}],\"dbName\":null},\"MetaData\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"url\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"imageAlt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"video\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"Post\",\"relationName\":\"MetaDataToPost\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"ChatComment\",\"relationName\":\"ChatCommentToMetaData\"}],\"dbName\":null},\"LogAccess\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"uuid\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ip\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"agent\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"LogAccessToUser\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    return (await import('#wasm-engine-loader')).default
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

