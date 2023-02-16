// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


export function Size(width = 80, height = 60){
        this.width = width;
        this.height = height;
} 

/**
* Function to change width and height of class Size
* 
* @param {number} width
* @param {number} height
* 
* @return {void} 
*/

Size.prototype.resize = function (width, height){
    this.width = width;
    this.height = height;
}

 /**
 * Constructor class Position
 * 
 * @param {number} x
 * @param {number} y
 * 
 * @return {void} 
 */

export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

/**
 * Function to change x and y of class Position
 * 
 * @param {number} x
 * @param {number} y
 * 
 * @return {void} 
 */

 Position.prototype.move = function (x, y){
    this.x = x;
    this.y = y;
 }


 /**
 * Constructor class ProgramWindow
 * 
 * @return {void} 
 */

export function ProgramWindow(){
    this.screenSize =  new Size(800,600);
    this.size = new Size();
    this.position = new Position();
}

/**
 * Function to change width and height of variable size in class ProgramWindow
 * 
 * @param {Size} newSize
 * 
 * @return {void} 
 */

ProgramWindow.prototype.resize = function (newSize){
    if(newSize.width < 1) newSize.width = 1
    if(newSize.height < 1) newSize.height = 1
    if( newSize.width > this.screenSize.width) newSize.width = this.screenSize.width - this.position.x;
    if( newSize.height > this.screenSize.height) newSize.height = this.screenSize.height - this.position.y;
    this.size.resize(newSize.width, newSize.height);
}

/**
 * Function to change x and y of variable position in class ProgramWindow
 * 
 * @param {Position} newPosition
 * 
 * @return {void} 
 */

ProgramWindow.prototype.move = function (newPosition){
    if(newPosition.x < 0) newPosition.x = 0
    if(newPosition.y < 0) newPosition.y = 0
    if(newPosition.x + this.size.width > this.screenSize.width) newPosition.x = this.screenSize.width - this.size.width;
    if(newPosition.y + this.size.height > this.screenSize.height) newPosition.y = this.screenSize.height - this.size.height;
    this.position.move(newPosition.x, newPosition.y);
}

/**
 * Function to change size and position of one ProgramWindow
 * 
 * @param {ProgramWindow} newProgramWindow
 * 
 * @return {ProgramWindow} return a ProgramWindow changed
 */

export function changeWindow(newProgramWindow){
    newProgramWindow.size.resize(400,300);
    newProgramWindow.position.move(100,150);
    return newProgramWindow;
}









