// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import logo from "@/app/public/images/logos/logo.png";

// const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);

  // const message = `
  // Name: ${body.name}\r\n
  // Email: ${body.email}\r\n
  // Message: ${body.message}\r\n
  // Phone: ${body.message}\r\n
  // `;

  const message = `
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 9]>
		<xml>
			<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]>
					<!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
						<![endif]-->
    <!-- Your title goes here -->
    <title>加拿大温州同乡会</title>
    <!-- End title -->
    <!-- Start stylesheet -->
    <style type="text/css">
      a,
      a[href],
      a:hover,
      a:link,
      a:visited {
        /* This is the link colour */
        text-decoration: none !important;
        color: #0000EE;
      }

      .link {
        text-decoration: underline !important;
      }

      p,
      p:visited {
        /* Fallback paragraph style */
        font-size: 15px;
        line-height: 24px;
        font-family: 'Helvetica', Arial, sans-serif;
        font-weight: 300;
        text-decoration: none;
        color: #000000;
      }

      h1 {
        /* Fallback heading style */
        font-size: 22px;
        line-height: 24px;
        font-family: 'Helvetica', Arial, sans-serif;
        font-weight: normal;
        text-decoration: none;
        color: #000000;
      }

      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td {
        line-height: 100%;
      }

      .ExternalClass {
        width: 100%;
      }
    </style>
    <!-- End stylesheet -->
  </head>
  <!-- You can change background colour here -->
  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">
    <!-- Fallback force center content -->
    <div style="text-align: center;">
      <!-- Start container for logo -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">
              <!-- Your logo is here -->
              <img style="width: 180px; max-width: 180px; height: 85px; max-height: 85px; text-align: center; color: #ffffff;" alt="Logo" src="https://ccgtv.org/wp-content/uploads/2021/08/007-温州同乡总会-1024x765.png" align="center" width="180" height="85">
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End container for logo -->
      <!-- Hero image -->
      <img style="width: 600px; max-width: 600px; height: 350px; max-height: 350px; text-align: center;" alt="Hero image" src="https://fullsphere.co.uk/misc/free-template/images/hero.jpg" align="center" width="600" height="350">
      <!-- Hero image -->
      <!-- Start single column section -->
      <table align="center" style="text-align: left; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">
              <h1 style="font-size: 20px; line-height: 24px; text-align: center; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">温州联谊会的新邮件</h1>
              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                <strong>Name:&#32</strong>${body.name}
              </p>
              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                <strong>Email:&#32</strong>${body.email}
              </p>
              <p style="font-size: 15px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                <strong>Phone:&#32</strong>${body.phone}
              </p>
              <p style="font-size: 15px; display: inline-block !important;
              width: 560px !important;
              overflow-wrap: break-word !important; 
              word-wrap: break-word !important; 
              word-break: break-all !important; 
              word-break: break-word !important; word-break: normal; border-collapse : collapse !important; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #919293;">
                <strong>Message:&#32</strong>${body.message}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->
      <!-- Start image -->
      <img style="width: 600px; max-width: 600px; height: 240px; max-height: 240px; text-align: center;" alt="Image" src="https://fullsphere.co.uk/misc/free-template/images/image-2.jpg" align="center" width="600" height="240">
      <!-- End image -->
      <!-- Start footer -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #C13F3F;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
              <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;"> 4266 Hazelbridge Way, Richmond, BC V6X 0J5 </p>
              <p style="margin-bottom: 0; font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                <a target="_blank" style="text-decoration: underline; color: #ffffff;" href="https://wzcanada.com"> www.wzcanada.com </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End footer -->
      <!-- Start unsubscribe section -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">
              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #919293; margin-top: 30px;"> Developed by Xiang Daniel Shi from <a style="text-decoration: none; color: #111626;" href="https://005f.agency">
                  <u>005F Agency</u>
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End unsubscribe section -->
    </div>
  </body>
</html>
  `;

  const data = {
    to: "danielxshi@hotmail.com",
    from: "webform@wzcanada.com",
    subject: "NextJS Contact Form",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);
  res.status(200).json({ status: "Ok" });
};
