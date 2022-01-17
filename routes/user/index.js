const router = require('express').Router();
const userController = require('./user.controller');

/**
 * @swagger
 * paths:
 *   /api/user/users:
 *     get:
 *       summary: 유저 데이터 전체조회
 *       description: get요청
 *       tags: [Users]
 *       response:
 *          "200":
 *             description: 전체 유저 정보
 *             content:
 *                application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                         ok:
 *                          type: boolean
 *                         users:
 *                          type: object
 *                          example:
 *                              [
 *                                  {"id":1,"name":"유저1"}
 *                               ]        
 */
router.get('/users',userController.getUser)

/**
 * @swagger
 * /api/user/user?user_id={user_id}:
 *   get:
 *      summary: 특정 유저 조회 query방식
 *      description: 요청 경로에 값을 담아 서버에 보낸다.
 *      tags: [Users]
 *      parameters:
 *        - in: query
 *          name: user_id
 *          required: true
 *          description: 유저 아이디
 *          schema:
 *             type: string
 *      response:
 *          200:
 *             description: 사용자가 서버로 전달하는 값에 따라 결과값은 달라집니다.
 *             content:
 *                application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        ok:
 *                          type: boolean
 *                        users:
 *                          type: object
 *                          example: [{id:1,name:유저1}]                     
 */
router.get('/user',()=>{})

/**
 * @swagger
 * /api/user/add:
 *   post:
 *     summary: 유저등록
 *     description: post방식으로 유저 등록함
 *     tags: [Users]
 *     requestBody:
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값이 다릅니다.
 *        required: true
 *        content:
 *          application/x-www-form-urlencoded:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                     type: integer
 *                     description: 유저 고유아이디
 *                    name:
 *                     type: string
 *                     description: 유저 이름
 */
router.post('/add',()=>{})

module.exports = router