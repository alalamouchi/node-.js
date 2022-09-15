const http = require("http");
const nodemailer = require("nodemailer");
const server = http.createServer((req, res) => {
  try {
    if (req.url === "/sendEmail") {
      //Send confirmation email
      const output = `<h3>Welcome to NODE JS CHECKPOINT! this emai lis from Go My Code.</h3>`;
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: "service.gmc.blogs@outlook.com",
          pass: "ServiceGmcBlog@14789632",
        },
      });
      const options = {
        from: '"GMC BLOGS Contact" <service.gmc.blogs@outlook.com>"',
        to: `kmohamedanouar@gmail.com`,
        subject: "WE JUST HAVE FUN",
        html: output,
      };
      transporter.sendMail(options, function (err, data) {
        if (err) {
          console.log("Error " + err);
        } else {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write("<h1> Email was sent successfully </h1>");
          res.end();
        }
      });
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write('<h1> Please type "sendEmail" in the url</h1>');
      res.end();
    }
  } catch (error) {
    if (error) throw error;
    console.log(error);
  }
});

server.listen(5000, () => {
  console.log("server up and running");
});
