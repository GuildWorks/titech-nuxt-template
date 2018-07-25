const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const routes = Object.assign({},
  JSON.parse(fs.readFileSync('./db/users.json', 'UTF-8')),
  JSON.parse(fs.readFileSync('./db/teams.json', 'UTF-8')),
);
const router = jsonServer.router(routes);
const middlewares = jsonServer.defaults();

//署名作成ワードと有効期限(1時間)
const SECRET_WORD = 'SECRET1234567890';
const expiresIn = '1h';

//署名作成関数
const createToken = payload => jwt.sign(payload, SECRET_WORD, {expiresIn})

//データファイル読み込み
const generateDb = (jsonFilePath) => JSON.parse(fs.readFileSync(jsonFilePath, 'UTF-8'));

//ログイン関数 true:SUCCESS false:ERROR
const isAuth = ({email, password}) =>
generateDb('./db/users.json').users.findIndex(user => user.email === email && user.password === password) !== -1

//ログインRouter
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.post('/api/sign_in', (request, response) => {
  const {email, password} = request.body;

  if (!isAuth({email, password})) {
    const status = 401;
    const message = 'Incorrect email or password';
    response.status(status).json({status, message});
    return
  }

  //ログイン成功時に認証トークンを発行
  const access_token = createToken({email, password});
  response.status(200).json({access_token})
});

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/api/sign_up": "/users",
  '/api/*': '/$1'
}));
server.use(router);
server.listen(3000, () => {
  Object.keys(routes).forEach((key) => console.log(`  http://localhost:3000/${key}`));
  console.log('JSON Server is running')
});

