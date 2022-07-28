package handler

import (
	"github.com/unrolled/render"
	"net/http"
)

var rd *render.Render

func Vehiclelist(w http.ResponseWriter, r *http.Request) {
	//todo
}

func VehicleCreatePage(w http.ResponseWriter, r *http.Request) {
	rd.HTML(w, http.StatusOK, "index", nil)
}

func VehicleCreate(w http.ResponseWriter, r *http.Request) {
	//todo
}
