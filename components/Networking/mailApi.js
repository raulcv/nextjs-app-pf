import axios from "axios";

export const sendContactMail = async (name, mail, subject, message) => {
  const data = { name, mail, subject, message };
  try {
    const res = await axios({
      method: "post",
      url: "/api/contact",
      headers: {"Content-Type": "application/json",},
      data,
    });
    console.log("ResponseMailApi: ", res);
    return res;
  } catch (error) {
    console.log("Error MailApi: ", error);
    return error;
  }
};