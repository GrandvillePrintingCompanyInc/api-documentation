const ghPages = require("gh-pages");

const NAME = "Deploy Bot";
const EMAIL = "noreply@gpco.com";
const USERNAME = "GrandvillePrintingCompanyInc";
const PROJECT = "api-documentation";

ghPages.publish(
    "public",
    {
        user: {
            name: NAME,
            email: EMAIL,
        },
        repo: "https://" + process.env.ACCESS_TOKEN + "@github.com/" + USERNAME + "/" + PROJECT + ".git",
        silent: true,
    },
    (error) => {
        if (error) {
            console.log(error);
        }
    }
);
