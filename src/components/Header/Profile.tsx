import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Raquel Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            raquelfrd@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Raquel Rodrigues" src="https://github.com/raquelcelty.png" />
    </Flex>
  );
}
