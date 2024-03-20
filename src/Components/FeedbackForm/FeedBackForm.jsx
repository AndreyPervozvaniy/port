import { Button, Flex, Input, Text, Spinner } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../Utills/utills";
import axios from "axios";

import { useMutation } from "react-query";

const FeedBackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
  });

  const { mutate, isLoading, isError } = useMutation(
    (data) =>
      axios.post("https://65faa1be3909a9a65b1af692.mockapi.io/Feedback", data),
    {
      onSuccess: () => {
        console.log("Форма успешно отправлена!");
        reset();
      },
      onError: (error) => {
        console.error("Ошибка при отправке формы:", error);
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Flex mt={10} justify={"center"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDir={"column"}>
          <Input
            w="500px"
            mt={3}
            placeholder="Your name..."
            {...register("name")}
          />
          <Text color={"red"}>{errors.name?.message}</Text>
          <Input mt={3} placeholder="Your email..." {...register("email")} />
          <Text color={"red"}>{errors.email?.message}</Text>
          <Input
            h={"100px"}
            placeholder={"Your feedback..."}
            mt={3}
            {...register("feedback")}
          />
          <Text color={"red"}>{errors.feedback?.message}</Text>
          <Button type="submit" mt={5} disabled={isLoading}>
            {isLoading ? (
              <Spinner color="green" size="md" />
            ) : (
              <Text>Sent</Text>
            )}
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default FeedBackForm;
