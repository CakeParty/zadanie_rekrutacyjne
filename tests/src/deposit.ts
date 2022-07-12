import { AptosAccount, AptosClient, FaucetClient } from "aptos";
import {
  Address,
  PendingTransaction,
  TransactionPayload,
  Uint64,
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
  "25043d63b41c314e7f5421226ab99afbc7fc701ff5d350400ad49cd908de27f6";

const main = async () => {
  const aptosClient = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const aptosAccount = new AptosAccount(Buffer.from('0x047b45edcb680004a8dd8e5a83ee8649b78711a860a9dfdae4cc531d281179f6'));
  
  await faucetClient.fundAccount(aptosAccount.address().hex(), 5000);

  const [{ sequence_number: sequnceNumber }, chainId] = await Promise.all([
    aptosClient.getAccount(aptosAccount.address()),
    aptosClient.getChainId(),
  ]);

  const resp = await deposit_token(aptosClient, aptosAccount, 'nazwa_kolekcji_a', 'nazwa_tokena_test', sequnceNumber, chainId);
  console.log(resp.hash);
  
};

const deposit_token = async (
  client: AptosClient,
  account: AptosAccount,
  collection_name: string,
  name: string,
  sequence_number: string,
  chainId: number
): Promise<PendingTransaction> => {
  let payload: TransactionPayload = {
    type: "script_function_payload",
    function: `${address}::Program::deposit_token`,
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