require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth oven proud hockey area olympic gas'; 
let testAccounts = [
"0xfe442d085bdd2f1f1f3162058b79c05cdea06ae9bb7836236836daecccc38a52",
"0x1accbec633896f13fae4a4a4ded88ad24220adfbe1adcf1b4732d51a2453da11",
"0x03b814461947a3b2424eb8ee1222180cd0da0278b42e22dee7228523602de6bb",
"0x49078c215564e375c0264b68fa3e96351a4665064256d7efda2e1fc60d1f4218",
"0xf836a1c72d1740c2982acacb7686987b770201000268f8b0a298ece3ca90ec97",
"0x1003e9b939a9ea36e10be3ee72ec089232847dba9e5af8c2826999e97d99d1b2",
"0x0381a4765ace5ae4ac2fa8a71b86ded5db6b1e3dbbc625db53f7e0ac8bb0786c",
"0x4589879be36df860d44c37a0c69018c27d5d05b72d2bb8647c348c0677230b25",
"0x813b85bcf46b5106ce357b4c81e62c4b8f80d1239e78fd7a4e1939df9e72912c",
"0xa3bfe61cc442815d9ce1dd1990ab4442ddff83dc9fd6c79c2c959bbcea672b07"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


