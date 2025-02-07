/* eslint-disable @typescript-eslint/no-unused-vars */
import { FilterType, ResourceType, SortDirection } from '../interfaces';
import { AppConfig } from './config-types';

const configDefault: AppConfig = {
  analytics: {
    plugins: [],
  },
  announcements: {
    enabled: false,
  },
  badges: {},
  browse: {
    curatedTags: [],
    hideNonClickableBadges: false,
    showAllTags: true,
    showBadgesInHome: true,
  },
  columnLineage: {
    inAppListEnabled: false,
    inAppPageEnabled: false,
    urlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string,
      column: string
    ) =>
      `https://DEFAULT_LINEAGE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}&column=${column}`,
  },
  date: {
    dateTimeLong: 'MMMM Do YYYY [at] h:mm:ss a',
    dateTimeShort: 'MMM DD, YYYY ha z',
    default: 'MMM DD, YYYY',
  },
  documentTitle: 'Baemin - Data Menu Portal',
  editableText: {
    columnDescLength: 250,
    tableDescLength: 750,
  },
  featureLineage: {
    inAppListEnabled: false,
  },
  homePageWidgets: {
    widgets: [
      {
        name: 'SearchBarWidget',
        options: {
          path: 'SearchBarWidget/index',
        },
      },
      {
        name: 'BadgesWidget',
        options: {
          additionalProps: {
            shortBadgesList: true,
          },
          path: 'BadgesWidget/index',
        },
      },
      {
        name: 'TagsWidget',
        options: {
          additionalProps: {
            shortTagsList: true,
          },
          path: 'TagsWidget/index',
        },
      },
      {
        name: 'MyBookmarksWidget',
        options: {
          path: 'MyBookmarksWidget/index',
        },
      },
      {
        name: 'PopularResourcesWidget',
        options: {
          path: 'PopularResourcesWidget/index',
        },
      },
    ],
  },
  indexDashboards: {
    enabled: false,
  },
  indexFeatures: {
    enabled: false,
  },
  indexUsers: {
    enabled: false,
  },
  issueTracking: {
    enabled: false,
    issueDescriptionTemplate: '',
    projectSelection: {
      enabled: false,
      inputHint: '',
      title: 'Issue project key (optional)',
    },
  },
  logoPath: '/static/images/icons/bm-dsp-logo.svg',
  logoTitle: 'BM Data Menu',
  mailClientFeatures: {
    feedbackEnabled: false,
    notificationsEnabled: false,
  },
  navAppSuite: null,
  navLinks: [
    {
      href: '/announcements',
      id: 'nav::announcements',
      label: 'Announcements',
      use_router: true,
    },
    {
      href: '/browse',
      id: 'nav::browse',
      label: 'Browse',
      use_router: true,
    },
  ],
  navTheme: 'dark',
  nestedColumns: {
    maxNestedColumns: 500,
  },
  numberFormat: null,
  productTour: {},
  resourceConfig: {
    [ResourceType.dashboard]: {
      displayName: 'Dashboards',
      filterCategories: [
        {
          categoryId: 'product',
          displayName: 'Product',
          helpText:
            'Enter one or more comma separated values with exact product names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'group_name',
          displayName: 'Group',
          helpText:
            'Enter one or more comma separated values with exact group names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'name',
          displayName: 'Name',
          helpText:
            'Enter one or more comma separated values with exact dashboard names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'tag',
          displayName: 'Tag',
          helpText:
            'Enter one or more comma separated values with exact tag names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
      ],
      notices: {},
      searchHighlight: {
        enableHighlight: true,
      },
      supportedSources: {
        databricks_sql: {
          displayName: 'Databricks SQL',
          iconClass: 'icon-databricks-sql',
        },
        mode: {
          displayName: 'Mode',
          iconClass: 'icon-mode',
        },
        redash: {
          displayName: 'Redash',
          iconClass: 'icon-redash',
        },
        superset: {
          displayName: 'Superset',
          iconClass: 'icon-superset',
        },
        tableau: {
          displayName: 'Tableau',
          iconClass: 'icon-tableau',
        },
      },
    },
    [ResourceType.feature]: {
      displayName: 'ML Features',
      filterCategories: [
        {
          categoryId: 'entity',
          displayName: 'Entity',
          helpText:
            'Enter one or more comma separated values with exact entity names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'name',
          displayName: 'Feature Name',
          helpText:
            'Enter one or more comma separated values with exact feature names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'group',
          displayName: 'Feature Group',
          helpText:
            'Enter one or more comma separated values with exact feature group names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'tag',
          displayName: 'Tag',
          helpText:
            'Enter one or more comma separated values with exact tag names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
      ],
      notices: {},
      searchHighlight: {
        enableHighlight: true,
      },
      supportedSources: {
        bigquery: {
          displayName: 'BigQuery',
          iconClass: 'icon-bigquery',
        },
        delta: {
          displayName: 'Delta',
          iconClass: 'icon-delta',
        },
        dremio: {
          displayName: 'Dremio',
          iconClass: 'icon-dremio',
        },
        druid: {
          displayName: 'Druid',
          iconClass: 'icon-druid',
        },
        hive: {
          displayName: 'Hive',
          iconClass: 'icon-hive',
        },
        oracle: {
          displayName: 'Oracle',
          iconClass: 'icon-oracle',
        },
        postgres: {
          displayName: 'Postgres',
          iconClass: 'icon-postgres',
        },
        presto: {
          displayName: 'Presto',
          iconClass: 'icon-presto',
        },
        redshift: {
          displayName: 'Redshift',
          iconClass: 'icon-redshift',
        },
        snowflake: {
          displayName: 'Snowflake',
          iconClass: 'icon-snowflake',
        },
        trino: {
          displayName: 'Trino',
          iconClass: 'icon-trino',
        },
      },
    },
    [ResourceType.table]: {
      displayName: 'Datasets',
      filterCategories: [
        {
          categoryId: 'database',
          displayName: 'Source',
          helpText:
            'Enter one or more comma separated values with exact database names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'column',
          displayName: 'Column',
          helpText:
            'Enter one or more comma separated values with exact column names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'schema',
          displayName: 'Schema',
          helpText:
            'Enter one or more comma separated values with exact schema names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'table',
          displayName: 'Table',
          helpText:
            'Enter one or more comma separated values with exact table names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
        {
          categoryId: 'tag',
          displayName: 'Tag',
          helpText:
            'Enter one or more comma separated values with exact tag names or regex wildcard patterns',
          type: FilterType.INPUT_SELECT,
        },
      ],
      notices: {},
      searchHighlight: {
        enableHighlight: true,
      },
      sortCriterias: {
        name: {
          direction: SortDirection.descending,
          key: 'name',
          name: 'Alphabetical',
        },
        sort_order: {
          direction: SortDirection.ascending,
          key: 'sort_order',
          name: 'Table Default',
        },
      },
      stats: {
        iconNotRequiredTypes: [],
      },
      supportedDescriptionSources: {
        dremio: {
          displayName: 'Dremio',
          iconPath: '/static/images/icons/logo-dremio.svg',
        },
        github: {
          displayName: 'Github',
          iconPath: '/static/images/github.png',
        },
        bigquery: {
          displayName: 'BigQuery',
          iconPath: '/static/images/bigquery.png',
        },
      },
      supportedSources: {
        bigquery: {
          displayName: 'BigQuery',
          iconClass: 'icon-bigquery',
        },
        delta: {
          displayName: 'Delta',
          iconClass: 'icon-delta',
        },
        dremio: {
          displayName: 'Dremio',
          iconClass: 'icon-dremio',
        },
        druid: {
          displayName: 'Druid',
          iconClass: 'icon-druid',
        },
        elasticsearch: {
          displayName: 'Elasticsearch',
          iconClass: 'icon-elasticsearch',
        },
        hive: {
          displayName: 'Hive',
          iconClass: 'icon-hive',
        },
        postgres: {
          displayName: 'Postgres',
          iconClass: 'icon-postgres',
        },
        presto: {
          displayName: 'Presto',
          iconClass: 'icon-presto',
        },
        redshift: {
          displayName: 'Redshift',
          iconClass: 'icon-redshift',
        },
        snowflake: {
          displayName: 'Snowflake',
          iconClass: 'icon-snowflake',
        },
        teradata: {
          displayName: 'Teradata',
          iconClass: 'icon-teradata',
        },
        trino: {
          displayName: 'Trino',
          iconClass: 'icon-trino',
        },
      },
    },
    [ResourceType.user]: {
      displayName: 'People',
      searchHighlight: {
        enableHighlight: false,
      },
    },
  },
  searchPagination: {
    resultsPerPage: 10,
  },
  searchColumnRenders: [
    {
      columnName: 'last_query_at',
      renderFunction: (table) => {
        /**
         * Extract last query timestamp from `programmatic_descriptions`
         */
        if (
          !table.hasOwnProperty('programmatic_descriptions') ||
          !Array.isArray(table.programmatic_descriptions)
        ) {
          return '';
        }

        let items: string[] = table.programmatic_descriptions;

        items = items.filter((val) => val.startsWith('Last query:'));
        if (items.length === 0) {
          return '';
        }

        let ts = items[0].split('At:')[1];

        ts = ts.trim();

        return ts;
      },
    },
  ],
  tableLineage: {
    defaultLineageDepth: 5,
    externalEnabled: false,
    iconPath: 'PATH_TO_ICON',
    inAppListEnabled: true,
    inAppPageEnabled: true,
    isBeta: false,
    urlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string
    ) =>
      `https://DEFAULT_LINEAGE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}`,
  },
  tableProfile: {
    exploreUrlGenerator: (
      database: string,
      cluster: string,
      schema: string,
      table: string,
      partitionKey?: string,
      partitionValue?: string
    ) =>
      `https://DEFAULT_EXPLORE_URL?schema=${schema}&cluster=${cluster}&db=${database}&table=${table}`,
    isBeta: false,
    isExploreEnabled: false,
  },
  tableQualityChecks: {
    isEnabled: false,
  },
  userIdLabel: 'email address',
};

export default configDefault;
