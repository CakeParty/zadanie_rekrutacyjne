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
  "0x3fbc86befb863ed90af090341108898080997da0384bbb809df3237a74d79e12";

const main = async () => {
  const aptosClient = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const aptosAccount = new AptosAccount(Buffer.from('0xf77d68fb25418ed9fda1d869d2b272284385e95170e83a186ada3a6b4a326d49'));
  
  await faucetClient.fundAccount(aptosAccount.address().hex(), 5000);

  const [{ sequence_number: sequnceNumber }, chainId] = await Promise.all([
    aptosClient.getAccount(aptosAccount.address()),
    aptosClient.getChainId(),
  ]);

  const resp = await publish_module(aptosClient, aptosAccount);
  console.log(resp.hash);
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

main();