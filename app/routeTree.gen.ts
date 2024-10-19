/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as InvitationsIndexImport } from './routes/invitations/index'
import { Route as InvitationsAddImport } from './routes/invitations/add'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const InvitationsIndexRoute = InvitationsIndexImport.update({
  path: '/invitations/',
  getParentRoute: () => rootRoute,
} as any)

const InvitationsAddRoute = InvitationsAddImport.update({
  path: '/invitations/add',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/invitations/add': {
      id: '/invitations/add'
      path: '/invitations/add'
      fullPath: '/invitations/add'
      preLoaderRoute: typeof InvitationsAddImport
      parentRoute: typeof rootRoute
    }
    '/invitations/': {
      id: '/invitations/'
      path: '/invitations'
      fullPath: '/invitations'
      preLoaderRoute: typeof InvitationsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/invitations/add': typeof InvitationsAddRoute
  '/invitations': typeof InvitationsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/invitations/add': typeof InvitationsAddRoute
  '/invitations': typeof InvitationsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/invitations/add': typeof InvitationsAddRoute
  '/invitations/': typeof InvitationsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/invitations/add' | '/invitations'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/invitations/add' | '/invitations'
  id: '__root__' | '/' | '/invitations/add' | '/invitations/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  InvitationsAddRoute: typeof InvitationsAddRoute
  InvitationsIndexRoute: typeof InvitationsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  InvitationsAddRoute: InvitationsAddRoute,
  InvitationsIndexRoute: InvitationsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/invitations/add",
        "/invitations/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/invitations/add": {
      "filePath": "invitations/add.tsx"
    },
    "/invitations/": {
      "filePath": "invitations/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
