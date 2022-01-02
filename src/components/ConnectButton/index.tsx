import React from 'react';
import { useWeb3React } from '@web3-react/core';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { getErrorMessage } from '../../utils/getEthErrorMessage';
import useAuth from '../../hooks/useAuth';
import WalletAddress from '../Wallet/address';
import './index.css';

const ConnectButton = () => {
    const { active, error } = useWeb3React();

    const { login, logout } = useAuth();

    const address = WalletAddress();

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridGap: '2vw',
                    gridTemplateColumns: 'fit-content',
                    maxWidth: '20vw',
                    margin: 'auto',
                }}
            >
                {active && (
                    <Dropdown>
                        <Dropdown.Toggle variant="flat" id="dropdown-basic">
                            {address}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item>Wallet</Dropdown.Item>
                            <Dropdown.Item>Transactions</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={logout}>Disconnect</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
                {!active && !error && (
                    <Button
                        // id="connect-button"
                        variant="flat"
                        onClick={() => {
                            login();
                            localStorage.setItem('Wallet', 'Injected');
                        }}
                    >
                        Connect Wallet
                    </Button>
                )}
            </div>

            {!!error && <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>{getErrorMessage(error)}</h4>}
        </>
    );
};

export default ConnectButton;
