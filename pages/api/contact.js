import { getDomainLocale } from "next/dist/next-server/lib/router/router";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.DEFAULT_EMAIL,
    pass: process.env.PASSWORD_MAIL,
  },
});
let Response = { Id: 1, Message: "Enviado Correctamente" }
//[1]
export default async (req, res) => {
  const { name, mail, subject, message } = req.body;
  //[2]
  let recipientMail = process.env.MY_EMAIL, senderMail = process.env.DEFAULT_EMAIL;
  let checkMailer = await transporter.verify();
  if (!checkMailer) {
    Response.Id = 0;
    Response.Message = "Error con el mail transporter";
    res.responseCustom = Response;
    res.status(403).send("Error con el mail transporter");
    return;
  }
  console.log("*******************************")
  console.log("name: ", name)
  console.log("mail: ", mail)
  console.log("subject: ", subject)
  console.log("message: ", message)
  console.log("*******************************")
  // Check if fields are all filled
  if (!name) {
    Response.Id = 0;
    Response.Message = "Tiene que igresar su Nombre";
    res.responseCustom = Response;
    console.log("*****************111111**************")
    res.status(403).send(Response);
    return res;
  } else if (!mail) {
    Response.Id = 0;
    Response.Message = "Tiene que igresar su Email";
    // res.responseCustom = Response;
    res.status(403).send(Response);
    console.log("*****************222222**************")
    return;
  } else if (!subject) {
    Response.Id = 0;
    Response.Message = "Tiene que igresar el Asunto del correo";
    res.responseCustom = Response;
    res.status(403).send(Response);
    return;
  } else if (!message) {
    Response.Id = 0;
    Response.Message = "Tiene que escribir un mensaje";
    res.responseCustom = Response;
    res.status(403).send(Response);
    return;
  } else {
    console.log("Validations: All okay...")
  }
  // if (name === "" || mail === "" || subject === "" || message === "") {
  //   res.status(403).send("Error Fill fields");
  //   console.log("Error: Fill all fields")
  //   return;
  // } else {
  //   console.log("Validations: All okay...")
  // }

  //[3]
  const mailerRes = await mailer({ name, mail, subject, message, recipientMail, senderMail });
  console.log("mailerRest: ", mailerRes);
  res.send(mailerRes);
  res.responseCustom = Response;
  //[4]
};

