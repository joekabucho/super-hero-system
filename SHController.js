#pragma strict

private var chMotor : CharacterMotor;

private var superSprint : boolean = false;
private var superJump : boolean = false;
private var slowMo : boolean = false;
private var hawkEye : boolean = false;

var mainCamera : Camera;
var zoom : int = 20;
var normal : int = 60;
var smooth : float = 100;

var commands : Texture;

function Start()
{
	chMotor = GetComponent(CharacterMotor);
}

function Update()
{
	//Super Jump
	if(Input.GetKeyDown("1"))
	{
		superJump = !superJump;
		
		if(superJump == true)
		{
			chMotor.jumping.baseHeight = 100;
			chMotor.movement.maxFallSpeed = 200;
		}
		
		else if(superJump == false)
		{
			chMotor.jumping.baseHeight = 10;
			chMotor.movement.maxFallSpeed = 20;
		}
	}
	
	//Super Speed
	if(Input.GetKeyDown("2"))
	{
		superSprint = !superSprint;
		
		if(superSprint == true)
		{
			chMotor.movement.maxForwardSpeed = 50;
			chMotor.movement.maxSidewaysSpeed = 50;
		}
		
		else if(superSprint == false)
		{
			chMotor.movement.maxForwardSpeed = 6;
			chMotor.movement.maxSidewaysSpeed = 6;
		}
	}
	
	//Slow Motion
	if(Input.GetKeyDown("3"))
	{
		slowMo = !slowMo;
		
		if(slowMo == true && Time.timeScale == 1.0)
		{
			Time.timeScale = 0.3;
		}
		
		else
			Time.timeScale = 1.0;
			Time.fixedDeltaTime = 0.02 * Time.timeScale;
	}
	
	//Hawk Eye
	if(Input.GetKeyDown("4"))
	{
		hawkEye = !hawkEye;
		
		if(hawkEye == true)
		{
			mainCamera.fieldOfView = Mathf.Lerp(mainCamera.fieldOfView, zoom, Time.deltaTime * smooth);
		}
		
		else if(hawkEye == false)
		{
			mainCamera.fieldOfView = Mathf.Lerp(mainCamera.fieldOfView, normal, Time.deltaTime * smooth);
		}
	}
}

function OnGUI()
{
	GUI.DrawTexture(Rect(10,10, 500, 101), commands);
}
