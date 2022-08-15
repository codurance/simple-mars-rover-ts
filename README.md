## Simple Mars Rover

A robotic rover is to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular,</br> must be
navigated by the rover so that its onboard camera can get a complete view of the surrounding terrain to send back to
Earth.

> Your task is to develop an API that moves the rovers around on the plateau.

In this API, the plateau is represented as a 10x10 grid, and a rover has state consisting of two parts:

- Its position on the grid (represented by an `X`,`Y` coordinate pair)
- The compass direction it's facing (represented by a letter, one of `N`, `S`, `E`, `W`)
- The starting position of the rover is `X=0`, `Y=0` and facing `N`.

The input to the program is a string of one-character move commands:

- `L` and `R` rotate the direction the rover is facing
- `M` moves the rover one grid square forward in the direction it is currently facing

_If a rover reaches the end of the plateau, it wraps around the end of the grid._

The program's output is the final position of the rover after all the move commands have been executed. The position is
represented </br> as a coordinate pair and a direction, joined by colons to form a string. For example: a rover whose position
is at square (2,3) facing west will return `2:3:W`.
