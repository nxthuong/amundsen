// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import { PeopleUser } from './User';
import { Badge } from './Badges';

export enum ResourceType {
  table = 'table',
  user = 'user',
  dashboard = 'dashboard',
  query = 'query',
  feature = 'feature',
}

export const DEFAULT_RESOURCE_TYPE = ResourceType.table;

export interface Resource {
  type: ResourceType;
}

export interface ResourceSearchHighlights {
  name: string;
  description: string;
}

export interface TableSearchHighlights extends ResourceSearchHighlights {
  columns: string[];
  column_descriptions: string[];
}

export interface DashboardSearchHighlights extends ResourceSearchHighlights {
  query_names: string[];
  chart_names: string[];
}

export interface DashboardResource extends Resource {
  type: ResourceType.dashboard;
  cluster: string;
  description: string;
  group_name: string;
  group_url: string;
  last_successful_run_timestamp: number;
  name: string;
  product: string;
  uri: string;
  url: string;
  // Bookmark logic is cleaner if all resources can settle on either "key" or "uri"
  key?: string;
  badges?: Badge[];
  highlight?: DashboardSearchHighlights;
}

export interface FeatureResource extends Resource {
  type: ResourceType.feature;
  key: string;
  name: string;
  version: string;
  availability: string[];
  entity: string;
  description: string;
  feature_group: string;
  badges: Badge[];
  highlight?: ResourceSearchHighlights;
}

export interface TableResource extends Resource {
  type: ResourceType.table;
  cluster: string;
  database: string;
  description: string;
  key: string;
  // 'popular_tables' currently does not support 'last_updated_timestamp'
  last_updated_timestamp?: number;
  name: string;
  schema: string;
  schema_description?: string;
  badges?: Badge[];
  highlight?: TableSearchHighlights;
  link?: string;
  programmatic_descriptions?: string;
}

export enum SortDirection {
  ascending = 'asc',
  descending = 'desc',
}
export interface SortCriteria {
  name: string;
  key: string;
  direction: SortDirection;
}

export interface ColumnRenderConfig {
  columnName: string;
  renderFunction: (data: any) => string;
}

export interface UserResource extends Resource, PeopleUser {
  type: ResourceType.user;
}

export interface QueryResource extends Resource {
  type: ResourceType.query;
  name: string;
  query_text: string;
  url: string;
}

export interface ResourceDict<T> {
  [ResourceType.table]: T;
  [ResourceType.dashboard]?: T;
}

// TODO - Consider just using the 'Resource' type instead
export type Bookmark = TableResource | DashboardResource;
export type PopularResource = TableResource | DashboardResource;
