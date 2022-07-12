
<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program"></a>

# Module `0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957::Program`



-  [Resource `User`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User)
-  [Resource `Program`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Program)
-  [Struct `Token`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Token)
-  [Struct `MyToken`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken)
-  [Constants](#@Constants_0)
-  [Function `new_my_token`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token)
-  [Function `return_token`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token)
-  [Function `init`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init)
-  [Function `init_user`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_user)
-  [Function `init_Program`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_Program)
-  [Function `deposit_token`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_token)
-  [Function `withdraw_from_user`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_from_user)
-  [Function `withdraw_token`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_token)
-  [Function `deposit_to_user`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_to_user)
-  [Function `swap_tokens`](#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_swap_tokens)


<pre><code><b>use</b> <a href="">0x1::Errors</a>;
<b>use</b> <a href="">0x1::IterableTable</a>;
<b>use</b> <a href="">0x1::Option</a>;
<b>use</b> <a href="">0x1::Signer</a>;
<b>use</b> <a href="">0x1::Token</a>;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User"></a>

## Resource `User`



<pre><code><b>struct</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a> <b>has</b> key
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>token_a: u64</code>
</dt>
<dd>

</dd>
<dt>
<code>token_b: u64</code>
</dt>
<dd>

</dd>
</dl>


</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Program"></a>

## Resource `Program`



<pre><code><b>struct</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> <b>has</b> key
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>collection_a: vector&lt;u8&gt;</code>
</dt>
<dd>

</dd>
<dt>
<code>collection_b: vector&lt;u8&gt;</code>
</dt>
<dd>

</dd>
<dt>
<code>token_a_table: <a href="_IterableTable">IterableTable::IterableTable</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">Program::MyToken</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Token">Program::Token</a>&gt;</code>
</dt>
<dd>

</dd>
<dt>
<code>token_b_table: <a href="_IterableTable">IterableTable::IterableTable</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">Program::MyToken</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Token">Program::Token</a>&gt;</code>
</dt>
<dd>

</dd>
</dl>


</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Token"></a>

## Struct `Token`



<pre><code><b>struct</b> <a href="">Token</a> <b>has</b> drop, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>id: <a href="_TokenId">Token::TokenId</a></code>
</dt>
<dd>

</dd>
<dt>
<code>value: u64</code>
</dt>
<dd>

</dd>
</dl>


</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken"></a>

## Struct `MyToken`



<pre><code><b>struct</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a> <b>has</b> <b>copy</b>, drop, store
</code></pre>



<details>
<summary>Fields</summary>


<dl>
<dt>
<code>token_id: <a href="_TokenId">Token::TokenId</a></code>
</dt>
<dd>

</dd>
</dl>


</details>

<a name="@Constants_0"></a>

## Constants


<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_ALREADY_PUBLISHED"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_ALREADY_PUBLISHED">ALREADY_PUBLISHED</a>: u64 = 6;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_CUSTOM"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_CUSTOM">CUSTOM</a>: u64 = 255;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INTERNAL"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INTERNAL">INTERNAL</a>: u64 = 10;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_ARGUMENT"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_ARGUMENT">INVALID_ARGUMENT</a>: u64 = 7;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_STATE"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_STATE">INVALID_STATE</a>: u64 = 1;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_LIMIT_EXCEEDED"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_LIMIT_EXCEEDED">LIMIT_EXCEEDED</a>: u64 = 8;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED">NOT_PUBLISHED</a>: u64 = 5;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_ADDRESS"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_ADDRESS">REQUIRES_ADDRESS</a>: u64 = 2;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY">REQUIRES_CAPABILITY</a>: u64 = 4;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_ROLE"></a>



<pre><code><b>const</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_ROLE">REQUIRES_ROLE</a>: u64 = 3;
</code></pre>



<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token"></a>

## Function `new_my_token`



<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(token_id: <a href="_TokenId">Token::TokenId</a>): <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">Program::MyToken</a>
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(token_id: TokenId): <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>{
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a> {token_id}
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token"></a>

## Function `return_token`



<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token">return_token</a>(id: <a href="_TokenId">Token::TokenId</a>, value: u64): <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_Token">Program::Token</a>
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token">return_token</a>(id: TokenId, value: u64): <a href="">Token</a>{
    <a href="">Token</a> {id, value}
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init"></a>

## Function `init`



<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init">init</a>(account: &signer, collection_a: vector&lt;u8&gt;, collection_b: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init">init</a>(account: &signer, collection_a: vector&lt;u8&gt;, collection_b: vector&lt;u8&gt;){
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_user">init_user</a>(account);
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_Program">init_Program</a>(account, collection_a, collection_b);
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_user"></a>

## Function `init_user`



<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_user">init_user</a>(account: &signer)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_user">init_user</a>(account: &signer) {
    <b>if</b> (!<b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>&gt;(<a href="_address_of">Signer::address_of</a>(account))) {
        <b>move_to</b>(account, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a> {token_a: 10, token_b: 10});
    }
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_Program"></a>

## Function `init_Program`



<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_Program">init_Program</a>(account: &signer, collection_a: vector&lt;u8&gt;, collection_b: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b> <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_init_Program">init_Program</a>(account: &signer, collection_a: vector&lt;u8&gt;, collection_b: vector&lt;u8&gt;){
    <b>if</b> (!<b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a>&gt;(<a href="_address_of">Signer::address_of</a>(account))) {
        <b>move_to</b>(account, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {collection_a, collection_b, token_a_table: <a href="_new">IterableTable::new</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(), token_b_table: <a href="_new">IterableTable::new</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;()});
    }
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_token"></a>

## Function `deposit_token`



<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_token">deposit_token</a>(account: &signer, creator: <b>address</b>, collection_name: vector&lt;u8&gt;, name: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_token">deposit_token</a>(
    account: &signer,
    creator: <b>address</b>,
    collection_name: vector&lt;u8&gt;,
    name: vector&lt;u8&gt;,
) <b>acquires</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {
    <b>let</b> account_addr = <a href="_address_of">Signer::address_of</a>(account);
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_from_user">withdraw_from_user</a>(account_addr, creator, collection_name, name);
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_from_user"></a>

## Function `withdraw_from_user`



<pre><code><b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_from_user">withdraw_from_user</a>(account_addr: <b>address</b>, creator: <b>address</b>, collection_name: vector&lt;u8&gt;, name: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_from_user">withdraw_from_user</a>(
    account_addr: <b>address</b>,
    creator: <b>address</b>,
    collection_name: vector&lt;u8&gt;,
    name: vector&lt;u8&gt;,
) <b>acquires</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {
    <b>assert</b>!(
        <b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>&gt;(account_addr),
        <a href="_not_published">Errors::not_published</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED">NOT_PUBLISHED</a>),
    );

    <b>assert</b>!(
        <b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a>&gt;(account_addr),
        <a href="_not_published">Errors::not_published</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED">NOT_PUBLISHED</a>),
    );

    <b>let</b> token_exists = <b>borrow_global_mut</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a>&gt;(account_addr);

    <b>assert</b>!(
        token_exists.collection_a != collection_name || token_exists.collection_b != collection_name,
        <a href="_invalid_argument">Errors::invalid_argument</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_ARGUMENT">INVALID_ARGUMENT</a>),
    );

    <b>let</b> user_tokens = <b>borrow_global_mut</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>&gt;(account_addr);

    <b>if</b> (token_exists.collection_a == collection_name){

        <b>assert</b>!(
            user_tokens.token_a &gt;= 1,
            <a href="_requires_capability">Errors::requires_capability</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY">REQUIRES_CAPABILITY</a>),
        );

        user_tokens.token_a = user_tokens.token_a - 1;

        <b>let</b> new_token_id = <a href="_create_token_id_raw">Token::create_token_id_raw</a>(creator, collection_name, name);
        <b>let</b> token_a_tab = &<b>mut</b> token_exists.token_a_table;
        <a href="_add">IterableTable::add</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_a_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id), <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token">return_token</a>(new_token_id, 1));

    } <b>else</b> {
        <b>assert</b>!(
            user_tokens.token_b &gt;= 1,
            <a href="_requires_capability">Errors::requires_capability</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY">REQUIRES_CAPABILITY</a>),
        );

        user_tokens.token_b = user_tokens.token_b - 1;

        <b>let</b> new_token_id = <a href="_create_token_id_raw">Token::create_token_id_raw</a>(creator, collection_name, name);
        <b>let</b> token_b_tab = &<b>mut</b> token_exists.token_b_table;
        <a href="_add">IterableTable::add</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_b_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id), <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_return_token">return_token</a>(new_token_id, 1));
    };
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_token"></a>

## Function `withdraw_token`



<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_token">withdraw_token</a>(account: &signer, creator: <b>address</b>, collection_name: vector&lt;u8&gt;, name: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_token">withdraw_token</a>(
    account: &signer,
    creator: <b>address</b>,
    collection_name: vector&lt;u8&gt;,
    name: vector&lt;u8&gt;,
) <b>acquires</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {
    <b>let</b> account_addr = <a href="_address_of">Signer::address_of</a>(account);
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_to_user">deposit_to_user</a>(account_addr, creator, collection_name, name);
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_to_user"></a>

## Function `deposit_to_user`



<pre><code><b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_to_user">deposit_to_user</a>(account_addr: <b>address</b>, creator: <b>address</b>, collection_name: vector&lt;u8&gt;, name: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_to_user">deposit_to_user</a>(
    account_addr: <b>address</b>,
    creator: <b>address</b>,
    collection_name: vector&lt;u8&gt;,
    name: vector&lt;u8&gt;,
) <b>acquires</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {
    <b>assert</b>!(
        <b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>&gt;(account_addr),
        <a href="_not_published">Errors::not_published</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED">NOT_PUBLISHED</a>),
    );

    <b>assert</b>!(
        <b>exists</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a>&gt;(account_addr),
        <a href="_not_published">Errors::not_published</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_NOT_PUBLISHED">NOT_PUBLISHED</a>),
    );

    <b>let</b> token_exists = <b>borrow_global_mut</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a>&gt;(account_addr);

    <b>assert</b>!(
        token_exists.collection_a != collection_name || token_exists.collection_b != collection_name,
        <a href="_invalid_argument">Errors::invalid_argument</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_INVALID_ARGUMENT">INVALID_ARGUMENT</a>),
    );

    <b>let</b> user_tokens = <b>borrow_global_mut</b>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>&gt;(account_addr);

    <b>if</b> (token_exists.collection_a == collection_name){

        <b>let</b> new_token_id = <a href="_create_token_id_raw">Token::create_token_id_raw</a>(creator, collection_name, name);
        <b>let</b> token_a_tab = &<b>mut</b> token_exists.token_a_table;

        <b>assert</b>!(
            <a href="_contains">IterableTable::contains</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_a_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id)),
            <a href="_requires_capability">Errors::requires_capability</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY">REQUIRES_CAPABILITY</a>),
        );

        user_tokens.token_a = user_tokens.token_a + 1;
        <a href="_remove_iter">IterableTable::remove_iter</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_a_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id));

    } <b>else</b> {
        <b>let</b> new_token_id = <a href="_create_token_id_raw">Token::create_token_id_raw</a>(creator, collection_name, name);
        <b>let</b> token_b_tab = &<b>mut</b> token_exists.token_b_table;

        <b>assert</b>!(
            <a href="_contains">IterableTable::contains</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_b_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id)),
            <a href="_requires_capability">Errors::requires_capability</a>(<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_REQUIRES_CAPABILITY">REQUIRES_CAPABILITY</a>),
        );

        user_tokens.token_b = user_tokens.token_b + 1;
        <a href="_remove_iter">IterableTable::remove_iter</a>&lt;<a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_MyToken">MyToken</a>, <a href="">Token</a>&gt;(token_b_tab, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_new_my_token">new_my_token</a>(new_token_id));
    }
}
</code></pre>



</details>

<a name="0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_swap_tokens"></a>

## Function `swap_tokens`



<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_swap_tokens">swap_tokens</a>(account: &signer, creator: <b>address</b>, collection_deposit_name: vector&lt;u8&gt;, deposit_name: vector&lt;u8&gt;, collection_name: vector&lt;u8&gt;, name: vector&lt;u8&gt;)
</code></pre>



<details>
<summary>Implementation</summary>


<pre><code><b>public</b>(<b>script</b>) <b>fun</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_swap_tokens">swap_tokens</a>(
    account: &signer,
    creator: <b>address</b>,
    collection_deposit_name: vector&lt;u8&gt;,
    deposit_name: vector&lt;u8&gt;,
    collection_name: vector&lt;u8&gt;,
    name: vector&lt;u8&gt;,
) <b>acquires</b> <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_User">User</a>, <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program">Program</a> {
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_deposit_token">deposit_token</a>(account, creator, collection_deposit_name, deposit_name);
    <a href="Program.md#0x8c55edbaace95e646e822fcd0d8366b9a42c19c39af9db96e0c9d9096ea6e957_Program_withdraw_token">withdraw_token</a>(account, creator, collection_name, name);
}
</code></pre>



</details>
