import { MouseEvent } from "react";
import {
  Heading,
  Link,
  Card,
  CardHeader,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export function EmptyState(props: { onChoice: (question: string) => any }) {
  const handleClick = (e: MouseEvent) => {
    props.onChoice((e.target as HTMLDivElement).innerText);
  };
  return (
    <div className="rounded flex flex-col items-center max-w-full md:p-8">
      <Heading fontSize="3xl" fontWeight={"medium"} mb={1} color={"white"}>
        Chat Neobase 🔗
      </Heading>
      <Heading
        fontSize="xl"
        fontWeight={"normal"}
        mb={1}
        color={"white"}
        marginTop={"10px"}
        textAlign={"center"}
      >
        Ask me anything about{" "}
        <Link
          href="https://neobase-2.gitbook.io/partnerai-internal-documents/"
          color={"blue.200"}
        >
          Neobase documentation!
        </Link>
      </Heading>
      <Flex marginTop={"25px"} grow={1} maxWidth={"800px"} width={"100%"}>
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"rgb(58, 58, 61)"}
          _hover={{ backgroundColor: "rgb(78,78,81)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="lg"
              fontWeight={"medium"}
              mb={1}
              color={"gray.200"}
              textAlign={"center"}
            >
              How do I use a RecursiveUrlLoader to load content from a page?
            </Heading>
          </CardHeader>
        </Card>
        <Spacer />
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"rgb(58, 58, 61)"}
          _hover={{ backgroundColor: "rgb(78,78,81)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="lg"
              fontWeight={"medium"}
              mb={1}
              color={"gray.200"}
              textAlign={"center"}
            >
              What is LangChain Expression Language?
            </Heading>
          </CardHeader>
        </Card>
      </Flex>
      <Flex marginTop={"25px"} grow={1} maxWidth={"800px"} width={"100%"}>
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"rgb(58, 58, 61)"}
          _hover={{ backgroundColor: "rgb(78,78,81)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="lg"
              fontWeight={"medium"}
              mb={1}
              color={"gray.200"}
              textAlign={"center"}
            >
              What are some ways of doing retrieval augmented generation?
            </Heading>
          </CardHeader>
        </Card>
        <Spacer />
        <Card
          onMouseUp={handleClick}
          width={"48%"}
          backgroundColor={"rgb(58, 58, 61)"}
          _hover={{ backgroundColor: "rgb(78,78,81)" }}
          cursor={"pointer"}
          justifyContent={"center"}
        >
          <CardHeader justifyContent={"center"}>
            <Heading
              fontSize="lg"
              fontWeight={"medium"}
              mb={1}
              color={"gray.200"}
              textAlign={"center"}
            >
              How do I run a model locally?
            </Heading>
          </CardHeader>
        </Card>
      </Flex>
    </div>
  );
}
