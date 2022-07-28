package handler

import (
	"github.com/unrolled/render"
	"net/http"
)

var rd *render.Render

/**
 * @api {get} /vehicle 01. 차량 정보 목록
 * @apiName VehicleList
 * @apiDescription 등록된 차량 목록 조회 API
 * @apiVersion        1.0.0
 * @apiGroup Vehicle
 *
 *
 * @apiParam {String} VIN 차대번호
 * @apiParam {String} licensePlateNumber 차량번호
 * @apiParam {String} userName 사용자이름
 * @apiParam {String} productID Emob요금제ID
 *
 * @apiSuccess {Int} vehicleID 차량ID
 * @apiSuccess {String} VIN 차대번호
 * @apiSuccess {String} licensePlateNumber 차량번호
 * @apiSuccess {String} userName 사용자이름
 * @apiSuccess {String} userEmail 사용자이메일
 * @apiSuccess {String} svcStartDate 요금제가입일
 * @apiSuccess {String} svcEndDate 요금제종료일
 *
 * @apiSuccessExample Success-Response:
 *
 *     HTTP/1.1 200 OK
 *     {
 *       "vehicleID": "1",
 *       "VIN": "test",
 *       "licensePlateNumber": "test",
 *       "userName": "jamie",
 *       "userEmail": "jamie.kim@obigo.com",
 *       "productName": "test",
 *       "svcStartDate": "2020-07-28",
 *       "svcEndDate": "2020-07-28",
 *     }
 *
 * @apiError VehicleNotFound 해당하는 차량이 없습니다.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "VehicleNotFound"
 *     }
 *
 **/

func Vehiclelist(w http.ResponseWriter, r *http.Request) {
	//todo
}

func VehicleCreatePage(w http.ResponseWriter, r *http.Request) {
	rd.HTML(w, http.StatusOK, "", nil)
}

func VehicleCreate(w http.ResponseWriter, r *http.Request) {
	//todo
}
