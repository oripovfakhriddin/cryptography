import { Fragment, useState } from "react";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const UserRsaPage = () => {
  const [stateShifrText, setStateShifrText] = useState(null);

  const isGCD = (e, fi) => {
    while (fi != 0) {
      let temp = fi;
      fi = e % fi;
      e = temp;
    }
    return e == 1;
  };

  const select_E_Number = (fi) => {
    for (let i = 2; i < fi; i++) {
      if (isGCD(i, fi)) {
        return i;
      }
    }
  };

  const onFinish = (values) => {
    const { pNumber, qNumber, message } = values;

    let nNumber = pNumber * qNumber;
    let fiNumber = (pNumber - 1) * (qNumber - 1);
    let eNumber = select_E_Number(fiNumber);

    let shifr = [];

   

    for (let i = 0; i < message.length; i++) {
      shifr.push(Math.pow(message[i], eNumber) % nNumber);
    }
    setStateShifrText(shifr.join(""));
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
              label="Shifrlanuvchi xabarni kiriting:  "
              name="message"
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

export default UserRsaPage;
