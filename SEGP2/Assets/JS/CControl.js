﻿#pragma strict

private var agent: NavMeshAgent;

var mazeY = new Array();

var ObjectWithReader: GameObject = GameObject.FindWithTag("MainCamera"); 

function Start () {
 // get a reference to the target script (ScriptName is the name of your script):

}

public function getStuff(){

var targetScript: Reader = ObjectWithReader.GetComponent(Reader);

var x: VectorX = new VectorX();

x = targetScript.MazeY[1];

//print(x.printXvector());

}

function Update () {


 getStuff();

// rotate 0

if(Input.GetKey ("up")){

//Transform.(0,0,90);
transform.Translate(Vector3.forward * 1);
print("0");


}

// rotate 90

if (Input.GetKey ("down")){
transform.Translate(Vector3.back * 1);
//transform.Rotate = new Vector3(90.0,0.0,0.0);

}

// rotate 180

if(Input.GetKey ("right")){
//transform.Rotate = new Vector3(180.0,0.0,0.0);
transform.Translate(Vector3.right * 1);
}

// rotate 270

if(Input.GetKey ("left")){

//transform.Rotate = new Vector3(270.0,0.0,0.0);
transform.Translate(Vector3.left * 1);

print("270");

}

}