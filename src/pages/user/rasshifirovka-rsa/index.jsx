import { Fragment, useState } from "react";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const RasShifirovkaRSAPage = () => {
  const [stateShifrText, setStateShifrText] = useState(null);
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "@",
    "#",
    "$",
    "%",
    "&",
    "!",
    "?",
    ".",
    "'",
    ":",
    ";",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ")",
  ];

  const onFinish = (values) => {
    const { key, text } = values;
    let universalKey = "";
    if (key.length >= text.length) {
      universalKey = key;
    } else {
      for (let i = 0; i < Math.ceil(text.length / key.length); i++) {
        universalKey += key;
      }
    }

    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
      const keyChar = universalKey[i];
      const textChar = text[i];

      const keyNum = alphabet.indexOf(keyChar);
      const textNum = alphabet.indexOf(textChar);

      const encryptedChar = alphabet[keyNum ^ textNum];
      encryptedText += encryptedChar;
    }
    setStateShifrText(encryptedText);
  };

  return (
    <Fragment>
      <section>
        <Flex className="form__box__rsa" align="center" justify="center">
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="E raqamini kiriting: "
              name="pNumber"
              rules={[
                {
                  required: true,
                  message: "Raqam kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="e raqami" />
            </Form.Item>

            <Form.Item
              label="N raqamini kiriting: "
              name="qNumber"
              rules={[
                {
                  required: true,
                  message: "Raqam kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="N raqami" />
            </Form.Item>

            <Form.Item
              label="Shifr xabarni kiriting:  "
              name="text"
              rules={[
                {
                  required: true,
                  message: "Iltimos shifrlanuvchi xabarni kiriting!",
                },
              ]}
            >
              <Input.TextArea placeholder="Xabarrni kiriting" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button
                style={{ width: "100%", marginTop: "20px" }}
                type="primary"
                htmlType="submit"
              >
                Hisoblash
              </Button>
            </Form.Item>
          </Form>
        </Flex>
        <Flex className="form__box__rsa" align="center" justify="center">
          {stateShifrText === null ? (
            <p className="rsa__shifrText">
              {`Sizning shifrlangan xabaringiz quyidagi joyda ko'rinadi!`}
            </p>
          ) : (
            <p className="rsa__shifrText">{stateShifrText}</p>
          )}
        </Flex>
      </section>
    </Fragment>
  );
};

export default RasShifirovkaRSAPage;