const mailer = ({ name, mail, subject, message, recipientMail, senderMail }) => {
  // console.log('Mailer: ', { name, mail, subject, message, recipientMail, senderMail })
  let from = name && senderMail ? `${name} <${mail}>` : `${name || senderMail}`; // Raul <iraulcv@gmail.com>

  let htmlContentMe = `
  <table border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;border-spacing:0;width:100%;max-width:968px">
    <tbody>
      <tr>
        <td style="width:50px"></td>
        <td style="text-align: start;">
          <img width="42" height="42" alt="raulcv" src="https://res.cloudinary.com/dcx0xabfe/image/upload/v1634365708/samples/raulcv/raven-raul_a3rvq4.png" border="0" style="border:none;padding:0;margin:0" class="CToWUd"/></td>
        <td style="text-align:end;font-size:32px;font-weight:300;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(136,136,136)">Hello Raúl</td>
        <td style="width:50px"></td>
      </tr>
      <tr height="20"><td colspan="4">&nbsp;</td>
      </tr>
      <tr> </tr>
      <tr>
        <td colspan="4" align="center">
          <table border="0" cellpadding="0" cellspacing="0" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;width:100%;max-width:968px">
            <tbody>
              <tr height="10">
                <td bgcolor="#f5f5f5" colspan="3" style="border-radious:30px 30px 0 0">&nbsp;</td>
              </tr>
              <tr>
                <td bgcolor="#f5f5f5" style="width:20px">&nbsp;</td>
                <td bgcolor="#f5f5f5" align="left">
                  <table border="0" cellpadding="0" cellspacing="0" valign="middle" style="border-collapse:collapse;border-spacing:0;background-color:rgb(245,245,245);border-radius:3px;font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
                    <tbody>
                      <tr>
                        <td align="left" style="font-size:25px;font-weight:200;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(250,87,81)">Raul, [${name}] te está contactando</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td bgcolor="#f5f5f5" style="width:20px">&nbsp;</td>
              </tr>
              <tr height="10">
                <td bgcolor="#f5f5f5" colspan="3" style="border-radious:0 0 30px 30px">&nbsp;</td>
              </tr>

              <tr style="height:20px">
                <td></td>
              </tr>
              <tr>
                <td style="width:20px"></td>
                <td>${message}</td>
                <td style="width:20px"></td>
              </tr>
              
              <tr style="height:40px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td style="width:20px"></td>
                <td>${name},<br/><br/>Saludos cordiales</td>
                <td style="width:20px"></td>
              </tr>
              <tr style="height:20px">
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td style="width:20px"></td>
                <td align="center" style="font-size:12px;color:rgb(102,102,102);line-height:18px">mi página web raulcv.com, visita 
                  <a href="http://localhost:3000" rel="noopener nofollow" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3000&amp;source=gmail&amp;ust=1633846035399000&amp;usg=AFQjCNFFFXrUfOcRsQdWvyd8xlKCQRokvQ">Raul C.V</a>.</td>
                <td style="width:20px"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr style="height:50px"><td colspan="4">&nbsp;</td></tr>
      <tr>
        <td></td>
        <td colspan="2" align="center" style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(102,102,102)">
          <img width="26" height="26" border="0" alt="raulcv icon" src="https://res.cloudinary.com/dcx0xabfe/image/upload/v1634365708/samples/raulcv/raven-raul_a3rvq4.png" style="border:none;padding:0;margin:0"/>
        </td>
        <td></td>
      </tr>
      <tr height="25"><td colspan="4">&nbsp;</td></tr>
      <tr>
        <td></td>
        <td colspan="2" align="center" style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(102,102,102)">
          Copyright © ${new Date().getFullYear()} raulcv. <br/><a href="http://localhost:3000" style="color:#1187ff" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3000;source=gmail&amp;ust=1633846035399000&amp;usg=AFQjCNHw8tt6k5p1ZX_6aedVgYVAuBZC0w">All rights reserved</a>
        </td>
        <td></td>
      </tr>
      <tr height="25">
        <td colspan="4" height="30">&nbsp;</td>
      </tr>
    </tbody>
  </table>
    `;

  let htmlContentClient = `
    <table border="0" cellpadding="0" cellspacing="0" align="center" style="border-collapse:collapse;border-spacing:0;width:100%;max-width:968px">
      <tbody>
        <tr>
          <td style="width:50px"></td>
          <td style="text-align:start;">
            <img width="42" height="42" alt="raulcv" src="https://res.cloudinary.com/dcx0xabfe/image/upload/v1634365708/samples/raulcv/raven-raul_a3rvq4.png" border="0" style="border:none;padding:0;margin:0" class="CToWUd"/></td>
        </tr>
        <tr height="20"><td colspan="4">&nbsp;</td>
        </tr>
        <tr> </tr>
        <tr>
          <td colspan="4" align="center">
            <table id="m_5683279172421599379content-tbl" border="0" cellpadding="0" cellspacing="0" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;width:100%;max-width:968px">
              <tbody>
                <tr height="10">
                  <td bgcolor="#f5f5f5" colspan="3" style="border-radious:30px 30px 0 0">&nbsp;</td>
                </tr>
                <tr>
                  <td bgcolor="#f5f5f5" style="width:20px">&nbsp;</td>
                  <td bgcolor="#f5f5f5" align="left">
                    <table border="0" cellpadding="0" cellspacing="0" valign="middle" style="border-collapse:collapse;border-spacing:0;background-color:rgb(245,245,245);border-radius:3px;font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
                      <tbody>
                        <tr>  
                          <td align="left" style="font-size:25px;font-weight:200;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(250,87,81)">${name}, contactaste a Raul CV</td>
                        </tr>
                        <tr style="height:20px"><td></td>
                        </tr>
                        <tr>
                          <td valign="top" align="center" style="padding:0;margin:0">Este correo es una confirmación del mensaje que enviaste a través de la página web https://raulcv.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td bgcolor="#f5f5f5" style="width:20px">&nbsp;</td>
                </tr>
                <tr height="10">
                  <td bgcolor="#f5f5f5" colspan="3" style="border-radious:0 0 30px 30px">&nbsp;</td>
                </tr>
                <tr style="height:20px"><td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="width:20px"></td>
                  <td>Estimado ${name},</td>
                  <td style="width:20px"></td>
                </tr>
                <tr style="height:20px">
                  <td></td>
                </tr>
                <tr>
                  <td style="width:20px"></td>
                  <td>Gracias por contactarme, si tiene alguna consulta sobre los servicios que brindo puede enviarme un mensaje por WhatsApp.</td>
                  <td style="width:20px"></td>
                </tr>
                <tr style="height:25px">
                  <td></td>
                </tr>
                <tr>
                  <td style="width:20px"></td>
                  <td><a href="https://wa.me/51935154523" rel="nofollow" target="_blank">
                    <button style="font-size:17px;line-height:1.47059;font-weight:400;letter-spacing:-0.022em;
                    font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,Arial,sans-serif;
                    background-color:#0070c9;border-color:#07c;border-width:1px;border-style:solid;border-radius:4px;color:white;
                    display:inline-block;min-width:30px;padding-left:15px;padding-right:15px;padding-top:4px;padding-bottom:4px;
                    text-align:center;white-space:nowrap">WhatsApp +51 935 154 5..</button></a></td>
                  <td style="width:20px"></td>
                </tr>
                <tr style="height:40px">
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="width:20px"></td>
                  <td>Raul,<br/><br/>Saludos cordiales</td>
                  <td style="width:20px"></td>
                </tr>
                <tr style="height:20px">
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td style="width:20px"></td>
                  <td align="center" style="font-size:12px;color:rgb(102,102,102);line-height:18px">mi página web raulcv.com, visita 
                    <a href="http://localhost:3000" rel="noopener nofollow" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3000&amp;source=gmail&amp;ust=1633846035399000&amp;usg=AFQjCNFFFXrUfOcRsQdWvyd8xlKCQRokvQ">Raul C.V</a>.</td>
                  <td style="width:20px"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr style="height:50px"><td colspan="4">&nbsp;</td></tr>
        <tr>
          <td></td>
          <td colspan="2" align="center" style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(102,102,102)">
            <img width="26" height="26" border="0" alt="raulcv icon" src="https://res.cloudinary.com/dcx0xabfe/image/upload/v1634365708/samples/raulcv/raven-raul_a3rvq4.png" style="border:none;padding:0;margin:0"/>
          </td>
          <td></td>
        </tr>
        <tr height="25"><td colspan="4">&nbsp;</td></tr>
        <tr>
          <td></td>
          <td colspan="2" align="center" style="font-size:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:rgb(102,102,102)">
            Copyright © ${new Date().getFullYear()} raulcv. <br/><a href="http://localhost:3000" style="color:#1187ff" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://localhost:3000;source=gmail&amp;ust=1633846035399000&amp;usg=AFQjCNHw8tt6k5p1ZX_6aedVgYVAuBZC0w">All rights reserved</a>
          </td>
          <td></td>
        </tr>
        <tr height="25">
          <td colspan="4" height="30">&nbsp;</td>
        </tr>
      </tbody>
    </table>
      `;

  let mailDetails = {
    from,
    to: `${recipientMail}`,
    // subject: `New message from ${from}`,
    subject,
    // text,
    html: htmlContentMe,
    replyTo: from,
  };
  let fromCli = `${"Raul"} <${"iraulcv@gmail.com"}>`;
  let mailDetailsClient = {
    from: fromCli,
    to: `${mail}`,
    subject: "Respuesta automatica de Raul",
    // text,
    html: htmlContentClient,
    replyTo: recipientMail,
  };
  //[5]
  var EmailToClient = new Promise((resolve, reject) => {
    transporter.sendMail(mailDetails, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
  var EmailToMe = new Promise((resolve, reject) => {
    transporter.sendMail(mailDetailsClient, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
  return Promise.all([EmailToClient, EmailToMe]).then(function (values) {
    console.log(values);
  });
  // console.log(promesas)
  // return promesas;
  //[6]
};
