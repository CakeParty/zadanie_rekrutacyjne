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
  "8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957";

const main = async () => {
  const aptosClient = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const aptosAccount = new AptosAccount(Buffer.from('0x292e0fd9543618f24793d2e49613378103eb6c0b0fe771a35cdaddebf8df3d27'));
  
  await faucetClient.fundAccount(aptosAccount.address().hex(), 5000);

  const [{ sequence_number: sequnceNumber }, chainId] = await Promise.all([
    aptosClient.getAccount(aptosAccount.address()),
    aptosClient.getChainId(),
  ]);

  const resp = await withdraw_token(aptosClient, aptosAccount, 'nazwa_kolekcji_a', 'nazwa_tokena_test_2', sequnceNumber, chainId);
  console.log(resp.hash);
  
};

const withdraw_token = async (
  client: AptosClient,
  account: AptosAccount,
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