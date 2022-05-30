import { Center, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { PrimaryButton } from '../components/atomic/atoms/PrimaryButton';
import { Layout } from '../components/atomic/template/Layout';

const Page404 = () => {
  return (
    <Layout title="ページが見つかりません">
      <Center h={{ base: '800px', md: 'calc(100vh - 100px)' }} bg="#EDEDED">
        <VStack>
          <Heading color="gray.700" size="md" p={4}>
            このページは見つかりませんでした。
          </Heading>
          <Text color="gray.600" mb="30px" fontSize="13px" maxW="86vw" p={4}>
            ページが削除されているか、URLが誤っている可能性があります。
          </Text>
          <Image src="/404.jpg" alt="Not Found 404" width={600} height={322} />
          <br />
          <Link href="/">
            <a href="replace">
              <PrimaryButton>トップページへ</PrimaryButton>
            </a>
          </Link>
        </VStack>
      </Center>
    </Layout>
  );
};

export default Page404;
