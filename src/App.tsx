import styled from "styled-components";
import Header from "./components/header";
import Form from "./components/form";
import { useState } from "react";
import Card from "./components/card";

const Container = styled.div`
  background: #343434;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  gap: 40px;
`;

const Feed = styled.h1`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #7a7a7a;
`;

function App() {
  const [posts, setPosts] = useState<any[]>([]);
  return (
    <Container>
      <Header />
      <Form posts={posts} setPosts={setPosts} />
      <Feed>Feed</Feed>
      {posts &&
        posts.map((post: any) => (
          <Card
            id={post.id}
            name={post.name}
            img={post.img}
            description={post.description}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
    </Container>
  );
}

export default App;
