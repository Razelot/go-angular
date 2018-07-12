package main

func main() {
	a := App{}
	a.Initialize("root", "", "rest_api_example")

	a.Run(":8080")
	// http.Handle("/", http.FileServer(http.Dir("./public/dist/client")))
	// http.ListenAndServe(":3000", nil)
}
