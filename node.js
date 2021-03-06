const CorePromiseClient = require('./clients/nodejs/CorePromiseClient');
const PlatformPromiseClient = require('./clients/nodejs/PlatformPromiseClient');
const TransactionsFilterStreamPromiseClient = require('./clients/nodejs/TransactionsFilterStreamPromiseClient');

const protocCoreMessages = require('./clients/nodejs/core_protoc');
const protocPlatformMessages = require('./clients/nodejs/platform_protoc');
const protocTransactionsFilterStreamMessages = require('./clients/nodejs/transactions_filter_stream_protoc');

const getCoreDefinition = require('./lib/getCoreDefinition');
const getPlatformDefinition = require('./lib/getPlatformDefinition');

const getTransactionsFilterStreamDefinition = require(
  './lib/getTransactionsFilterStreamDefinition',
);

const {
  org: {
    dash: {
      platform: {
        dapi: {
          v0: pbjsCoreMessages,
        },
      },
    },
  },
} = require('./clients/nodejs/core_pbjs');

const {
  org: {
    dash: {
      platform: {
        dapi: {
          v0: pbjsPlatformMessages,
        },
      },
    },
  },
} = require('./clients/nodejs/platform_pbjs');

const {
  org: {
    dash: {
      platform: {
        dapi: {
          v0: pbjsTransactionsFilterStreamMessages,
        },
      },
    },
  },
} = require('./clients/nodejs/transactions_filter_stream_pbjs');

module.exports = Object.assign({
  CorePromiseClient,
  TransactionsFilterStreamPromiseClient,
  PlatformPromiseClient,
  getCoreDefinition,
  getTransactionsFilterStreamDefinition,
  getPlatformDefinition,
  pbjs: Object.assign(
    {},
    pbjsCoreMessages,
    pbjsTransactionsFilterStreamMessages,
    pbjsPlatformMessages,
  ),
}, protocCoreMessages, protocTransactionsFilterStreamMessages, protocPlatformMessages);
