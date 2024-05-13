import { Fragment, useState } from "react";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const UserDeshifrRsaPage = () => {
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

  const isCoprime = (e, fi) => {
    while (fi != 0) {
      let temp = fi;
      fi = e % fi;
      e = temp;
    }
    return e == 1;
  };

  const select_E_Number = (fi) => {
    for (let i = 2; i < fi; i++) {
      if (isCoprime(i, fi)) {
        return i;
      }
    }
  };

  const rsa = (a, b) => {
    for (let i = 0; i < 10000; i++) {
      if ((a * i) % b == 1) {
        return i;
      }
    }
  };

  const onFinish = (values) => {
    const { pNumber, qNumber, deText } = values;

    let nNumber = pNumber * qNumber;
    let fiNumber = (pNumber - 1) * (qNumber - 1);
    let eNumber = select_E_Number(fiNumber);
    let dNumber = rsa(eNumber, fiNumber);

    //DESHIFRLASH

    let deShifr = [];
    let deShifrText = "";

    for (let i = 0; i < deText.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (deText[i] == alphabet[j]) {
          deShifr.push(Math.pow(j + 1, dNumber) % nNumber);
        }
      }
    }

    for (let i = 0; i < deShifr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (deShifr[i] == j + 1) {
          deShifrText += alphabet[j];
        }
      }
    }
    setStateShifrText(deShifrText);
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
              label="P raqamini kiriting: "
              name="pNumber"
              rules={[
                {
                  required: true,
                  message: "Iltimos P ni kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="p raqami" />
            </Form.Item>

            <Form.Item
              label="Q raqamini kiriting: "
              name="qNumber"
              rules={[
                {
                  required: true,
                  message: "Iltimos Q ni kiriting!",
                },
              ]}
            >
              <Input type="number" placeholder="q raqami" />
            </Form.Item>

            <Form.Item
              label="Deshifrlanuvchi xabarni kiriting:  "
              name="deText"
              rules={[
                {
                  required: true,
                  message: "Iltimos deshifrlanuvchi xabarni kiriting!",
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
              {`Sizning deshifrlangan xabaringiz quyidagi joyda ko'rinadi!`}
            </p>
          ) : (
            <p className="rsa__shifrText">{stateShifrText}</p>
          )}
        </Flex>
      </section>
    </Fragment>
  );
};

export default UserDeshifrRsaPage;
