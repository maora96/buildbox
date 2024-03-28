import styled from "styled-components";
import image from "../../assets/image.svg";
import trash from "../../assets/trash.svg";
import { useEffect, useRef, useState } from "react";

const FormContainer = styled.div`
  width: 520px;
  height: 350px;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  color: #9f9f9f;
`;

const ImgUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
const Img = styled.div`
  border: 1px solid #4b4b4b;
  border-radius: 40%;
  width: 88px;
  height: 88px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreviewImg = styled.img`
  border-radius: 40%;
  width: 88px;
  height: 88px;
`;

const Preview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const NameInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #494949;
  padding: 12px 16px;
  margin-bottom: 8px;
  color: white;
`;
const PostInput = styled.input`
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: #494949;
  margin-bottom: 32px;
  color: white;
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20x;
`;
const PrimaryButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #71bb00;
  color: white;
  cursor: pointer;

  :disabled {
    background-color: #5f5f5f;
    color: #313131;
    cursor: auto;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  color: #5f5f5f;
  background: none;
  text-decoration: underline;
`;

interface IForm {
  posts: any[];
  setPosts: (posts: any) => void;
}

export default function Form({ posts, setPosts }: IForm) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e: any) => {
    if (e.target.files[0]) {
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      if (objectUrl) setImg(objectUrl);
    }
  };

  const fileInput = useRef(null);

  useEffect(() => {
    if (!img && !name && !description) {
      setIsDisabled(true);
    }

    if (!img || !name || !description) {
      setIsDisabled(true);
    }

    if (img && name && description) {
      setIsDisabled(false);
    }
  }, [img, name, description]);

  return (
    <FormContainer>
      <ImgUpload>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          id="file-button"
        />

        {img ? (
          <Preview>
            <PreviewImg src={img} />
            <img src={trash} onClick={() => setImg("")} />
          </Preview>
        ) : (
          <label htmlFor="file-button">
            <Img>
              <img src={image} />
            </Img>
          </label>
        )}
      </ImgUpload>
      <NameInput
        onBlur={(e) => {
          setName(e.target.value);
        }}
        placeholder="Digite seu nome"
      ></NameInput>
      <PostInput
        onBlur={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Mensagem"
      ></PostInput>
      <Buttons>
        <Button>Descartar</Button>
        <PrimaryButton
          disabled={isDisabled}
          onClick={() =>
            setPosts((previous: any) => [
              ...previous,
              {
                name,
                description,
                img,
                id: posts.length,
              },
            ])
          }
        >
          Publicar
        </PrimaryButton>
      </Buttons>
    </FormContainer>
  );
}
