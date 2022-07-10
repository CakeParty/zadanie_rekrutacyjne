module Program::Program {
    use Std::Errors;
    use Std::Signer;
    use 0x1::Token::{Self, TokenId};
    use 0x1::IterableTable::{Self, IterableTable};

    native public fun length<Token>(v: &vector<Token>): u64;
    native public fun borrow<Token>(v: &vector<Token>, i: u64): &Token;

    const INVALID_STATE: u64 = 1;
    const REQUIRES_ADDRESS: u64 = 2;
    const REQUIRES_ROLE: u64 = 3;
    const REQUIRES_CAPABILITY: u64 = 4;
    const NOT_PUBLISHED: u64 = 5;
    const ALREADY_PUBLISHED: u64 = 6;
    const INVALID_ARGUMENT: u64 = 7;
    const LIMIT_EXCEEDED: u64 = 8;
    const INTERNAL: u64 = 10;
    const CUSTOM: u64 = 255;

    struct User has key{
        token_a: u64,
        token_b: u64,
    }

    struct Program has key {
        collection_a: vector<u8>,
        collection_b: vector<u8>,
        token_a_table: IterableTable<MyToken, Token>,
        token_b_table: IterableTable<MyToken, Token>,
    }

    struct Token has store, drop {
        id: TokenId,
        value: u64,
    }

    struct MyToken has store, copy, drop{
        token_id: TokenId,
    }

    public fun new_my_token(token_id: TokenId): MyToken{
        MyToken {token_id}
    }

    public fun return_token(id: TokenId, value: u64): Token{
        Token {id, value}
    }

    public(script) fun init(account: &signer, collection_a: vector<u8>, collection_b: vector<u8>){
        init_user(account);
        init_Program(account, collection_a, collection_b);
    }

    public fun init_user(account: &signer) {
        if (!exists<User>(Signer::address_of(account))) {
            move_to(account, User {token_a: 0, token_b: 0});
        }
    }

    public fun init_Program(account: &signer, collection_a: vector<u8>, collection_b: vector<u8>){
        if (!exists<Program>(Signer::address_of(account))) {
            move_to(account, Program {collection_a, collection_b, token_a_table: IterableTable::new<MyToken, Token>(), token_b_table: IterableTable::new<MyToken, Token>()});
        }
    }

    public(script) fun deposit_token(
        account: &signer,
        creator: address,
        collection_name: vector<u8>,
        name: vector<u8>,
        program_address: address,
    ) acquires User, Program {
        let account_addr = Signer::address_of(account);
        withdraw_from_user(account_addr, creator, collection_name, name, program_address);
    }

    fun withdraw_from_user(
        account_addr: address,
        creator: address,
        collection_name: vector<u8>,
        name: vector<u8>,
        program_address: address,
    ) acquires User, Program {
        assert!(
            exists<User>(account_addr),
            Errors::not_published(NOT_PUBLISHED),
        );

        assert!(
            exists<Program>(program_address),
            Errors::not_published(NOT_PUBLISHED),
        );

        let token_exists = borrow_global_mut<Program>(program_address);

        assert!(
            token_exists.collection_a != collection_name && token_exists.collection_b != collection_name,
            Errors::invalid_argument(INVALID_ARGUMENT),
        );

        let user_tokens = borrow_global_mut<User>(account_addr);

        if (token_exists.collection_a == collection_name){

            assert!(
                user_tokens.token_a == 0,
                Errors::requires_capability(REQUIRES_CAPABILITY),
            );

            user_tokens.token_a = user_tokens.token_a - 1;

            let new_token_id = Token::create_token_id_raw(creator, collection_name, name);
            let token_a_tab = &mut token_exists.token_a_table;
            IterableTable::add<MyToken, Token>(token_a_tab, new_my_token(new_token_id), return_token(new_token_id, 1));
            
        } else {
            assert!(
                user_tokens.token_b == 0,
                Errors::requires_capability(REQUIRES_CAPABILITY),
            );

            user_tokens.token_b = user_tokens.token_b - 1;

            let new_token_id = Token::create_token_id_raw(creator, collection_name, name);
            let token_b_tab = &mut token_exists.token_b_table;
            IterableTable::add<MyToken, Token>(token_b_tab, new_my_token(new_token_id), return_token(new_token_id, 1));
        };
    }

    public(script) fun withdraw_token(
        account_addr: address,
        creator: address,
        collection_name: vector<u8>,
        name: vector<u8>,
        program_address: address,
    ) acquires User, Program {
        deposit_to_user(account_addr, creator, collection_name, name, program_address);
    }

    fun deposit_to_user(
        account_addr: address,
        creator: address,
        collection_name: vector<u8>,
        name: vector<u8>,
        program_address: address,
    ) acquires User, Program {
        assert!(
            exists<User>(account_addr),
            Errors::not_published(NOT_PUBLISHED),
        );

        assert!(
            exists<Program>(program_address),
            Errors::not_published(NOT_PUBLISHED),
        );

        let token_exists = borrow_global_mut<Program>(program_address);

        assert!(
            token_exists.collection_a != collection_name && token_exists.collection_b != collection_name,
            Errors::invalid_argument(INVALID_ARGUMENT),
        );

        let user_tokens = borrow_global_mut<User>(account_addr);

        if (token_exists.collection_a == collection_name){

            let new_token_id = Token::create_token_id_raw(creator, collection_name, name);
            let token_a_tab = &mut token_exists.token_a_table;

            assert!(
                IterableTable::contains<MyToken, Token>(token_a_tab, new_my_token(new_token_id)),
                Errors::requires_capability(REQUIRES_CAPABILITY),
            );

            user_tokens.token_a = user_tokens.token_a + 1;
            IterableTable::remove_iter<MyToken, Token>(token_a_tab, new_my_token(new_token_id));

        } else {
            let new_token_id = Token::create_token_id_raw(creator, collection_name, name);
            let token_b_tab = &mut token_exists.token_b_table;

            assert!(
                IterableTable::contains<MyToken, Token>(token_b_tab, new_my_token(new_token_id)),
                Errors::requires_capability(REQUIRES_CAPABILITY),
            );

            user_tokens.token_b = user_tokens.token_b + 1;
            IterableTable::remove_iter<MyToken, Token>(token_b_tab, new_my_token(new_token_id));
        }
    }

    public(script) fun swap_tokens(
        account: &signer,
        creator: address,
        collection_deposit_name: vector<u8>,
        deposit_name: vector<u8>,
        program_address: address,
        account_addr: address,
        collection_name: vector<u8>,
        name: vector<u8>,
    ) acquires User, Program {
        deposit_token(account, creator, collection_deposit_name, deposit_name, program_address);
        withdraw_token(account_addr, creator, collection_name, name, program_address);
    }
}