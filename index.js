'use strict';

var rogercore = module.exports;

// module information
rogercore.version = 'v' + require('./package.json').version;
rogercore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of rogercore-lib found. ' +
      'Please make sure to require rogercore-lib and check that submodules do' +
      ' not also include their own rogercore-lib dependency.';
    throw new Error(message);
  }
};
rogercore.versionGuard(global._rogercore);
global._rogercore = rogercore.version;

// crypto
rogercore.crypto = {};
rogercore.crypto.BN = require('./lib/crypto/bn');
rogercore.crypto.ECDSA = require('./lib/crypto/ecdsa');
rogercore.crypto.Hash = require('./lib/crypto/hash');
rogercore.crypto.Random = require('./lib/crypto/random');
rogercore.crypto.Point = require('./lib/crypto/point');
rogercore.crypto.Signature = require('./lib/crypto/signature');

// encoding
rogercore.encoding = {};
rogercore.encoding.Base58 = require('./lib/encoding/base58');
rogercore.encoding.Base58Check = require('./lib/encoding/base58check');
rogercore.encoding.BufferReader = require('./lib/encoding/bufferreader');
rogercore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
rogercore.encoding.Varint = require('./lib/encoding/varint');

// utilities
rogercore.util = {};
rogercore.util.buffer = require('./lib/util/buffer');
rogercore.util.js = require('./lib/util/js');
rogercore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
rogercore.errors = require('./lib/errors');

// main bitcoin library
rogercore.Address = require('./lib/address');
rogercore.Block = require('./lib/block');
rogercore.MerkleBlock = require('./lib/block/merkleblock');
rogercore.BlockHeader = require('./lib/block/blockheader');
rogercore.HDPrivateKey = require('./lib/hdprivatekey.js');
rogercore.HDPublicKey = require('./lib/hdpublickey.js');
rogercore.Networks = require('./lib/networks');
rogercore.Opcode = require('./lib/opcode');
rogercore.PrivateKey = require('./lib/privatekey');
rogercore.PublicKey = require('./lib/publickey');
rogercore.Script = require('./lib/script');
rogercore.Transaction = require('./lib/transaction');
rogercore.URI = require('./lib/uri');
rogercore.Unit = require('./lib/unit');

// dependencies, subject to change
rogercore.deps = {};
rogercore.deps.bnjs = require('bn.js');
rogercore.deps.bs58 = require('bs58');
rogercore.deps.Buffer = Buffer;
rogercore.deps.elliptic = require('elliptic');
rogercore.deps.scryptsy = require('scryptsy');
rogercore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
rogercore.Transaction.sighash = require('./lib/transaction/sighash');
