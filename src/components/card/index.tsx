import styled from "styled-components";
import deleteIcon from "../../assets/delete.svg";

const CardContainer = styled.div`
  width: 520px;
  height: auto;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  color: #9f9f9f;

  display: flex;
  gap: 32px;

  margin-bottom: 30px;
  padding-top: 40px;

  position: relative;
`;

const Img = styled.img`
  border-radius: 40%;
  width: 88px;
  height: 88px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 70%;
`;

const Post = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 1.25;
  color: #9f9f9f;
`;

const PostDetail = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.29px;
  color: #5f5f5f;
`;

const Signature = styled.div`
  font-size: 14px;
  line-height: 1.29;
  color: #7a7a7a;
`;

const DeleteButton = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
`;

interface ICard {
  id: number;
  description: string;
  img: string;
  name: string;
  posts: any[];
  setPosts: (posts: any) => void;
}

export default function Card({
  id,
  img,
  name,
  description,
  posts,
  setPosts,
}: ICard) {
  return (
    <CardContainer>
      <DeleteButton
        src={deleteIcon}
        onClick={() => {
          setPosts(posts.filter((post: any) => post.id !== id));
        }}
      />
      <Img src={img}></Img>
      <PostContent>
        <Post>{description}</Post>
        <PostDetail>
          Enviado por <Signature>{name}</Signature>
        </PostDetail>
      </PostContent>
    </CardContainer>
  );
}
