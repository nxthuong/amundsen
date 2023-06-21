// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';

import './styles.scss';

import { ResourceType } from 'interfaces';
import { getSearchColumnRenders } from 'config/config-utils';
import {
  RESOURCE_HEADER_TITLE,
  SOURCE_HEADER_TITLE,
  BADGES_HEADER_TITLE,
  LAST_UPDATED_HEADER_TITLE,
  ENTITY_HEADER_TITLE,
} from './constants';

export interface ResourceListHeaderProps {
  resourceTypes: ResourceType[];
}

const resourceTypeToHeaderClassMap = [
  'resource-header',
  'source-header',
  'badge-last-run-header',
  'entity-header',
];

const getHeaderClass = (index: number) => {
  if (index >= resourceTypeToHeaderClassMap.length) {
    return resourceTypeToHeaderClassMap[-1];
  }

  return resourceTypeToHeaderClassMap[index];
};

const getResourceHeaders = (type: ResourceType) => {
  const columnRenders = getSearchColumnRenders();
  const columnNames = columnRenders.map((item) =>
    item.columnName.toUpperCase()
  );
  let headers: string[];

  switch (type) {
    case ResourceType.dashboard:
      headers = [
        RESOURCE_HEADER_TITLE,
        SOURCE_HEADER_TITLE,
        LAST_UPDATED_HEADER_TITLE,
      ];
      break;
    case ResourceType.feature:
      headers = [
        RESOURCE_HEADER_TITLE,
        SOURCE_HEADER_TITLE,
        BADGES_HEADER_TITLE,
        ENTITY_HEADER_TITLE,
      ];
      break;
    case ResourceType.table:
      headers = [
        RESOURCE_HEADER_TITLE,
        SOURCE_HEADER_TITLE,
        BADGES_HEADER_TITLE,
      ];
      break;
    case ResourceType.user:
      headers = [
        RESOURCE_HEADER_TITLE,
        SOURCE_HEADER_TITLE,
        BADGES_HEADER_TITLE,
      ];
      break;
    default:
      headers = [];
  }

  return [...headers, ...columnNames];
};

const ResourceListHeader: React.FC<ResourceListHeaderProps> = ({
  resourceTypes,
}: ResourceListHeaderProps) => {
  const headers = getResourceHeaders(resourceTypes[0]);

  if (headers.length === 0) {
    return null;
  }

  return (
    <div className="resource-list-header">
      {headers?.map((headerText, index) => (
        <span className={getHeaderClass(index)} key={getHeaderClass(index)}>
          <span className="header-text">{headerText}</span>
        </span>
      ))}
    </div>
  );
};

export default ResourceListHeader;
