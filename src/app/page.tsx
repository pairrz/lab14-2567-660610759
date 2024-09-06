"use client";
import { Container, Text, Title, Rating, Textarea, Button, Divider, Group, Pagination } from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>

      <Rating defaultValue={0} size="lg" count={5} />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        autosize
        minRows={3}
        maxRows={3}
      />

      <Button variant="filled" color="orange" mt="xs">Submit Review</Button>

      <Divider my="md" />
      
      <Group justify="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly size="sm" />
      </Group>

      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="md" />

      <Group justify="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={5} readOnly size="sm" />
      </Group>

      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Group justify="center" mt="md">
        <Pagination total={20} boundaries={1} defaultValue={10} variant="filled" color="orange" />
      </Group>

      <Text ta="center" my="sm">
        Copyright © 2024 Dararat Buayim 660610759
      </Text>
    </Container>
  );
}