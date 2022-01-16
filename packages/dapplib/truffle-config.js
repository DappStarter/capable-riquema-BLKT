require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note situate comfort install clock flame gentle'; 
let testAccounts = [
"0x89b63afccff92399ac9e2fcf7a58a6560c82bed936d6ebb51a2c04c1080be4ca",
"0x90c8e8b1b54f848db8a956d89d44e435d99c4cee405d3e474a23ad2a1d9e7aa4",
"0x0fd6d604631101835b8dd985f76f07199cae9c74fce9404ef42f83675bc649ae",
"0x8ecefae744817b97365585f23b26e6f83e0582fed7f4cc21770e9e5b3c107cbf",
"0x5366b92d6e31328b63734a960a5c2b7574cc0a320a19fae8eb5f6baa83aead4f",
"0x4d45aafdc1379872583d47dff6a69d61fa2a33bb889c76977e76a8397a0185d1",
"0xd6ed7a441727afcfdfde5f1a8fe343ed76df1e1b3d7e267267bc77ed4c3728fd",
"0x9ce59dbb75073e51bf915f8ee651ec41f0616ad6224ab85e7de6d68de489162a",
"0xc3a7a2dce442aa2ad66c2ebcab831fe4a23d53eded31004261995f7000f4828d",
"0xc897df6425f28ea9ae64b09faae5eacb95410a61bc0874396c172e158a7d8418"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

