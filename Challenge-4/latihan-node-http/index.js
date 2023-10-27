const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const { PORT = 8000 } = process.env;
const PUBLIC_DIR = path.join(__dirname, 'public');

function getHtml(page) {
    const htmlPath = path.join(PUBLIC_DIR, `${page}.html`);
    return fs.readFileSync(htmlPath, 'utf-8');
};

// Function to serve CSS files
function getCss(cssFile) {
    const cssPath = path.join(PUBLIC_DIR, 'css', cssFile); // Assuming CSS files are in a "css" subdirectory
    return fs.readFileSync(cssPath, 'utf-8');
};

function getImage(imageFile) {
    const imagePath = path.join(PUBLIC_DIR, 'asset', imageFile);
    return fs.readFileSync(imagePath, 'utf-8');
};

function getJs(jsFile) {
    const jsPath = path.join(PUBLIC_DIR, 'scripts', jsFile);
    return fs.readFileSync(jsPath, 'utf-8');
};

function getJSON(data) {
    const toJSON = JSON.stringify(data);
    return toJSON;
};

function router() {
    const routes = {
        get: () => { },
        post: () => { },
    };

    const get = (req, res) => {
        routes.get[req] = res;
    };

    const post = (req, res) => {
        routes.post[req] = res;
    };

    return {
        get,
        post,
        routes,
    };
};

const appRouter = router();

appRouter.get("/", (req, res) => {
    const pageContent = getHtml("index");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(pageContent);
});

appRouter.get("/search", (req, res) => {
    const pageContent = getHtml("search");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(pageContent);
});

// Add a route for serving CSS files
appRouter.get("/css/style.css", (req, res) => {
    const cssContent = getCss("style.css");
    res.setHeader("Content-Type", "text/css");
    res.writeHead(200);
    res.end(cssContent);
});

appRouter.get("/scripts/car.js", (req, res) => {
    const jsContent = getJs("car.js");
    res.setHeader("Content-Type", "text/javascript");
    res.writeHead(200);
    res.end(jsContent);
})

appRouter.get("/asset/:imageFile", (req, res) => {
    const imageFile = req.params.imageFile;
    const imageContent = getImage(imageFile);

    // Determine the content type based on the file extension (you may need to handle different image types)
    const extension = path.extname(imageFile).toLowerCase();
    let contentType = 'image/png'; // Default content type

    if (extension === '.jpg' || extension === '.jpeg') {
        contentType = 'image/jpeg';
    } else if (extension === '.gif') {
        contentType = 'image/gif';
    } else if (extension === '.webp') {
        contentType = 'image/webp';
    } // Add more extensions as needed

    res.setHeader("Content-Type", contentType);
    res.writeHead(200);
    res.end(imageContent);
});


const server = () => {
    return (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const { pathname } = parsedUrl;

        if (req.method === "GET" && appRouter.routes.get[pathname]) {
            appRouter.routes.get[pathname](req, res);
        } else if (req.method === "POST" && appRouter.routes.post[pathname]) {
            appRouter.routes.post[pathname](req, res);
        } else {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(404);
            res.end(getHtml("404"));
        };
    };
};

http.createServer(server()).listen(PORT, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
