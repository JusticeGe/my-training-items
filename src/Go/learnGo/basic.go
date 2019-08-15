package main

import "fmt"

func variable() {
	var a int
	var s string
	fmt.Printf("%d %q \n", a,s)
}

func variableTypeDeduction() {
	var a, b, c, s = 3, 4, true, "def"
}

func main() {
	fmt.Println("hello world")
	variable()
}
