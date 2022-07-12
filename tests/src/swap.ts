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
  "94d38e7332d920bfaaa63421578cdb51686de24bb3c42877048a4ca2ee01802e";

const main = async () => {
  const aptosClient = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const aptosAccount = new AptosAccount(Buffer.from('0x8e637e115c1bce8b56024c5c7ed729dc8cac84749029b14e7d62c558911d3ae0'));
  
  await faucetClient.fundAccount(aptosAccount.address().hex(), 5000);

  const [{ sequence_number: sequnceNumber }, chainId] = await Promise.all([
    aptosClient.getAccount(aptosAccount.address()),
    aptosClient.getChainId(),
  ]);

  const resp = await swap_tokens(aptosClient, aptosAccount, 'nazwa_kolekcji_a', 'nazwa_tokena_test_3', 'nazwa_kolekcji_a', 'nazwa_tokena_test_2', sequnceNumber, chainId);
  console.log(resp.hash);
  
};

const swap_tokens = async (
  client: AptosClient,
  account: AptosAccount,
  collection_deposit_name: string,
  deposit_name: string,
  collection_name: string,
  name: string,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::swap_tokens`,
    type_arguments: [],
    arguments: [
      account.address().hex(),
      Buffer.from(collection_deposit_name).toString("hex"),
      Buffer.from(deposit_name).toString("hex"),
      Buffer.from(collection_name).toString("hex"),
      Buffer.from(name).toString("hex"),
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