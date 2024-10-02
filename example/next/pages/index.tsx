import "@leapwallet/cosmos-social-login-capsule-provider-ui/styles.css";

import { Center, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { useAccount } from "graz";
import type { NextPage } from "next";
import { BalanceList } from "ui/balance-list";
import CapsuleModals from "ui/capsule-modals";
import { ChainSwitcher } from "ui/chain-switcher";
import { ConnectButton } from "ui/connect-button";
import { ConnectStatus } from "ui/connect-status";
import { ToggleTheme } from "ui/toggle-theme";

const HomePage: NextPage = () => {
  const { data: accountData } = useAccount({
    chainId: "cosmoshub-4",
  });

  return (
    <Center minH="100vh">
      <Stack bgColor="whiteAlpha.100" boxShadow="md" maxW="md" p={4} rounded="md" spacing={4} w="full">
        <HStack>
          <ConnectStatus />
        </HStack>
        {accountData ? (
          <>
            <Text>
              Wallet name: <b>{accountData.name}</b>
            </Text>
            <Text noOfLines={1} wordBreak="break-all">
              Wallet address: <b>{accountData.bech32Address}</b>
            </Text>

            <BalanceList />
            <ChainSwitcher />
          </>
        ) : null}
        <HStack align="end" pt={4}>
          <ToggleTheme />
          <Spacer />
          <ConnectButton />
        </HStack>
      </Stack>
      <CapsuleModals />
    </Center>
  );
};

export default HomePage;
