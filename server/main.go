package main

import (
	"github.com/gorilla/mux"
	"github.com/kaya1436/Toyproject/handler"
	"github.com/unrolled/render"
	"github.com/urfave/negroni"
	"log"
	"net/http"
)

var (
	rd *render.Render
)

func main() {
	rd = render.New(render.Options{
		Directory:  "webapp",
		Extensions: []string{".html", ".tmpl"},
	})
	mux := WebHandler()

	n := negroni.Classic()
	n.UseHandler(mux)

	log.Println("Started App")
	err := http.ListenAndServe(":3000", n)
	if err != nil {
		panic(err)
	}
}

func WebHandler() http.Handler {
	router := mux.NewRouter()

	router.HandleFunc("/", mainPage).Methods("GET")
	router.HandleFunc("/vehicle", handler.Vehiclelist).Methods("GET")
	router.HandleFunc("/vehicle/create", handler.VehicleCreatePage).Methods("GET")
	router.HandleFunc("/vehicle/create", handler.VehicleCreate).Methods("POST")

	return router
}

func mainPage(w http.ResponseWriter, r *http.Request) {
	rd.HTML(w, http.StatusOK, "index", nil)
}
