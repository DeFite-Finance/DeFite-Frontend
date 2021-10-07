import React from 'react';
import { useWeb3React } from '@web3-react/core';

function ChainId() {
    const { chainId } = useWeb3React();

    return (
        <>
            <span>Chain Id</span>
            <span role="img" aria-label="chain">
                ⛓
            </span>
            <span>{chainId ?? ''}</span>
        </>
    );
}

function BlockNumber() {
    const { chainId, library } = useWeb3React();

    const [blockNumber, setBlockNumber] = React.useState<number>();
    React.useEffect((): any => {
        if (library) {
            let stale = false;

            library
                .getBlockNumber()
                .then((blockNumber: number) => {
                    if (!stale) {
                        setBlockNumber(blockNumber);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBlockNumber(NaN);
                    }
                });

            const updateBlockNumber = (blockNumber: number) => {
                setBlockNumber(blockNumber);
            };
            library.on('block', updateBlockNumber);

            return () => {
                stale = true;
                library.removeListener('block', updateBlockNumber);
                setBlockNumber(undefined);
            };
        }
    }, [library, chainId]); // ensures refresh if referential identity of library doesn"t change across chainIds

    return (
        <>
            <span>Block Number</span>
            <span role="img" aria-label="numbers">
                🔢
            </span>
            <span>{blockNumber === null ? 'Error' : blockNumber ?? ''}</span>
        </>
    );
}

function Account() {
    const { account } = useWeb3React();

    return (
        <>
            <span>Account</span>
            <span role="img" aria-label="robot">
                🤖
            </span>
            <span>
                {account === null
                    ? '-'
                    : account
                    ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
                    : ''}
            </span>
        </>
    );
}

function Balance() {
    const { account, library, chainId } = useWeb3React();

    const [balance, setBalance] = React.useState<number>();
    React.useEffect((): any => {
        if (!!account && !!library) {
            let stale = false;

            library
                .getBalance(account)
                .then((balance: any) => {
                    if (!stale) {
                        setBalance(balance);
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBalance(NaN);
                    }
                });

            return () => {
                stale = true;
                setBalance(undefined);
            };
        }
    }, [account, library, chainId]); // ensures refresh if referential identity of library doesn"t change across chainIds

    return (
        <>
            <span>Balance</span>
            <span role="img" aria-label="gold">
                💰
            </span>
            <span>{balance === null ? 'Error' : balance ? `Ξ${balance}` : ''}</span>
        </>
    );
}

const WalletInfo = () => {
    const { active, error } = useWeb3React();

    return (
        <>
            <h1 style={{ margin: '1rem', textAlign: 'right' }}>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>
            <h3
                style={{
                    display: 'grid',
                    gridGap: '1rem',
                    gridTemplateColumns: '1fr min-content 1fr',
                    maxWidth: '20rem',
                    lineHeight: '2rem',
                    margin: 'auto',
                }}
            >
                <ChainId />
                <BlockNumber />
                <Account />
                <Balance />
            </h3>
        </>
    );
};

export default WalletInfo;
