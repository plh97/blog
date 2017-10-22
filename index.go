package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

var (
	v1 = Vertex{1, 2}
	v2 = Vertex{X: 1}
	v3 = Vertex{}
	p  = Vertex{Y: 1}
)

func main() {
	fmt.Println(v1, p, v2, v3)
}
