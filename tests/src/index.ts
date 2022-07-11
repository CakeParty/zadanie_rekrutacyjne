import { AptosAccount, AptosClient, FaucetClient } from "aptos";
import {
  Address,
  PendingTransaction,
  TransactionPayload,
} from "aptos/dist/api/data-contracts";
import {
  AccountAddress,
  ChainId,
  RawTransaction,
  TransactionPayloadScriptFunction,
} from "aptos/dist/transaction_builder/aptos_types";

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
const address =
  "8cce57225975802b624506c49449c8213e09c107853e2bb197664a3f1be13a1b";

const main = async () => {
  const aptosClient = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const aptosAccount = new AptosAccount(Buffer.from('0xf9003b8f0ec3d1f041e5c56d3a83bba176dd48242d423c195e47b852bb83173a'));
  
  await faucetClient.fundAccount(aptosAccount.address().hex(), 5000);

  const [{ sequence_number: sequnceNumber }, chainId] = await Promise.all([
    aptosClient.getAccount(aptosAccount.address()),
    aptosClient.getChainId(),
  ]);

  //publish_module(aptosClient, aptosAccount);
  //const initresp = await init(aptosClient, aptosAccount, 'nazwa_kolekcji_a', 'nazwa_kolekcji_b', sequnceNumber, chainId);
  //console.log(initresp.hash);
  //deposit_token(aptosClient, aptosAccount, 'nazwa_kolekcji', 'nazwa_tokena', aptosAccount, sequnceNumber, chainId);
  //withdraw_token(aptosClient, aptosAccount, 'nazwa_kolekcji', 'nazwa_tokena', aptosAccount, sequnceNumber, chainId);
  //swap_tokens(aptosClient, aptosAccount, 'nazwa_kolekcji_do_depozytu', 'nazwa_tokena_do_depozytu', aptosAccount, 'nazwa_kolekcji_do_wycigniecia', 'nazwa_tokena_do_wycigniecia', sequnceNumber, chainId);
};

const init = async (
  client: AptosClient,
  account: AptosAccount,
  collection_a: string,
  collection_b: string,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::init`,
    type_arguments: [],
    arguments: [account.address().hex(), collection_a, collection_b],
  };
  let transaction = await client.generateTransaction(
    account.address(),
    payload
  );
  let signedTrans = await client.signTransaction(account, transaction);
  let res = await client.submitTransaction(signedTrans);
  return res;
};

const publish_module =  async (
  client: AptosClient,
  account: AptosAccount, 
): Promise<PendingTransaction> => {
    let payload: TransactionPayload = {
      type: "module_bundle_payload",
      modules: [{ bytecode: address }],
    };
    let transaction = await client.generateTransaction(
      account.address(),
      payload
    );
    let signedTrans = await client.signTransaction(account, transaction);
    let res = await client.submitTransaction(signedTrans);
    return res;
}

const deposit_token = async (
  client: AptosClient,
  account: AptosAccount,
  collection_name: string,
  name: string,
  program_address: AptosAccount,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::deposit_token`,
    type_arguments: [],
    arguments: [
      account.address().hex(),
      account.address().hex(),
      collection_name,
      name,
      program_address,
    ],
  };
  let transaction = await client.generateTransaction(
    account.address(),
    payload
  );
  let signedTrans = await client.signTransaction(account, transaction);
  let res = await client.submitTransaction(signedTrans);
  return res;
};

const withdraw_token = async (
  client: AptosClient,
  account: AptosAccount,
  collection_name: string,
  name: string,
  program_address: AptosAccount,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::withdraw_token`,
    type_arguments: [],
    arguments: [
      account.address().hex(),
      account.address().hex(),
      collection_name,
      name,
      program_address,
    ],
  };
  let transaction = await client.generateTransaction(
    account.address(),
    payload
  );
  let signedTrans = await client.signTransaction(account, transaction);
  let res = await client.submitTransaction(signedTrans);
  return res;
};

const swap_tokens = async (
  client: AptosClient,
  account: AptosAccount,
  collection_deposit_name: string,
  deposit_name: string,
  program_address: AptosAccount,
  collection_name: string,
  name: string,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::withdraw_token`,
    type_arguments: [],
    arguments: [
      account.address().hex(),
      account.address().hex(),
      collection_deposit_name,
      deposit_name,
      program_address.address().hex(),
      collection_name,
      name,
    ],
  };
  let transaction = await client.generateTransaction(
    account.address(),
    payload
  );
  let signedTrans = await client.signTransaction(account, transaction);
  let res = await client.submitTransaction(signedTrans);
  return res;
};

main();