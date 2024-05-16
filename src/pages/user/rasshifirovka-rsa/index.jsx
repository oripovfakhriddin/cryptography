import { Fragment, useState } from "react";

import { Button, Flex, Form, Input } from "antd";

import "./style.scss";

const RasShifirovkaRSAPage = () => {
  const [stateShifrText, setStateShifrText] = useState(null);
  const [dNumber, setDNumber] = useState(1n);
  const [pNumber, setPNumber] = useState(1n);
  const [qNumber, setQNumber] = useState(1n);

  const gcd = (a, b) => {
    while (b != 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const func = (a, n) => {
    let temp = (a * a + 1n) % n;
    return temp;
  };

  const onFinish = (values) => {
    const { eNumber, nNumber, shifrMessage } = values;

    let x0 = BigInt(2);
    let y0 = BigInt(2);

    let nN = BigInt(nNumber);

    let natija = 1n;

    for (let i = 1n; i < 1000000n; i++) {
      x0 = func(x0, nN);
      y0 = func(func(y0, nN), nN);
      let temp = x0 - y0;
      natija = gcd(temp, nN);
      if (natija !== 1n && natija !== -1n) {
        break;
      }
    }

    const pN = natija < 0 ? natija * -1n : natija;
    console.log(pN);

    setPNumber(pN);
    setQNumber(nN / pN);

    let fiNumber = (pNumber - 1n) * (qNumber - 1n);
    console.log(fiNumber);

    for (let i = 0; i < 100000; i++) {
      if ((eNumber * i) % Number(fiNumber) === 1) {
        console.log(i);
        setDNumber(i);
        break;
      }
    }

    const shifr = [];
    for (let i = 0; i < shifrMessage.length; i++) {
      shifr.push(Math.pow(shifrMessage[i], dNumber) % nNumber);
    }
    setStateShifrText(shifr);
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
              name="eNumber"
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
              name="nNumber"
              rules={[
                {
                  required: true,
                  message: "Raqam kiriting!",
                },
              ]}
            >
              <Input type="text" placeholder="N raqami" />
            </Form.Item>

            <Form.Item
              label="Shifr xabarni kiriting:  "
              name="shifrMessage"
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
